import React, { useState, useLayoutEffect, useEffect } from "react";
import { throttle } from "lodash/fp";
import { Decimal } from "decimal.js";
import numeral from "numeral";
import FAIcon from "../../FAIcon";
import Style from "./style";
import useForceUpdate from "./use-force-update";

const getFormattedValue = ({ value, minUnit }) => {
  if (value === null || value === undefined || value === "") return "";
  value = String(value);
  if (value === "0") return 0;
  if (minUnit >= 1) {
    // if (numeral(value).value() < minUnit) {
    //   value = String(numeral(value).value() * minUnit);
    // }
    // return numeral(
    //   new Decimal(numeral(value).value())
    //     .dividedBy(minUnit)
    //     .round()
    //     .times(minUnit)
    // ).format("0,0");
    return numeral(value).format("0,0");
  } else {
    const fixed = minUnit.length - 2;
    const decimalPoint = ".";
    let numberPart;
    let decimalPart = value.split(decimalPoint)[1];
    if (decimalPart && decimalPart.length > fixed) {
      value = new Decimal(numeral(value).value()).toFixed(fixed);
    }
    [numberPart, decimalPart = ""] = value.split(decimalPoint);
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
  }, [value]);

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
          // We should get the chars before and after the caret before the change event
          charBeforeCaret = value.split("")[selectionStart - 1];
          charAfterCaret = value.split("")[selectionStart];
          // We can't get keyCode from the change event
          keyCode = e.keyCode;
          // console.log(caretPositionFromEnd);
          // caretPositionFromEnd = 2;
          // forceUpdate();
        }}
        onChange={e => {
          let {
            target: { value: newValue, selectionStart }
          } = e;
          caretPositionFromEnd = newValue.length - selectionStart;
          if (keyCode === 8 && charBeforeCaret === ",") {
            // backspace
            newValue =
              newValue.slice(0, selectionStart - 1) +
              newValue.slice(selectionStart);
          } else if (keyCode === 46 && charAfterCaret === ",") {
            // delete
            caretPositionFromEnd -= 1;
            newValue =
              newValue.slice(0, selectionStart) +
              newValue.slice(selectionStart + 1);
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
            } else {
              console.log("qq: ", newValue);
              newValue = new Decimal(numeral(newValue).value())
                .dividedBy(minUnit)
                .round()
                .times(minUnit)
                .toString();
            }

            // if(numeral(newValue).value() < minUnit){
            // }
            // newValue = String(
            //   new Decimal(numeral(newValue).value())
            //     .dividedBy(minUnit)
            //     .round()
            //     .times(minUnit)
            // );
            //   if (!value) {
            //     caretPositionFromEnd = minUnit.length - 1;
            //     newValue = String(numeral(newValue).value() * minUnit);
            //   } else if (caretPositionFromEnd < minUnit.length - 1) {
            //     caretPositionFromEnd = minUnit.length - 1;
            //     newValue = String(value);
            //     forceUpdate();
            //   } else if (numeral(newValue).value() < minUnit) {
            //     newValue = null;
            //   }
          }
          console.log(newValue);
          newValue = getFormattedValue({ value: newValue, minUnit });
          setFormattedValue(newValue);
          if (numeral(newValue).value() !== value) {
            onChange(numeral(newValue).value());
          }
        }}
      />
    </div>
  );
};

const Demo = () => {
  const [value, setValue] = useState(null);
  return (
    <div>
      <MoneyInput
        value={value}
        minUnit="100"
        onChange={value => {
          console.log("onChange: ", value);
          setValue(value);
        }}
      />
    </div>
  );
};

export default Demo;
