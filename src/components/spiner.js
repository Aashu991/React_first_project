import React, { Component } from 'react'
import loding from './loding.gif'

 class Spiner extends Component {
  render() {
    return (
      <div className='container text-center'>
        <img src={loding} alt='loading' />
      </div>
    )
  }
}

export default Spiner
