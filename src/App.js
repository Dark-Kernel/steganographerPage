import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// function cbutton ({text}){
//     function handleClick() {
//         alert('You clicked me!');
//     }
//     return (
//         <div>
//             <button onClick={handleClick}>{text}</button>
//         </div>
//     )
// }

function Landing() {
    return (
        <>
        <Router>
        <div className="app">
        <Navbar />
        <Routes>
        {/* <Route path="/" element={<Home />} />
            <Route path="/encode" element={<Encode />} />
            <Route path="/decode" element={<Decode />} /> */ }
        <Route path="/about" element={<About />} />
        </Routes>
        </div>
        </Router>
        { /* <Navbar */ }
        <div className="wrapper">
        <div className="cyber-grid"></div>
        <div className="container">
        <div className="content">
        <h1 className="glitch-effect">Steganographer</h1>
        <p className="punchline">"We Hide, You Seek, It's art Don't peek"</p>
        </div>
        </div>
        </div></>
    )
}

function App() {
    return (
        <div className="App">
        <header className="App-header">
        <p>
        <Landing />
        {
            // <Greet name="React"/>
            // <Mybutton text="wow"/>
        }
        </p>
        </header>
        </div>
    );
}

export default App;
