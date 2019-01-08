import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Grid from "../components/grid"
import Installer from "../components/installer"

storiesOf("<Installer ∕>", module)

  .add("Android", () => (
    <Center bg={colors[7]}>
      <Installer os={{ name: "Android" }} />
    </Center>
  ))

  .add("iOS", () => (
    <Center bg={colors[7]}>
      <Installer os={{ name: "iOS" }} />
    </Center>
  ))
