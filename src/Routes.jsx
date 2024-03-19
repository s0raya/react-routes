import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home.jsx';
import Projects from './paginas/Projects.jsx';
import Resume from './paginas/Resume.jsx';

function RoutesApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
    )
}

export default RoutesApp;