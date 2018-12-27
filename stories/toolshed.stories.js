import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Toolshed from "../components/toolshed"

storiesOf("<Toolshed ∕>", module)

  .add("default", () => (
    <Center bg={colors[6]}>
      <Toolshed
        width={Math.min(window.innerWidth, 320)}
        height={Math.min(window.innerHeight, 480)}
      />
    </Center>
  ))
