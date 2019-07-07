import React, { useState, useLayoutEffect, useEffect } from "react";
import { Decimal } from "decimal.js";
import numeral from "numeral";
import Style from "./style";
import useForceUpdate from "./use-force-update";

const getFormattedValue = ({ value, minUnit }) => {
  if (
    value === null ||
    value === undefined ||
    value === "" ||
    !numeral(value).value()
  )
    return "";
  value = String(value);
  if (value === "0") return 0;
  if (minUnit >= 1) {
    return numeral(
      new Decimal(numeral(value).value())
        .dividedBy(minUnit)
        .round()
        .times(minUnit)
    ).format("0,0");
  } else {
    const fixed = minUnit.length - 2;
    const decimalPoint = ".";
    let numberPart;
    let decimalPart = value.split(decimalPoint)[1];
    if (decimalPart && decimalPart.length > fixed) {
      value = new Decimal(numeral(value).value()).toFixed(fixed);
    }
    [numberPart, decimalPart = ""] = value.split(decimalPoint);
    console.log("?:", value);
    return (
      String(numeral(numberPart).format("0,0")) +
      (/\./.test(value) ? decimalPoint : "") +
      decimalPart
    );
  }
};

let keyCode = null;
let charBeforeCaret = "";
let charAfterCaret = "";
let caretPositionFromEnd = 0;

const MoneyInput = props => {
  let { value, minUnit, onChange } = props;
  const inputRef = React.createRef();
  const [formattedValue, setFormattedValue] = useState("");
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    setFormattedValue(getFormattedValue({ value, minUnit }));
  }, []);

  useLayoutEffect(() => {
    const target = inputRef.current;
    let selectionStart = target.value.length - caretPositionFromEnd;
    if (selectionStart < 0) selectionStart = 0;
    target.setSelectionRange(selectionStart, selectionStart);
  });

  return (
    <div>
      <Style
        data-testid="money-input"
        type="tel"
        ref={inputRef}
        value={formattedValue}
        placeholder="Input amount"
        onKeyDown={e => {
          const {
            target: { value, selectionStart }
          } = e;
          if (e.keyCode === 190 && selectionStart !== value.length) {
            e.preventDefault();
          }
          // We should get the chars before and after the caret before the change event
          charBeforeCaret = value.split("")[selectionStart - 1];
          charAfterCaret = value.split("")[selectionStart];
          // We can't get keyCode from the change event
          keyCode = e.keyCode;
        }}
        onChange={e => {
          let {
            target: { value: newValue, selectionStart }
          } = e;
          caretPositionFromEnd = newValue.length - selectionStart;
          switch (keyCode) {
            case 8:
              // backspace
              if (charBeforeCaret === ".") {
                newValue =
                  newValue.slice(0, selectionStart - 1) +
                  "." +
                  newValue.slice(selectionStart);
              }
              if (charBeforeCaret === ",") {
                newValue =
                  newValue.slice(0, selectionStart - 1) +
                  newValue.slice(selectionStart);
              }
              break;
            case 46:
              // delete
              if (charAfterCaret === ".") {
                caretPositionFromEnd -= 1;
                newValue =
                  newValue.slice(0, selectionStart) +
                  "." +
                  newValue.slice(selectionStart + 1);
              }
              if (charAfterCaret === ",") {
                caretPositionFromEnd -= 1;
                newValue =
                  newValue.slice(0, selectionStart) +
                  newValue.slice(selectionStart + 1);
              }
              break;
            default:
              break;
          }

          if (minUnit > 1 && newValue !== "") {
            if (value === null || value === undefined || value === "") {
              caretPositionFromEnd = minUnit.length - 1;
              newValue = String(numeral(newValue).value() * minUnit);
            } else if (value === 0 && numeral(newValue).value() < minUnit) {
              caretPositionFromEnd = minUnit.length - 1;
              newValue = newValue.replace("0", "").split("")[0] * minUnit;
            } else if (numeral(newValue).value() < minUnit) {
              newValue = 0;
            } else if (
              keyCode !== 8 &&
              keyCode !== 46 &&
              caretPositionFromEnd < minUnit.length - 1
            ) {
              caretPositionFromEnd = minUnit.length - 1;
              newValue = String(value);
              forceUpdate();
            }
          }
          newValue = getFormattedValue({ value: newValue, minUnit });
          setFormattedValue(newValue);
          if (numeral(newValue).value() !== value) {
            onChange(numeral(newValue).value());
          } else {
            forceUpdate();
          }
        }}
      />
    </div>
  );
};

const MoneyInputDemo = () => {
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(123);
  return (
    <div>
      <div>Min unit = 100</div>
      <MoneyInput
        value={value}
        minUnit="100"
        onChange={value => {
          console.log("onChange: ", value);
          setValue(value);
        }}
      />

      <div>Min unit = 1</div>
      <MoneyInput
        value={value2}
        minUnit="1"
        onChange={value => {
          console.log("onChange: ", value);
          setValue2(value);
        }}
      />

      <div>Min unit = 0.01</div>
      <MoneyInput
        value={value3}
        minUnit="0.01"
        onChange={value => {
          console.log("onChange: ", value);
          setValue3(value);
        }}
      />
    </div>
  );
};

export default MoneyInput;
export { MoneyInputDemo };
