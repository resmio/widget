import React, {PropTypes} from 'react';
import {style} from 'glamor'

const formSS = style({
  width: '90%',
  margin: '2rem auto'
})

const Form = ({children}) => (
  <form {...formSS}>
    {children}
  </form>
)

Form.propTypes = {
  children: PropTypes.node
}
export default Form
