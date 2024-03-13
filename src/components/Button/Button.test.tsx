import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import {
  Button,
  ButtonSubscribe,
  PaginationButton,
  SubmitButton,
} from "./Button";

describe("Button", () => {
  test("Normal button", () => {
    render(<Button>Go</Button>);
    const btn = screen.getByTestId("btn");
    expect(btn).toBeInTheDocument();
  });
  test("Button link", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Button href="/">Go</Button>
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /Go/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");

    fireEvent.click(link);

    expect(window.location.pathname).toBe("/");
  });
  test("Pagination button", () => {
    const setCurrentPage = jest.fn();
    const index = 2;
    render(
      <PaginationButton
        isactive="true"
        index={index}
        setCurrentPage={setCurrentPage}
      >
        {index}
      </PaginationButton>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(setCurrentPage).toHaveBeenCalledWith(index);
  });
  test("Subscribe button", () => {
    render(<ButtonSubscribe>Subscribe</ButtonSubscribe>);
    const subscribe = screen.getByTestId("subscribe");
    expect(subscribe).toBeInTheDocument();
  });
  test("Submit button", () => {
    render(<SubmitButton>Submit</SubmitButton>);
    const submit = screen.getByTestId("submit");
    expect(submit).toBeInTheDocument();
  });
});
