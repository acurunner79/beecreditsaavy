import React from 'react'
import Layout from '../components/Layout'


const login = () => {
  return (
    <Layout>
      <h1 className='page-header'>Login</h1>
      <div className='login-container'>
        <form className='login-card'>
            <label>
                <input />
            </label>
            <br/>
            <label>
                <input />
            </label>
            <br/>
            <button className='form-button'>Submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default login
