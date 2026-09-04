import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyPortfolio from './MyPortfolio.jsx';
import About from './About.jsx';
import Project from './Project.jsx';
import Contact from './Contact.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyPortfolio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

