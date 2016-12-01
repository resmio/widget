import React from 'react'
import { style } from 'glamor'

const Panel = (props) => {
  const { children } = props

  const panel = style({
    position: 'absolute',
    top: '6em',
    bottom: '6em',
    left: '0',
    right: '0'
  })

  return (
    <section {...panel}>
      { children }
    </section>
  )
}

export default Panel
