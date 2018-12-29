import colors from "../colors"

export default ({ children, width, height, orientation }) => {
  return (
    <div className="toolbox">
      {children}
      <style jsx>{`
        .toolbox {
          background-color: ${colors[7]};

          ${(width && height) ? (`
            height: ${height}px;
            width: ${width}px;
          `) : (`
            flex: 1;
          `)}

          ${(orientation == "portrait") ? (`
            order: 2;
          `) : (`
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

