import React, { useState } from "react";
import { Select } from "antd";
import timezoneNames from "./timezoneNames.json";

const Option = Select.Option;

const TimezoneNameSelect = props => {
  const { value, onChange } = props;
  return (
    <Select
      style={{ width: 200 }}
      showSearch
      allowClear
      placeholder="Select a timezone"
      optionFilterProp="children"
      value={value}
      onChange={onChange}
    >
      {timezoneNames.map(name => (
        <Option key={name} value={name}>
          {name}
        </Option>
      ))}
    </Select>
  );
};

const Demo = () => {
  const [value, setValue] = useState(undefined);
  return (
    <TimezoneNameSelect value={value} onChange={value => setValue(value)} />
  );
};

export default Demo;
