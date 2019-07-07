import React from "react";
import { render, cleanup, fireEvent, wait } from "@testing-library/react";
import "jest-dom/extend-expect";
import MoneyInput from "./index";

afterEach(cleanup);

describe("MoneyInput", () => {
  test("Min unit = 10", async () => {
    const minUnit = "10";
    const value = 1234;
    const { getByTestId } = render(
      <MoneyInput minUnit={minUnit} value={value} />
    );
    const moneyInput = getByTestId("money-input");
    expect(moneyInput.value).toBe("1,230");
  });
  test("Min unit = 0.1", async () => {
    const minUnit = "0.1";
    const value = 1234.33;
    const { getByTestId } = render(
      <MoneyInput minUnit={minUnit} value={value} />
    );
    const moneyInput = getByTestId("money-input");
    expect(moneyInput.value).toBe("1,234.3");
  });

  //   describe("minUnit = 100", () => {
  //     test("Correct placeholder", async () => {
  //       const minUnit = "100";
  //       const amount = "1212";
  //       const { getByTestId } = render(
  //         <MoneyInput minUnit={minUnit} amount={amount} />
  //       );
  //       expect(getByTestId("money-input").placeholder).toBe("000");
  //     });
  //     test("Correct value", async () => {
  //       const minUnit = "100";
  //       const amount = "1212";
  //       const { getByTestId } = render(
  //         <MoneyInput minUnit={minUnit} amount={amount} />
  //       );
  //       expect(getByTestId("money-input").value).toBe("1,200");
  //     });
  //   });

  //   describe("minUnit = 1.0", () => {
  //     test("Correct placeholder", async () => {
  //       const minUnit = "1.0";
  //       const amount = "1200";
  //       const { getByTestId } = render(
  //         <MoneyInput minUnit={minUnit} amount={amount} />
  //       );
  //       expect(getByTestId("money-input").placeholder).toBe("0");
  //     });
  //     test("Correct value", async () => {
  //       const minUnit = "1.0";
  //       const amount = "1212.33";
  //       const { getByTestId } = render(
  //         <MoneyInput minUnit={minUnit} amount={amount} />
  //       );
  //       expect(getByTestId("money-input").value).toBe("1,212");
  //     });
  //   });

  //   describe("minUnit = 0.01", () => {
  //     test("Correct placeholder", async () => {
  //       const minUnit = "0.01";
  //       const placeholder = "0.00";
  //       const amount = "1200";
  //       const { getByTestId } = render(
  //         <MoneyInput minUnit={minUnit} amount={amount} />
  //       );
  //       expect(getByTestId("money-input").placeholder).toBe(placeholder);
  //     });
  //     test("Correct value", async () => {
  //       const minUnit = "0.01";
  //       const amount = "1212.3434";
  //       const { getByTestId } = render(
  //         <MoneyInput minUnit={minUnit} amount={amount} />
  //       );
  //       expect(getByTestId("money-input").value).toBe("1,212.34");
  //     });
  //   });
});
