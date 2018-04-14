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
    
      }

      render () {
          return (
            <div className="contact-us-wrapper">
                <h2>Contact Us</h2>
                <form className="contact-us" onSubmit={this.handleSubmit}>
                    <div>Name: <input name="name" onChange={this.handleChange}/></div>
                    <div>Email: <input name="email" onChange={this.handleChange}/></div>
                    <div>Comments:</div>
                    <div>
                        <input name="comments" onChange={this.handleChange} className="large-input-box"/>
                    </div>
                    <div>
                        <button className="submit-contact-us-btn" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
          )
      }
}

export default ContactUs

// render () {
//     return (
//       <div className='add-home-town'>
//         <h2>Add</h2>
//         <form onSubmit={this.handleAdd}>
//           Person: <input name='person' onChange={this.handleChange} />
//           Town: <input name='town' onChange={this.handleChange} />
//           <button type='submit'>Add</button>
//         </form>
//         <p><Link to='/'>List</Link></p>
//       </div>