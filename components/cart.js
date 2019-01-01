import React from "react"
import PropTypes from "prop-types"
import colors from "../colors"

const first = colors.slice(0, 7)

export class Run extends React.Component {
  static defaultProps = {
    bg: colors[0],
    size: 64,
    onClick: () => {},
  };

  static propTypes = {
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
    const { bg, size } = this.props

    return (
      <a className="cart" href="/cart" onClick={this.handleClick}>
        <svg className="cart__border" viewBox="0 0 16 16">
          <path id="Case" fill={bg} d="M0,0 C0,0 14.1624756,4.84345139e-16 14.0817871,0 C14.0010986,-4.84345139e-16 14.0130005,1.99951172 14.0130005,1.99951172 L16,1.99951172 L16,16 L0,16 L0,0 Z"></path>
          <g transform="translate(-1.000000, -1.000000)" stroke="#000000" strokeLinecap="square">
            <path d="M1.5,1.5 L14.5,1.5" className="cart__borderLine"></path>
            <path d="M14.5,3.5 L14.5,1.5" className="cart__borderLine"></path>
            <path d="M16.5,3.5 L14.5,3.5" className="cart__borderLine"></path>
            <path d="M1.5,16.5 L16.5,16.5" className="cart__borderLine"></path>
            <path d="M1.5,1.5 L1.5,16.5" className="cart__borderLine"></path>
            <path d="M16.5,16.5 L16.5,3.5" className="cart__borderLine"></path>
          </g>
        </svg>

        <style jsx>{`
          .cart {
            height: ${size}px;
            width: ${size}px;
            background: none;
            border: 0;
            display: flex;
          }

          .cart__border {
            height: 100%;
            width: 100%;
          }

          .cart__borderLine {
            stroke: ${colors[6]};
            stroke-width: 0.4;
          }
        `}</style>
      </a>
    )
  }
}

export default Run
