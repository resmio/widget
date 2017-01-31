import React, {PropTypes} from 'react';
import {style} from 'glamor'

const formSS = style({
  margin: '2rem auto',
  width: '90%',
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
