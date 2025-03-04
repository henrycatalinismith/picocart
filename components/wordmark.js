import colors from "../colors"

export default ({ width = 150, height, fill = colors[7], stroke = colors[2] }) => {
  if (width) {
    height = width * 0.1866666667
  } else if (height) {
    width = height * 5.3571428571
  }

  return (
    <div className="wordmark">
      <svg className="wordmark__svg" viewBox="0 0 1600 300">
        <path key="p" className="wordmark__letter" d="M131.524+147.854L131.524+97.8537L81.5245+97.8537L81.5245+147.854L131.524+147.854ZM31.5245+247.854L31.5245+47.8537L181.524+47.8537L181.524+197.854L81.5245+197.854L81.5245+247.854L31.5245+247.854Z" />
        <path key="i" className="wordmark__letter" d="M231.524+247.854L231.524+197.854L281.524+197.854L281.524+97.8537L231.524+97.8537L231.524+47.8537L381.524+47.8537L381.524+97.8537L331.524+97.8537L331.524+197.854L381.524+197.854L381.524+247.854L231.524+247.854Z" />
        <path key="c" className="wordmark__letter" d="M431.524+247.854L431.524+47.8537L581.524+47.8537L581.524+97.8537L481.524+97.8537L481.524+197.854L581.524+197.854L581.524+247.854L431.524+247.854Z" />
        <path key="o" className="wordmark__letter" d="M631.524+247.854L631.524+97.8537L681.524+97.8537L681.524+197.854L731.524+197.854L731.524+247.854L631.524+247.854ZM731.524+197.854L731.524+97.8537L681.524+97.8537L681.524+47.8537L781.524+47.8537L781.524+197.854L731.524+197.854Z" />
        <path key="c2" className="wordmark__letter" d="M831.524+247.854L831.524+47.8537L981.524+47.8537L981.524+97.8537L881.524+97.8537L881.524+197.854L981.524+197.854L981.524+247.854L831.524+247.854Z" />
        <path key="a" className="wordmark__letter" d="M1131.52+147.854L1131.52+97.8537L1081.52+97.8537L1081.52+147.854L1131.52+147.854ZM1031.52+247.854L1031.52+47.8537L1181.52+47.8537L1181.52+247.854L1131.52+247.854L1131.52+197.854L1081.52+197.854L1081.52+247.854L1031.52+247.854Z" />
        <path key="r" className="wordmark__letter" d="M1331.52+247.854L1331.52+197.854L1381.52+197.854L1381.52+247.854L1331.52+247.854ZM1231.52+247.854L1231.52+47.8537L1381.52+47.8537L1381.52+147.854L1331.52+147.854L1331.52+97.8537L1281.52+97.8537L1281.52+147.854L1331.52+147.854L1331.52+197.854L1281.52+197.854L1281.52+247.854L1231.52+247.854Z" />
        <path key="t" className="wordmark__letter" d="M1481.52+247.854L1481.52+97.8537L1431.52+97.8537L1431.52+47.8537L1581.52+47.8537L1581.52+97.8537L1531.52+97.8537L1531.52+247.854L1481.52+247.854Z" />
      </svg>

      <style jsx>{`
        .wordmark {
          height: ${height}px;
          padding: 2px;
        }

        .wordmark__svg {
          height: ${height}px;
          width: ${width}px;
        }

        .wordmark__letter {
          fill: ${fill};
          stroke: ${stroke};
          stroke-width: 10px;
        }
      `}</style>

    </div>
  );
}

