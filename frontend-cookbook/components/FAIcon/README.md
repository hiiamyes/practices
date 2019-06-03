[FortAwesome/react-fontawesome](https://github.com/FortAwesome/react-fontawesome#installation)

# Installation

```
yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
yarn remove @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

# Usage

```
<FontAwesomeIcon icon="coffee" />
```

```
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog } from "@fortawesome/free-solid-svg-icons";

library.add(faCog);
```
