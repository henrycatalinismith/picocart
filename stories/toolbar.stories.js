import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Grid from "../components/grid"
import Button from "../components/button"
import Toolbar from "../components/toolbar"

storiesOf("<Toolbar ∕>", module)

  .add("with some buttons", () => (
    <Center bg={colors[7]}>
      <Grid n={1} w={320}>

        <Toolbar width={320}>
          <Button>ONE</Button>
        </Toolbar>

        <Toolbar width={320}>
          <Button>ONE</Button>
          <Button>TWO</Button>
        </Toolbar>

        <Toolbar width={320}>
          <Button>ONE</Button>
          <Button>TWO</Button>
          <Button>THREE</Button>
        </Toolbar>

      </Grid>

    </Center>
  ))

