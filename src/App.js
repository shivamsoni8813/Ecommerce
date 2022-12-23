import React from 'react'
import LandingPage from './pages/LandingPage/LandingPage'
function App() {
  
  const renderComponent =()=>{
    return (<>
        <LandingPage/>
    </>
    )
  }
  return (
      renderComponent()
  )
}

export default App
