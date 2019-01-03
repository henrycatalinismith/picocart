import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Grid from "../components/grid"
import Text from "../components/text"

const lowerCase = [...Array(26)].map((e,i)=>(i+10).toString(36))
const upperCase = lowerCase.map(c => c.toUpperCase())
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = [
  "!", `"`, "#", "$", "%", "&", "'", "(", ")", "*", "+",
  "-", ",", ".", "/", ":", ";", "<", ">", "?", "^", "_",
  "{", "}", "|", "~", "`", "[", "\\", "]", "@",
]

storiesOf("<Text ∕>", module)

  .add("Aa", () => (
    <Center bg={colors[7]}>
      <Grid n={2} w={256}>
        <Text fontSize={256}>A</Text>
        <Text fontSize={256}>a</Text>
      </Grid>
    </Center>
  ))

  .add("lower case alphabet", () => (
    <Center bg={colors[7]}>
      <Grid n={6} w={(Math.min(window.innerHeight, window.innerWidth) / 6) - 32}>
        {lowerCase.map(c => (
          <Text fontSize={64}>{c}</Text>
        ))}
      </Grid>
    </Center>
  ))

  .add("upper case alphabet", () => (
    <Center bg={colors[7]}>
      <Grid n={6} w={(Math.min(window.innerHeight, window.innerWidth) / 6) - 32}>
        {upperCase.map(c => (
          <Text fontSize={64}>{c}</Text>
        ))}
      </Grid>
    </Center>
  ))

  .add("symbols", () => (
    <Center bg={colors[7]}>
      <Grid n={6} w={(Math.min(window.innerHeight, window.innerWidth) / 6) - 32}>
        {symbols.map(c => (
          <Text fontSize={64}>{c}</Text>
        ))}
      </Grid>
    </Center>
  ))

  .add("numbers", () => (
    <Center bg={colors[7]}>
      <Grid n={5} w={(Math.min(window.innerHeight, window.innerWidth) / 5) - 32}>
        {numbers.map(n => (
          <Text fontSize={64}>{n}</Text>
        ))}
      </Grid>
    </Center>
  ))

  .add("whole word", () => (
    <Center bg={colors[7]}>
      <Text fontSize={64}>
        picocart
      </Text>
    </Center>
  ))

  .add("teeny tiny text", () => (
    <Center bg={colors[7]}>
      <Text fontSize={64}>
        the quick brown fox jumps over the lazy dog
      </Text>
    </Center>
  ))

  .add("palette", () => (
    <Center bg={colors[7]}>
      <Grid n={4} w={(Math.min(window.innerHeight, window.innerWidth) / 4) - 8}>
        {[...Array(16)].map((e, i) => (
          <Text fontSize={64} stroke={colors[i]}>
            ABC
          </Text>
        ))}
      </Grid>
    </Center>
  ))

