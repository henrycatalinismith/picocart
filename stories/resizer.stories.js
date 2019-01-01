import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Grid from "../components/grid"
import Resizer from "../components/resizer"

storiesOf("<Resizer ∕>", module)

  .add("horizontal", () => (
    <Center bg={colors[7]}>
      <Resizer
        orientation="portrait"
        width={256}
        height={16}
      />
    </Center>
  ))

  .add("vertical", () => (
    <Center bg={colors[7]}>
      <Resizer
        orientation="landscape"
        width={16}
        height={256}
      />
    </Center>
  ))

