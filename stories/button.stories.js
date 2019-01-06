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

  .add("zoom", () => (
    <Center bg={colors[7]}>
      <div style={{ transform: "scale(4)" }}>
        <Button bg={colors[8]}>
          PLAY
        </Button>
      </div>
    </Center>
  ))

  .add("sizes", () => (
    <Center bg={colors[7]}>
      <Grid n={1} w={(Math.min(window.innerHeight, window.innerWidth) / 6) - 32}>
        {["A", "AB", "ABC", "ABCD", "ABCDE", "ABCDEF", "ABCDEFG"].map(label => (
          <Button>
            {label}
          </Button>
        ))}
      </Grid>
    </Center>
  ))

  .add("palette", () => (
    <Center bg={colors[7]}>
      <Grid n={4} w={(Math.min(window.innerHeight, window.innerWidth) / 4) - 64}>
        {[...Array(16)].map((e, i) => (
          <Button bg={colors[i]}>
            TEST
          </Button>
        ))}
      </Grid>
    </Center>
  ))
