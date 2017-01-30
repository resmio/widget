import React from 'react'
import { css } from 'glamor'
import { colors } from '../styles/variables'

const spin = css.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

const spinner = css({
  animation: `${spin} 2s linear infinite`,
  border: `0.3rem solid ${colors.whiteSand}`,
  borderRadius: '500rem',
  borderTop: `0.3rem solid ${colors.silver}`,
  height: '4.4rem',
  margin: '0 auto',
  width: '4.4rem',
})

const Spinner = () => (<div {...spinner} />)

export default Spinner
