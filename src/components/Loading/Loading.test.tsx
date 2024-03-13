import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading", () => {
  test("Render correctly", () => {
    render(<Loading />);
    const container = screen.getByTestId("loading-container");
    expect(container).toBeInTheDocument();
    const icon = screen.getByTestId("loading-icon");
    expect(icon).toBeInTheDocument();
  });
});
