import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Grid from "../components/grid"
import Button from "../components/button"

storiesOf("<Button ∕>", module)

  .add("default", () => (
    <Center bg={colors[7]}>
      <Button width={64} bg={colors[8]}>
        PLAY
      </Button>
    </Center>
  ))
