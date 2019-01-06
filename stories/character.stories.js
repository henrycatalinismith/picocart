import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Grid from "../components/grid"
import Character from "../components/character"

const lowerCase = [...Array(26)].map((e,i)=>(i+10).toString(36))
const upperCase = lowerCase.map(c => c.toUpperCase())
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const symbols = [
  "!", `"`, "#", "$", "%", "&", "'", "(", ")", "*", "+",
  "-", ",", ".", "/", ":", ";", "<", ">", "?", "^", "_",
  "{", "}", "|", "~", "`", "[", "\\", "]", "@",
]

const style ={
  backgroundColor: colors[7],
  border: `8px solid ${colors[6]}`,
}

storiesOf("<Character ∕>", module)

  .add("qwertyuiop", () => (
    <Center bg={colors[1]}>
      <Grid n={6} w={(Math.min(window.innerHeight, window.innerWidth) / 6) - 32}>
        {lowerCase.map(c => (
          <svg style={style} width="38.4" height="64" viewBox="-0.5 0 3 4">
            <Character>{c}</Character>
          </svg>
        ))}
      </Grid>
    </Center>
  ))

  .add("QWERTYUIOP", () => (
    <Center bg={colors[1]}>
      <Grid n={6} w={(Math.min(window.innerHeight, window.innerWidth) / 6) - 32}>
        {upperCase.map(c => (
          <svg style={style} width="38.4" height="64" viewBox="-0.5 0 3 4">
            <Character>{c}</Character>
          </svg>
        ))}
      </Grid>
    </Center>
  ))

  .add("0123456789", () => (
    <Center bg={colors[1]}>
      <Grid n={5} w={(Math.min(window.innerHeight, window.innerWidth) / 6) - 32}>
        {numbers.map(c => (
          <svg style={style} width="38.4" height="64" viewBox="-0.5 0 3 4">
            <Character>{c}</Character>
          </svg>
        ))}
      </Grid>
    </Center>
  ))

  .add("!@#$%^&*()", () => (
    <Center bg={colors[1]}>
      <Grid n={6} w={(Math.min(window.innerHeight, window.innerWidth) / 6) - 32}>
        {symbols.map(c => (
          <svg style={style} width="38.4" height="64" viewBox="-0.5 0 3 4">
            <Character>{c}</Character>
          </svg>
        ))}
      </Grid>
    </Center>
  ))

  .add("palette", () => (
    <Center bg={colors[1]}>
      <Grid n={4} w={(Math.min(window.innerHeight, window.innerWidth) / 4) - 8}>
        {[...Array(16)].map((e, i) => (
          <svg style={style} width="38.4" height="64" viewBox="-0.5 0 3 4">
            <Character color={colors[i]}>{hex[i]}</Character>
          </svg>
        ))}
      </Grid>
    </Center>
  ))

  .add("scale(0.5)", () => (
    <Center bg={colors[1]}>
      <Grid n={6} w={(Math.min(window.innerHeight, window.innerWidth) / 6) - 32}>
        {lowerCase.map(c => (
          <svg style={style} width="38.4" height="64" viewBox="-0.5 0 3 4">
            <Character scale={0.5}>{c}</Character>
          </svg>
        ))}
      </Grid>
    </Center>
  ))

  .add("border", () => (
    <Center bg={colors[1]}>
      <Grid n={6} w={(Math.min(window.innerHeight, window.innerWidth) / 6) - 32}>
        {upperCase.map(c => (
          <svg style={style} width="38.4" height="64" viewBox="-2 -2 6 8">
            <Character
              borderColor={colors[0]}
              color={colors[7]}
            >{c}</Character>
          </svg>
        ))}
      </Grid>
    </Center>
  ))

  .add("thick border", () => (
    <Center bg={colors[1]}>
      <Grid n={6} w={(Math.min(window.innerHeight, window.innerWidth) / 6) - 32}>
        {upperCase.map(c => (
          <svg style={style} width="38.4" height="64" viewBox="-4 -4 10 12">
            <Character
              borderColor={colors[12]}
              borderMultiplier={3}
              color={colors[1]}
            >{c}</Character>
          </svg>
        ))}
      </Grid>
    </Center>
  ))

