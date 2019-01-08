import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Grid from "../components/grid"
import Landing from "../components/landing"

storiesOf("<Landing ∕>", module)

  .add("Android", () => (
    <Center bg={colors[7]}>
      <Landing os={{ name: "Android" }} />
    </Center>
  ))

  .add("iOS", () => (
    <Center bg={colors[7]}>
      <Landing os={{ name: "iOS" }} />
    </Center>
  ))

  .add("macOS", () => (
    <Center bg={colors[7]}>
      <Landing os={{ name: "macOS" }} />
    </Center>
  ))
