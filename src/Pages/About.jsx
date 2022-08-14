import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
function About() {
  return (
    <>
        <Header />
        <div className='main bg-secondary'>
            <h3 className='text-white-50 mx-4 px-4 mt-5 pt-5'>This app created by Atayev Ibrahim</h3>
            <a className='text-white-50 mx-4 px-4 ' href="https://github.com/Atayev/Todo-app-React">Click to Visit Github Repo</a>
        </div>
        <Footer />
    </>
  )
}

export default About