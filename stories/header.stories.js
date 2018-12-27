import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Header from "../components/header"

storiesOf("<Header ∕>", module)

  .add("default", () => (
    <Center bg={colors[7]}>
      <Header height={32} bg={colors[14]}>
        hello
      </Header>
    </Center>
  ))

