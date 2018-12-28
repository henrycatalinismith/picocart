import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Toolbox from "../components/toolbox"

storiesOf("<Toolbox ∕>", module)

  .add("default", () => (
    <Center bg={colors[6]}>
      <Toolbox
        width={Math.min(window.innerWidth, 320)}
        height={Math.min(window.innerHeight, 480)}
      />
    </Center>
  ))
