import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Grid from "../components/grid"
import String from "../components/string"

const lowerCase = [...Array(26)].map((e,i)=>(i+10).toString(36))
const upperCase = lowerCase.map(c => c.toUpperCase())

storiesOf("<String ∕>", module)

  .add("Aa", () => (
    <Center bg={colors[7]}>
      <Grid n={2} w={256}>
        <String value="A" fontSize={256} />
        <String value="a" fontSize={256} />
      </Grid>
    </Center>
  ))

  .add("lower case alphabet", () => (
    <Center bg={colors[7]}>
      <Grid n={6} w={(Math.min(window.innerHeight, window.innerWidth) / 6) - 32}>
        {lowerCase.map(c => (
          <String value={c} fontSize={64} />
        ))}
      </Grid>
    </Center>
  ))

  .add("upper case alphabet", () => (
    <Center bg={colors[7]}>
      <Grid n={6} w={(Math.min(window.innerHeight, window.innerWidth) / 6) - 32}>
        {upperCase.map(c => (
          <String value={c} fontSize={64} />
        ))}
      </Grid>
    </Center>
  ))

  .add("whole word", () => (
    <Center bg={colors[7]}>
      <String value="picocart" fontSize={64} />
    </Center>
  ))

