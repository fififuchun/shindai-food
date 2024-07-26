/* eslint-disable react/react-in-jsx-scope */

// TextInput.test.js
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";
// import React from "react";

test("TextInput Component Test", async () => {
  const user = userEvent.setup();
  render(<TextInput />);
  const inputElement = screen.getByLabelText("Text Input");
  expect(screen.getByText("Entered Text:")).toBeInTheDocument();

  await user.type(inputElement, "Hello World");
  expect(screen.getByText("Entered Text: Hello World")).toBeInTheDocument();
});
