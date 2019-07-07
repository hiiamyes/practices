import styled from "styled-components";
import { borderRadius } from "../../../styles/borderRadius";
import {
  colorBorderDefault,
  colorBorderHover,
  colorBorderFocus
} from "../../../styles/color";

const selectInputHeight = "32px";
const selectOptionsHeight = "40px";
const width = "200px";

export default styled.div`
  position: relative;
  width: 200px;
  .iii {
    border-radius: ${borderRadius};
    border: 1px solid ${colorBorderDefault};
    &:hover {
      border: 1px solid ${colorBorderHover};
    }
    &.focus {
      border: 1px solid ${colorBorderFocus};
    }
  }
  .select-input {
    border-radius: ${borderRadius};
    height: ${selectInputHeight};
    padding: 0 5px;
    outline: none;
    border: none;
  }
  .options {
    position: absolute;
    height: 200px;
    overflow-y: scroll;
    left: 0;
    top: ${selectOptionsHeight};
    border-radius: ${borderRadius};
    border: 1px solid ${colorBorderDefault};
    background: white;

    .option {
      width: ${width};
      overflow-x: hidden;
      text-overflow: ellipsis;
      padding: 5px;
      cursor: default;
      &.select {
        background: rgba(0, 150, 136, 0.5);
      }
      &:hover,
      &.hover {
        background: rgba(0, 150, 136, 0.2);
      }
    }
  }
`;
