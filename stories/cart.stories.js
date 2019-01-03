import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Grid from "../components/grid"
import Cart from "../components/cart"

storiesOf("<Cart ∕>", module)

  .add("example", () => (
    <Center bg={colors[7]}>
      <Cart bg={colors[5]} size={128} cart={{
        name: "example",
        code: "line(0, 0, 128, 128, 12)\n",
      }} />
    </Center>
  ))

  .add("palette", () => (
    <Center bg={colors[7]}>
      <Grid n={4} w={(Math.min(window.innerHeight, window.innerWidth) / 4) - 32}>
        {[...Array(16)].map((e, i) => (
          <Cart
            bg={colors[i]}
          />
        ))}
      </Grid>
    </Center>
  ))
