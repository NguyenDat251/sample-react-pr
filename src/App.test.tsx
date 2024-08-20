import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Hello, world! heading", () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Hello, world!/i);
  expect(headingElement).toBeInTheDocument();
});
