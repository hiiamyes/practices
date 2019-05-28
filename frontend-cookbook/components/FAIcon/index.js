import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog } from "@fortawesome/free-solid-svg-icons";

library.add(faCog);

const FAIcon = props => {
  const { icon } = props;
  return <FontAwesomeIcon icon={icon} />;
};

export default FAIcon;
