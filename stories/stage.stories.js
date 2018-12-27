import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Spin from "../components/spin"
import Flippy from "../components/flippy"
import Stage from "../components/stage"

storiesOf("<Stage ∕>", module)

  .add("default", () => (
    <Center bg={colors[6]}>
      <Stage
        bg={colors[13]}
        width={Math.min(window.innerWidth, 480)}
        height={Math.min(window.innerHeight, 320)}
      >
        <Spin>
          <Flippy size={128} />
        </Spin>
      </Stage>
    </Center>
  ))
