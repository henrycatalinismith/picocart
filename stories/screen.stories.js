import React from "react"
import { storiesOf } from "@storybook/react"

import colors from "../colors"
import Center from "../components/center"
import Spin from "../components/spin"
import Flippy from "../components/flippy"
import Screen from "../components/screen"

storiesOf("<Screen ∕>", module)

  .add("default", () => (
    <Center bg={colors[6]}>
      <Screen onMount={canvas => {
        const ctx = canvas.getContext('2d');
        let time = 0;

        const draw = () => {
          time += 0.1;
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.beginPath();
          for (let i = 0; i < canvas.width;) {
            const height = (
              (canvas.height/2) + (
                Math.sin(
                  ((i * 100000) + time)
                ) * 100
              )
            );
            ctx.lineTo(i, height);
            i++;
          }
          ctx.lineWidth = 1;
          ctx.strokeStyle = '#000000';
          ctx.stroke();
        };

        draw()
        setInterval(draw, 100)
      }} />
    </Center>
  ))
