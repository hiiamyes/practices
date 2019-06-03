import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import FAIcon from "../components/FAIcon";
import TimezoneNameSelect from "../components/TimezoneNameSelect";
import styled from "styled-components";
import "antd/dist/antd.css";

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

storiesOf("Select", module).add("TimezoneNameSelect", () => (
  <Layout>
    <TimezoneNameSelect />
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
