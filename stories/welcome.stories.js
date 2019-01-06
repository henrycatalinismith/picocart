import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Grid from "../components/grid"
import Welcome from "../components/welcome"

storiesOf("<Welcome ∕>", module)

  .add("default", () => (
    <Center bg={colors[7]}>
      <Welcome />
    </Center>
  ))
