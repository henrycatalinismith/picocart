import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Grid from "../components/grid"
import Input from "../components/input"

storiesOf("<Input ∕>", module)

  .add("default", () => (
    <Center bg={colors[13]}>
      <Input value="example text" />
    </Center>
  ))

