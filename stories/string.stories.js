import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Grid from "../components/grid"
import String from "../components/string"

storiesOf("<String ∕>", module)

  .add("alphabet", () => (
    <Center bg={colors[7]}>
      <Grid n={6} w={(Math.min(window.innerHeight, window.innerWidth) / 6) - 32}>
        {["a", "b", "c"].map(c => (
          <String value={c} />
        ))}
      </Grid>
    </Center>
  ))
