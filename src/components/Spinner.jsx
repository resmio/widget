import React from 'react'
import {css} from 'glamor'
import {colors} from '../styles/variables'

const spin = css.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

const spinner = css({
  border: `0.3rem solid ${colors.whiteSand}`,
  borderTop: `0.3rem solid ${colors.silver}`,
  borderRadius: '500rem',
  margin: '0 auto',
  width: '4.4rem',
  height: '4.4rem',
  animation: `${spin} 2s linear infinite`
})

const Spinner = () => ( <div {...spinner} />)

export default Spinner
