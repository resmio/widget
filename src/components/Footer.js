import React, { Component, PropTypes } from 'react'
import { style } from 'glamor'
import { Button } from '@resmio/mantecao'

let colors = {
  grey: '#999'
}

let container  = style({
  background: 'white',
  width: '100%',
  height: '55px',
  padding: '1em 2em 1em'
})

let subtitle = style({
  fontSize: '1.8em',
  marginTop: '0'
})

let name = style({
  fontSize: '1.2em',
  marginTop: '0.2',
  marginBottom: '0.4em'
})

let Footer = ({facility, bgImage, collapsed}) => (
  <footer {...container}>
    <Button disabled bgColor='red'>
      Book Now
    </Button>
   </footer>
)

Footer.propTypes = {
  bgImage: PropTypes.string,
  collapsed: PropTypes.bool,
  facility: PropTypes.string
}

export default Footer
