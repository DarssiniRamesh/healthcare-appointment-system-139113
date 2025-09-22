import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders booking flow heading", () => {
  render(<App />);
  const heading = screen.getByText(/Choose Your Doctor/i);
  expect(heading).toBeInTheDocument();
});
