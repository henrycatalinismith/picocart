import colors from "../colors"

export default ({ children, width, height, orientation }) => {
  let w = width
  let h = height

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

