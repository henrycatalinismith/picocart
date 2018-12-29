import colors from "../colors"

export default ({ width, height }) => {

  const borderWidth = 4;

  return (
    <div className="toolbox">
      <style jsx>{`
        .toolbox {
          flex: 1;
          background-color: ${colors[7]};
          height: calc(${height}px - ${borderWidth * 2}px);
          width: calc(${width}px - ${borderWidth * 2}px);
        }

        @media (orientation: portrait) {
          .toolbox {
            order: 2;
            border-top: 4px solid ${colors[14]};
          }
        }

        @media (orientation: landscape) {
          .toolbox {
            order: 1;
            border-right: 4px solid ${colors[14]};
          }
        }

      `}</style>
    </div>
  )
}

