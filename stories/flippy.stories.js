import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Flippy from "../components/flippy"

storiesOf("<Flippy ∕>", module)

  .add("default", () => (
    <Center bg={colors[7]}>
      <Flippy />
    </Center>
  ))

  .add("large", () => (
    <Center bg={colors[7]}>
      <Flippy size={256} />
    </Center>
  ))
