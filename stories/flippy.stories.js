import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Grid from "../components/grid"
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

  .add("palette", () => (
    <Center bg={colors[7]}>
      <Grid n={4} w={(Math.min(window.innerHeight, window.innerWidth) / 4) - 32}>
        {[...Array(16)].map((e, i) => (
          <Flippy
            size={(Math.min(window.innerHeight, window.innerWidth) / 4) - 32}
            bg={colors[i]}
          />
        ))}
      </Grid>
    </Center>
  ))
