import { render, screen, fireEvent } from "@testing-library/react";
import { BreadcrumbItem } from "../../common";
import { Breadcrumb } from "./BreadCrumb";
import { BrowserRouter } from "react-router-dom";

describe("Breadcrumb", () => {
  test("Render correctly", () => {
    const breadcrumbItems: BreadcrumbItem[] = [
      { url: "/", label: "Home" },
      { url: "/shop", label: "shop" },
    ];
    render(
      <BrowserRouter>
        <Breadcrumb items={breadcrumbItems} />
      </BrowserRouter>
    );

    breadcrumbItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });

    breadcrumbItems.slice(0, -1).forEach((item) => {
      const link = screen.getByRole("link", { name: item.label });
      link.hasAttribute("href");
      fireEvent.click(link);

      expect(window.location.pathname).toBe("/");
    });
    const lastItem = breadcrumbItems[breadcrumbItems.length - 1];
    expect(
      screen.getByText(lastItem.label).closest("span")
    ).toBeInTheDocument();
  });
});
