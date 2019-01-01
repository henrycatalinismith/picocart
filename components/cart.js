import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"

const first = colors.slice(0, 7)

export class Run extends React.Component {
  static defaultProps = {
    cart: {},
    bg: colors[0],
    size: 64,
    onClick: () => {},
  };

  static propTypes = {
    cart: PropTypes.object,
    bg: PropTypes.string,
    size: PropTypes.number,
    onClick: PropTypes.func,
  };

  handleClick = event => {
    event.preventDefault()
    this.props.onClick()
    return false
  }

  render() {
    const { cart, bg, size } = this.props

    return (
      <a className="cart" href="/cart">
        <svg className="cart__border" viewBox="0 0 16 16">
          <defs>
            <clipPath id="corner" transform="translate(-1.000000, -1.000000)">
              <path d="M1.5,1.5 L14.5,1.5 L14.5,3.5 L16.5,3.5 L16.5,16.5 L1.5,16.5 L1.5,1.5" className="cart__borderLine"></path>
            </clipPath>
          </defs>

          <path id="Case" fill={bg} d="M0,0 C0,0 14.1624756,4.84345139e-16 14.0817871,0 C14.0010986,-4.84345139e-16 14.0130005,1.99951172 14.0130005,1.99951172 L16,1.99951172 L16,16 L0,16 L0,0 Z"></path>

          {cart && cart.code && (
            <text
              className="cart__code"
              fill={colors[15]}
              clipPath="url(#corner)"
              x={2}
              y={4}
            >
              {cart
                .code
                .split("\n")
                .slice(0, 3)
                .join("\n")
              }
            </text>
          )}

          <g transform="translate(0, 12)">
            <rect
              width={16}
              height={4}
              fill={colors[13]}
            />
          </g>

          <g transform="translate(0, 12)">
            <text
              className="cart__name2"
              fill={colors[7]}
              clipPath="url(#corner)"
              x={1.4}
              y={2.4}
            >{cart.name}</text>
          </g>

          <g
            transform="translate(-1.000000, -1.000000)"
            stroke={colors[6]}
            strokeWidth={0.4}
            strokeLinecap="square"
            fill="none"
          >
            <path
              className="cart__borderLine"
              d="M1.5,1.5 L14.5,1.5 L14.5,3.5 L16.5,3.5 L16.5,16.5 L1.5,16.5 L1.5,1.5"
            />
          </g>

        </svg>

        <style jsx>{`
          .cart {
            height: ${size + 18}px;
            width: ${size}px;
            background: none;
            border: 0;
            display: flex;
            flex-direction: column;
            text-decoration: none;
          }

          .cart__border {
            height: ${size}px;
            width: ${size}px;
          }

          .cart__code {
            font: bold 2px Monaco, Courier monospace;
          }

          .cart__name2 {
            font: bold 2px sans-serif;
          }

        `}</style>
      </a>
    )
  }
}

export default Run
