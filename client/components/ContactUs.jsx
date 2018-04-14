import React from 'react'

import {Link} from 'react-router-dom'

class ContactUs extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            comments: '', 
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange (e) {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
      handleSubmit (e) {
        e.preventDefault()
        this.props.addToList(this.state)
      }
}

export default ContactUs