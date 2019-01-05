import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"
import Text from "./text"

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
      <a className="cart" href={`/cart/${cart.id}`}>
        <svg className="cart__border" viewBox="0 0 16 16">
          <defs>
            <clipPath id="corner" transform="translate(-1.000000, -1.000000)">
              <path d="M1.5,1.5 L14.5,1.5 L14.5,3.5 L16.5,3.5 L16.5,16.5 L1.5,16.5 L1.5,1.5" className="cart__borderLine"></path>
            </clipPath>
          </defs>

          <path id="Case" fill={bg} d="M0,0 C0,0 14.1624756,4.84345139e-16 14.0817871,0 C14.0010986,-4.84345139e-16 14.0130005,1.99951172 14.0130005,1.99951172 L16,1.99951172 L16,16 L0,16 L0,0 Z"></path>

          {cart && cart.lua && (
            <g clipPath="url(#corner)">
              <Text raw color={colors[15]} x={4} y={4}>
                {cart
                  .lua
                  .split("\n")
                  .slice(0, 3)
                  .join("\n")
                  .toUpperCase()
                }
              </Text>
            </g>
          )}

          <g transform="translate(0, 12)">
            <rect
              width={16}
              height={4}
              fill={colors[13]}
            />
          </g>

          <g transform="translate(1.5, 13) scale(0.3)">
            <Text
              raw
              color={colors[7]}
            >{(cart.name || "").toUpperCase()}</Text>
          </g>

          <g
            transform="translate(-1.000000, -1.000000)"
            stroke={colors[13]}
            strokeWidth={1}
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

        `}</style>
      </a>
    )
  }
}

export default Run
