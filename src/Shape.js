import React from 'react';

const attributes = {
  preserveAspectRatio: `none`,
  transform: `translate3d(0,0,0)`,
  viewBox: `0 0 16 16`,
}

const bleed = 0
const bias = `100%`

const T = ({ fill, paddingTop, insetTop }) => {
  return insetTop === '' ? null : (
    <svg
      height={ paddingTop }
      style={{ left: 0, right: 0, top: bleed, position: 'absolute' }}
      width={bias}
      {...attributes}
    >
      <path d={`M0,0 L16,0 L${ insetTop === 'left' ? 0 : 16},16z`} fill={ fill }></path>
    </svg>
  )
};

const R = ({ fill, paddingRight, insetRight }) => {
  return insetRight === '' ? null : (
    <svg
      height={bias}
      style={{ bottom: 0, right: bleed, top: 0, position: 'absolute' }}
      width={ paddingRight }
      {...attributes}
    >
      <path d={`M0,${ insetRight === 'top' ? 0 : 16} L16,0 L16,16z`} fill={ fill }></path>
    </svg>
  )
};

const B = ({ fill, paddingBottom, insetBottom }) => {
  return insetBottom === '' ? null : (
    <svg
      height={ paddingBottom }
      style={{ bottom: bleed, left: 0, right: 0, position: 'absolute' }}
      width={bias}
      {...attributes}
    >
      <path d={`M${ insetBottom === 'left' ? 0 : 16},0 L16,16 L0,16z`} fill={ fill }></path>
    </svg>
  )
};

const L = ({ fill, paddingLeft, insetLeft }) => {
  return insetLeft === '' ? null : (
    <svg
      height={bias}
      style={{ bottom: 0, left: bleed, top: 0, position: 'absolute' }}
      width={ paddingLeft }
      {...attributes}
    >
      <path d={`M0,0 L16,${ insetLeft === 'top' ? 0 : 16} L0,16z`} fill={ fill }></path>
    </svg>
  )
};

function x(s = '') {
  const [a, b = a, c = a, d = b] = s.split(' ');
  return [a, b, c, d]
}

export default (props) => {
  const {
    background = `whitesmoke`,
    children,
    className = `Shape`,
    color = `darkslategray`,
    display = `block`,
    fill = `white`,
    inset = `top left`,
    padding = `16px`,
    position = `relative`,
    transform = `translate3d(0,0,0)`,
  } = props
  const [it, ir, ib, il] = x(props.inset)
  const {
    insetTop = it,
    insetRight = il,
    insetBottom = ib,
    insetLeft = il,
  } = props
  const [pt, pr, pb, pl] = x(props.padding)
  const {
    paddingTop = parseInt(pt, 10),
    paddingRight = parseInt(pr, 10),
    paddingBottom = parseInt(pb, 10),
    paddingLeft = parseInt(pl, 10),
  } = props
  return (
    <span className={className} style={{ background, color, display, paddingBottom, paddingLeft, paddingRight, paddingTop, position, transform }}>
      <T {...{ fill, insetTop, paddingTop}} />
      <R {...{ fill, insetRight, paddingRight}} />
      <B {...{ fill, insetBottom, paddingBottom}} />
      <L {...{ fill, insetLeft, paddingLeft}} />
      <span style={{ display }}>{ children }</span>
    </span>
  )
}
