import colors from "../colors"

export default ({ size = 23 }) => (
  <div className="floppy">
    <svg className="floppy__svg" viewBox="0 0 16 16">
      <path id="Case" fill={colors[12]} d="M0,0 C0,0 14.1624756,4.84345139e-16 14.0817871,0 C14.0010986,-4.84345139e-16 14.0130005,1.99951172 14.0130005,1.99951172 L16,1.99951172 L16,16 L0,16 L0,0 Z"></path>
      <rect id="Cover" fill={colors[6]} x="4" y="1" width="8" height="5"></rect>
      <rect id="Window" fill={colors[12]} x="9" y="2" width="2" height="3"></rect>
      <rect id="Label" fill="#FFF1E7" x="3" y="7" width="10" height="7"></rect>
      <g transform="translate(-1.000000, -1.000000)" stroke="#000000" strokeLinecap="square">
        <path d="M1.5,1.5 L14.5,1.5" id="Line"></path>
        <path d="M14.5,3.5 L14.5,1.5" id="Line"></path>
        <path d="M16.5,3.5 L14.5,3.5" id="Line"></path>
        <path d="M1.5,16.5 L16.5,16.5" id="Line"></path>
        <path d="M1.5,2.5 L1.5,15.5" id="Line"></path>
        <path d="M16.5,16.5 L16.5,3.5" id="Line"></path>
      </g>
    </svg>

    <style jsx>{`
      .floppy {
        height: ${size}px;
        width: ${size}px;
        padding: 4px 2px;
      }

      .floppy {
      }
    `}</style>

  </div>
)

