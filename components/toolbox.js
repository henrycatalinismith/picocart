import colors from "../colors"

export default ({ width, height }) => {
  return (
    <div className="toolbox">
      <style jsx>{`
        .toolbox {
          background-color: ${colors[7]};
          transition: width 0.1s linear, height 0.1s linear;

          ${(width && height) ? (`
            height: ${height}px;
            width: ${width}px;
          `) : (`
            flex: 1
          `)}
        }

        @media (orientation: portrait) {
          .toolbox {
            order: 2;
          }
        }

        @media (orientation: landscape) {
          .toolbox {
            order: 1;

            ${(!width && !height) && (`
              max-width: 320px;
            `)}
          }
        }

      `}</style>
    </div>
  )
}

