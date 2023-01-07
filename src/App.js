import React from 'react'
import AppRouter from './component/AppRoutes/AppRouter'
// import Auth from './pages/Auth/Auth'
// import LandingPage from './pages/LandingPage/LandingPage'
// import singleProduct from './component/Product/singleProduct'
function App() {
  
  const renderComponent =()=>{
    return (
    <>
        {/* <Auth/>           */}
        {/* <LandingPage/> */}
        <AppRouter/>
        {/* <singleProduct/> */}
    </>
    )
  }
  return (
      renderComponent()
  )
}

export default App
