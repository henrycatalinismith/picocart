import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Grid from "../components/grid"
import Text from "../components/text"

storiesOf("<Text ∕>", module)

  .add("whole word", () => (
    <Center bg={colors[7]}>
      <Text fontSize={64}>
        picocart
      </Text>
    </Center>
  ))

  .add("teeny tiny text", () => (
    <Center bg={colors[7]}>
      <Text fontSize={16}>
        the quick brown fox jumps over the lazy dog
      </Text>
    </Center>
  ))

  .add("border", () => (
    <Center bg={colors[7]}>
      <Text
        fontSize={64}
        color={colors[14]}
        borderColor={colors[0]}
        borderMultiplier={1.5}
      >picocart
      </Text>
    </Center>
  ))

