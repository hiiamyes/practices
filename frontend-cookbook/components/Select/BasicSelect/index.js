import React, { useState, useEffect } from "react";
import { throttle } from "lodash/fp";
import FAIcon from "../../FAIcon";
import timezoneNames from "./timezoneNames.json";
import Style from "./style";

const BasicSelect = props => {
  const textInput = React.createRef();
  const [focus, setFocus] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  // const [hoveredOptionIndex, setHoveredOptionIndex] = useState(0);
  const [hoveredOptionValue, setHoveredOptionValue] = useState(
    props.options[0]
  );

  const { value, options, onChange } = props;
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    const eee = e => {
      const os = options.filter(option =>
        new RegExp(inputValue, "gi").test(option)
      );
      const index = os.indexOf(hoveredOptionValue);
      switch (e.keyCode) {
        case 38:
          if (index !== 0) {
            setHoveredOptionValue(os[index - 1]);
          }
          break;
        case 40:
          if (index !== os.length - 1) {
            setHoveredOptionValue(os[index + 1]);
          }
          break;
        case 27: // esc
          setOptionsVisible(false);
          break;
        case 13: // enter
          if (optionsVisible) {
            onChange(hoveredOptionValue);
            setOptionsVisible(false);
          } else {
            setInputValue("");
            setOptionsVisible(true);
          }
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", eee);
    return () => {
      window.removeEventListener("keydown", eee);
    };
  }, [hoveredOptionValue, optionsVisible]);

  return (
    <Style placeholder="Select a timezone">
      <div
        className={`iii ${focus ? "focus" : ""}`}
        onClick={e => {
          setFocus(true);
          setOptionsVisible(true);
          setInputFocus(true);
          setInputValue("");
        }}
      >
        <input
          className="select-input"
          placeholder={value}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onFocus={e => {
            setOptionsVisible(true);
            setFocus(true);
            setInputValue("");
          }}
          onBlur={e => {
            console.log("blur", optionsVisible);
            setOptionsVisible(false);
            setFocus(false);
            // console.log(document.activeElement);
            // if()
            // e.target.focus();
          }}
        />
        <FAIcon icon="angle-down" />
      </div>
      {optionsVisible && (
        <div className="options">
          {options.map((name, optionIndex) => (
            <div
              className={`option ${
                // optionIndex === hoveredOptionIndex ? "hover" : ""
                name === hoveredOptionValue ? "hover" : ""
              } ${name === value ? "select" : ""}`}
              key={name}
              value={name}
              style={{
                display: new RegExp(inputValue, "gi").test(name)
                  ? "block"
                  : "none"
              }}
              onMouseDown={e => {
                console.log("mouse");
                onChange(name);
                // setOptionsVisible(false);
              }}
              // onMouseOver={throttledOnMouseOver.bind(null, optionIndex)}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </Style>
  );
};

const Demo = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input />
      <BasicSelect
        value={value}
        options={timezoneNames}
        onChange={value => {
          setValue(value);
        }}
      />
      <input />
    </div>
  );
};

export default Demo;
