import colors from "../colors"

export default ({ width, height }) => {

  const borderWidth = 4;

  return (
    <div className="toolshed">
      <style jsx>{`
        .toolshed {
          background-color: ${colors[7]};
          border: 4px solid ${colors[14]};
          height: calc(${height}px - ${borderWidth * 2}px);
          width: calc(${width}px - ${borderWidth * 2}px);
        }
      `}</style>
    </div>
  )
}

