import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import styled from "styled-components";
import "antd/dist/antd.css";

import FAIcon from "../components/FAIcon";
import BasicSelect from "../components/Select/BasicSelect";
import TimezoneNameSelect from "../components/TimezoneNameSelect";
import AntdModal from "../components/Modal/AntdModal";
import MoneyInput from "../components/Input/MoneyInput";

const Button = styled.button`
  min-width: 64px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid black;
  font-size: 0.875rem;
  line-height: 2.25rem;
  text-align: center;
`;

const Layout = styled.div`
  padding: 15px;
`;
storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Select", module)
  .add("BasicSelect", () => (
    <Layout>
      <BasicSelect />
    </Layout>
  ))
  .add("TimezoneNameSelect", () => (
    <Layout>
      <TimezoneNameSelect />
    </Layout>
  ));

storiesOf("Input", module).add("MoneyInput", () => (
  <Layout>
    <MoneyInput />
  </Layout>
));

storiesOf("Modal", module).add("Antd Modal", () => (
  <Layout>
    <AntdModal />
  </Layout>
));

storiesOf("Icon", module).add("FontAwesomeIcon", () => <FAIcon icon="cog" />);

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>BUTTON</Button>
  ));
