import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Grid from "../components/grid"
import Wordmark from "../components/wordmark"

storiesOf("<Wordmark ∕>", module)

  .add("large", () => (
    <Center bg={colors[7]}>
      <Wordmark
        width={window.innerWidth * 0.8}
        fill={colors[14]}
        stroke={colors[0]}
      />
    </Center>
  ))

  .add("small", () => (
    <Center bg={colors[7]}>
      <Wordmark
        width={window.innerWidth * 0.4}
        fill={colors[14]}
        stroke={colors[0]}
      />
    </Center>
  ))
