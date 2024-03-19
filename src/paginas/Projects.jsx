import { Link } from 'react-router-dom'
import projects from '../data/projects.js'

function Projects() {
    return (
        <>
            <h1>Projects</h1>
            <Link to="/">Home</Link>
            <Link to="/resume">CV</Link>
            <div className="container-projects">
                <ul id='project-list'>
                    {projects.map(proj => (
                        <li key={proj.id}>
                            <p>{proj.name}</p>
                            <img src={proj.image}></img>
                            <p>{proj.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Projects