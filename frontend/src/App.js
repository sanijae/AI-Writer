import React from 'react'
import MyNavbar from './Component/Navbar/Navbar'
import AppRoutes from './AppRoutes'
import Footer from './Component/Footer/Footer'

function App() {
  return (
    <div>
      <MyNavbar />
      <div className='body'>
        <AppRoutes/>
      </div>
      <Footer/>
    </div>
  )
}

export default App