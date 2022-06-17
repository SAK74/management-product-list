import { InputField } from "../products/components";
import { wrappedRender } from "./wrappedRender";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { screen } from "@testing-library/react";

const simulate = userEvent.setup();

const generateRandomString = (leng: number) => {
   const randomChar = () => Math.round(Math.random() * 94) + 32;
   const randomArray: number[] = Array(leng).fill(0);
   const randomString = String.fromCharCode(...randomArray.map(it => randomChar()))
      .replace(/[ { [ ( ]/g, "");
   const numberString = randomString.split("")
      .filter((el, id) => Number(el) || (Number(el) === 0 && id !== 0))
      .join("");
   return [randomString, numberString];
}

describe("InputField component", () => {
   let input: HTMLInputElement, submitButton: HTMLButtonElement;
   beforeEach(async () => {
      wrappedRender(<InputField />);
      await screen.findByRole('textbox');
      input = screen.getByRole('textbox');
      submitButton = screen.getByRole('button');
   });
   describe("input field", () => {
      it("should be rendered as empty", () => {
         expect(input).toBeInTheDocument();
         expect(input).toHaveDisplayValue("");
      });
      it("should be accept only numeric value", async () => {
         const [userString, numericString] = generateRandomString(30);
         await simulate.type(input, userString);
         // console.log(input.value);
         expect(input).toHaveDisplayValue(numericString);
      });
   });
   describe("submit button", () => {
      it("should be rendered & 'disabled' default", () => {
         expect(submitButton).toBeInTheDocument();
         expect(submitButton).toBeDisabled();
      });
      it("should be enabled when typed '1-12'", async () => {
         await simulate.type(input, Math.round(Math.random() * 11 + 1).toString());
         expect(submitButton).toBeEnabled();
      });
      it("should be disabled when typed '>12'", async () => {
         await simulate.type(input, "13");
         expect(submitButton).toBeDisabled();
         const helperText = screen.getByText("Too high...");
         expect(helperText).toBeInTheDocument();
         expect(helperText).toHaveClass("Mui-error");
      });
      it("calls onClick when clicked", async () => {
         await simulate.type(input, Math.round(Math.random() * 11 + 1).toString());
         const handleClick = jest.fn();
         submitButton.onclick = handleClick;
         await simulate.click(submitButton);
         expect(handleClick).toHaveBeenCalledTimes(1);
      });
   });
});