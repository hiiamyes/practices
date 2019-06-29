import React, { useState, useEffect } from "react";
import FAIcon from "../../FAIcon";
import timezoneNames from "./timezoneNames.json";
import Style from "./style";

const BasicSelect = props => {
  const [inputValue, setInputValue] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const { value, onChange } = props;
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <Style style={{ width: 200 }} placeholder="Select a timezone">
      <div>
        <input
          className="select-input"
          placeholder={value}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onFocus={e => {
            setInputFocus(true);
            setInputValue("");
          }}
        />
        <FAIcon icon="angle-down" />
      </div>
      <div
        className="options"
        style={{ display: inputFocus ? "block" : "none" }}
      >
        {timezoneNames.map(name => (
          <div
            className="option"
            key={name}
            value={name}
            style={{
              display: new RegExp(inputValue, "gi").test(name)
                ? "block"
                : "none"
            }}
            onClick={e => {
              onChange(name);
              setInputFocus(false);
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </Style>
  );
};

const Demo = () => {
  const [value, setValue] = useState("");
  return (
    <BasicSelect
      value={value}
      onChange={value => {
        console.log(value);
        setValue(value);
      }}
    />
  );
};

export default Demo;
