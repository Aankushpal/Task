import React from 'react'
import Card from './components/Card'
import DataContextProvider from './context/DataContextProvider'


function App() {

  return (
    <DataContextProvider>
        <Card /> 
    </DataContextProvider>
  )
}

export default App