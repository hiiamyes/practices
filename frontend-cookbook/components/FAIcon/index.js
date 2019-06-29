import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog, faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faCog);
library.add(faAngleDown);

const FAIcon = props => {
  const { icon } = props;
  return <FontAwesomeIcon icon={icon} />;
};

export default FAIcon;
