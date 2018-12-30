import colors from "../colors"

export default ({ children, width, height, orientation }) => {
  let w = width
  let h = height

  if (orientation === "portrait") {
    w = w - 8
    h = h - 4
  }

  if (orientation === "landscape") {
    w = w - 4
    h = h - 4
  }

  return (
    <div className="toolbox">
      {children}
      <style jsx>{`
        .toolbox {
          background-color: ${colors[15]};
          display: flex;
          flex-direction: column;

          ${(width && height) ? (`
            height: ${h}px;
            width: ${w}px;
          `) : (`
            flex: 1;
          `)}


          ${(orientation == "portrait") ? (`
            border: 4px solid ${colors[14]};
            border-top-width: 0px;
            order: 2;
          `) : (`
            border-left: 4px solid ${colors[14]};
            border-bottom: 4px solid ${colors[14]};
            order: 1;
            ${(!width && !height) ? (`
              min-width: 200px;
              max-width: 320px;
            `) : (``)}
          `)}
        }

      `}</style>
    </div>
  )
}

