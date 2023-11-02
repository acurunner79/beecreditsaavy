import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { useForm, ValidationError } from '@formspree/react'
import '../styles/contact.css'

const Contact = () => {

  const [state, handleSubmit] = useForm("mleyjvda")

  if(state.succeeded){
    return( 
      <Layout>
        <h3 className='submit-message'>Thank you!<br/> Your request has been submitted.</h3><br/>
        <h2>Return to
          <Link to='/'> Home Page</Link>
        </h2>
      </Layout>
    )
  }

  return (
    <Layout>
      <h1 className='page-header'>Contact Page</h1>
      <div className='form-container'>
        <form className='form-card' onSubmit={handleSubmit}>
          <ValidationError field="email" prefix="Email" errors={state.errors} />
          <label className='form-label'>First Name
            <input className='form-input'/>
          </label>
          <br/>
          <label className='form-label'>Last Name
            <input className='form-input'/>
          </label>
          <br/>
          <label className='form-label'>Email
            <input className='form-input'/>
          </label>
          <br/>
          <label className='form-label'>Message
            <textarea className='form-textarea'/>
          </label>
          <br/>
          <button className='form-button'>Submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
