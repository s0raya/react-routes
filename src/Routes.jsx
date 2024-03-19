import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home.jsx';
import Projects from './paginas/Projects.jsx';
import Resume from './paginas/Resume.jsx';
import { createBrowserRouter } from 'react-router-dom';
import Header from './Header.jsx';
import HeaderHelp from './HeaderAppHelp.jsx'
import Help from './paginas/Help.jsx'
import Faqs from './paginas/Faqs.jsx';
import Error from './paginas/Error.jsx'
import UseEffect from './paginas/UseEffect.jsx'


const RoutesApp = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        errorElement: <Error />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/projects', element: <Projects /> },
            { path: '/resume', element: <Resume /> },
            { path: '/useeffect', element: <UseEffect /> },
        ]
    },
    {
        path: '/help',
        element: <HeaderHelp />,
        children: [
            { path: '/help', element: <Help /> },
            { path: 'faqs', element: <Faqs /> },

        ]
    }
])

/*function RoutesApp() {
    return (
       <>
        {/*<Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>*///}

        //</>
    //)
//}

export default RoutesApp;