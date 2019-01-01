import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Play from "../components/play"

storiesOf("<Play ∕>", module)

  .add("default", () => (
    <Center bg={colors[7]}>
      <Play />
    </Center>
  ))

