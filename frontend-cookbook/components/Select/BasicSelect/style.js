import styled from "styled-components";

const selectInputHeight = "32px";

export default styled.div`
  position: relative;
  .select-input {
    height: ${selectInputHeight};
  }
  .options {
    position: absolute;
    height: 200px;
    overflow-y: scroll;
    left: 0;
    top: ${selectInputHeight};

    .option {
      padding: 5px;
      cursor: default;
      &:hover {
        background: rgba(0, 150, 136, 0.5);
      }
    }
  }
`;
