import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Flop from "../components/flop"

storiesOf("<Flop ∕>", module)

  .add("default", () => (
    <Center bg={colors[7]}>
      <Flop />
    </Center>
  ))

  .add("large", () => (
    <Center bg={colors[7]}>
      <Flop size={256} />
    </Center>
  ))
