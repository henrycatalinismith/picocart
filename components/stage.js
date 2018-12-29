import colors from "../colors"

export default ({ bg = colors[13], width, height, children, orientation }) => {
  return (
    <div className="stage">
      {children}
      <style jsx>{`
        .stage {
          background-color: ${bg};
          display: flex;
          justify-content: center;
          align-items: center;

          ${(orientation == "portrait") ? (`
            order: 1;
            ${(width && height) ? (`
              height: ${height}px;
              width: ${width}px;
            `) : (`
              height: 100vmin;
            `)}
          `) : (`
            order: 3;
            ${(width && height) ? (`
              height: ${height}px;
              width: ${width}px;
            `) : (`
              width: 100vmin;
              flex: 1;
            `)}
          `)}
        }

      `}</style>

    </div>
  )
}

