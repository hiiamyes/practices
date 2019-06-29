import React, { useState } from "react";
import timezoneNames from "./timezoneNames.json";

const NativeSelect = props => {
  const { value, onChange } = props;
  return (
    <select
      style={{ width: 200 }}
      placeholder="Select a timezone"
      value={value}
      onChange={onChange}
    >
      {timezoneNames.map(name => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

const Demo = () => {
  const [value, setValue] = useState(undefined);
  return (
    <NativeSelect value={value} onChange={e => setValue(e.target.value)} />
  );
};

export default Demo;
