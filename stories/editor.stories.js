import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Editor from "../components/editor"

storiesOf("<Editor ∕>", module)

  .add("default", () => (
    <Center bg={colors[7]}>
      <Editor
        orientation="portrait"
        height={256}
        code={`line(0, 0, 128, 128, 12)\n`}
        onChange={() => {}}
      />
    </Center>
  ))


