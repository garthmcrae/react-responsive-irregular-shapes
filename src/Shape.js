import React from 'react';

const horizontal = () => Math.round(Math.random()) === 0 ? 'left' : 'right'
const vertical = () => Math.round(Math.random()) === 0 ? 'up' : 'down'

const attributes = {
  preserveAspectRatio: 'none',
  viewBox: '0 0 100 100',
}

const styles = {
  position: 'absolute',
}

const Bottom = ({ background, padding, bottom }) => {
  const { angle = true, direction = horizontal() } = bottom;
  return angle === false ? null : (
    <svg
      height={ padding }
      style={{ left: 0, bottom: 0, ...styles }}
      width="100%"
      {...attributes}
    >
      <path d={`M${direction === 'left' ? 0 : 100},0 L100,100 L0,100z`} fill={ background }></path>
    </svg>
  )
};

const Left = ({ background, padding, left }) => {
  const { angle = true, direction = vertical() } = left;
  return angle === false ? null : (
    <svg
      height="100%"
      style={{ left: 0, top: 0, ...styles }}
      width={ padding }
      {...attributes}
    >
      <path d={`M0,0 L100,${direction === 'up' ? 0 : 100} L0,100z`} fill={ background }></path>
    </svg>
  )
};

const Right = ({ background, padding, right }) => {
  const { angle = true, direction = vertical() } = right;
  return angle === false ? null : (
    <svg
      height="100%"
      style={{ right: 0, top: 0, ...styles }}
      width={ padding }
      {...attributes}
    >
      <path d={`M100,0 L100,100 L0,${direction === 'up' ? 0 : 100}z`} fill={ background }></path>
    </svg>
  )
};

const Top = ({ background, padding, top }) => {
  const { angle = true, direction = horizontal() } = top;
  return angle === false ? null : (
    <svg
      height={ padding }
      style={{ left: 0, top: 0, ...styles }}
      width="100%"
      {...attributes}
    >
      <path d={`M0,0 L100,0 L${direction === 'left' ? 0 : 100},100z`} fill={ background }></path>
    </svg>
  )
};

export default ({
  background = 'white',
  children,
  color = 'whitesmoke',
  padding = '1rem',
  sides = {},
  bottom = {},
  left = {},
  right = {},
  top = {},
}) => {
  return (
    <div style={{ background: color, padding, position: 'relative' }}>
      <Top {...{ background, padding, top }} />
      <Bottom {...{ background, padding, bottom }} />
      <Left {...{ background, padding, left }} />
      <Right {...{ background, padding, right }} />
      <div>{ children }</div>
    </div>
  )
}
