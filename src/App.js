import React from 'react'

import Container from './components/container/Container'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import RecordsView from './views/RecordsView'

function App() {
  return (
    <Container>
      <Header />
      <RecordsView />
      <Footer />
    </Container>
  )
}

export default App
