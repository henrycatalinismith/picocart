import colors from "../colors"

export default ({ bg = colors[13], width, height, children }) => {
  return (
    <div className="stage">
      {children}
      <style jsx>{`
        .stage {
          background-color: ${bg};
          display: flex;
          justify-content: center;
          align-items: center;

        ${(width && height) ? (`
          height: ${height}px;
          width: ${width}px;
        `) : (`
          height: 100vmin;
        `)}

        }
      `}</style>

    </div>
  )
}

