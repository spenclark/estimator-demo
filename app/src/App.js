import './App.css';
import Faq from './Components/Faq';
import Form from './Components/Form';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<>
            <Navbar/>
            <Hero />
            <Faq />
          </>}/>
          <Route path="/estimator" element={<>
            <Navbar />
            <Form />
          </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
