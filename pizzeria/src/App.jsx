import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

import Card from 'react-bootstrap/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>

      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://placedog.net/200/300"/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make
          up the bulk of the card's content.
        </Card.Text>
        </Card.Body>
      </Card> */}
    </>
  )
}

export default App
