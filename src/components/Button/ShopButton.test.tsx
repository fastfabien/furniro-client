import { render, screen, fireEvent } from "@testing-library/react";
import { ShopButton } from "./ShopButton";

describe("Shop Button", () => {
  test("Render type submit", () => {
    render(<ShopButton type="submit">Add to cart</ShopButton>);
    const addToCart = screen.getByTestId("add-to-cart");
    expect(addToCart).toBeInTheDocument();
  });
  test("Render type number: It increase or decrease input value when i click on minus or plus", () => {
    render(<ShopButton type="number" />);

    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("value", "1");

    const minus = screen.getByTestId("minus");
    expect(minus).toBeInTheDocument();
    fireEvent.click(minus);
    expect(input).toHaveAttribute("value", "1");

    const plus = screen.getByTestId("plus");
    expect(plus).toBeInTheDocument();

    fireEvent.click(plus);
    expect(input).toHaveAttribute("value", "2");
    fireEvent.click(minus);
    expect(input).toHaveAttribute("value", "1");
  });
});
