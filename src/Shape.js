import React from 'react';

const attributes = {
  preserveAspectRatio: 'none',
  viewBox: '0 0 16 16',
}

const T = ({ fill, paddingTop, insetTop }) => {
  return insetTop === '' ? null : (
    <svg
      height={ paddingTop }
      style={{ left: 0, top: 0, position: 'absolute' }}
      width="100%"
      {...attributes}
    >
      <path d={`M0,0 L16,0 L${ insetTop === 'left' ? 0 : 16},16z`} fill={ fill }></path>
    </svg>
  )
};

const R = ({ fill, paddingRight, insetRight }) => {
  return insetRight === '' ? null : (
    <svg
      height="100%"
      style={{ right: 0, top: 0, position: 'absolute' }}
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
      style={{ bottom: 0, left: 0, position: 'absolute' }}
      width="100%"
      {...attributes}
    >
      <path d={`M${ insetBottom === 'left' ? 0 : 16},0 L16,16 L0,16z`} fill={ fill }></path>
    </svg>
  )
};

const L = ({ fill, paddingLeft, insetLeft }) => {
  return insetLeft === '' ? null : (
    <svg
      height="100%"
      style={{ left: 0, top: 0, position: 'absolute' }}
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
    inset = `1rem`,
    padding = `1rem`,
    position = `relative`,
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
    paddingTop = pt,
    paddingRight = pr,
    paddingBottom = pb,
    paddingLeft = pl,
  } = props
  return (
    <span style={{ background, color, display, paddingBottom, paddingLeft, paddingRight, paddingTop, position }}>
      <T {...{ fill, insetTop, paddingTop}} />
      <R {...{ fill, insetRight, paddingRight}} />
      <B {...{ fill, insetBottom, paddingBottom}} />
      <L {...{ fill, insetLeft, paddingLeft}} />
      <span style={{ display }}>{ children }</span>
    </span>
  )
}
