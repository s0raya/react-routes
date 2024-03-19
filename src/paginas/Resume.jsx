import { Link } from 'react-router-dom';
import { studies, experiences } from '../data/resume';

function Resume() {
    return (
        <>
            <h1>Curriculum</h1>
            <Link to="/">Home</Link>
            <Link to="/projects">Proyectos</Link>
            <div className="studies">
                <h2>Estudios:</h2>
                <ul>
                    {studies.map(item => (
                            <li key={item.id}>
                                <p>{item.title}</p>
                                <p>{item.institution}</p>
                                <p>{item.date}</p>
                            </li>
                        )
                    )}
                </ul>
                    
            </div>
            <div className='experiences'>
                <h2>Experiencia laboral:</h2>
                <ul>
                    {experiences.map(exp => {
                        return(
                            <li key={exp.id}>
                                <p>{exp.title}</p>
                                <p>{exp.company}</p>
                                <p>{exp.date}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Resume