import React from 'react'
import { css } from 'glamor'
import { colors } from '../styles/variables'

const spin = css.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

const spinner = css({
  animation: `${spin} 2s linear infinite`,
  border: `0.3em solid ${colors.whiteSand}`,
  borderRadius: '500em',
  borderTop: `0.3em solid ${colors.silver}`,
  height: '2.4em',
  margin: '1em auto',
  width: '2.4em',
})

const Spinner = () => (<div {...spinner} />)

export default Spinner
