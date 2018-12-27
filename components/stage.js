import colors from "../colors"

export default ({ bg, width, height, children }) => {
  return (
    <div className="stage">
      {children}
      <style jsx>{`
        .stage {
          background-color: ${bg};
          height: ${height}px;
          width: ${width}px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

