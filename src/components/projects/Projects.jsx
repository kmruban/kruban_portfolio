import './projects.scss';
import { useEffect, useState } from 'react';
import {
  webProj,
  graphicsProj
} from "../../data";
import ProjectList from '../projectList/ProjectList';

function Projects() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState('web');

  const list = [
    {
      id: "web",
      title: "Web Application",
    },
    {
      id: "graphics",
      title: "Games/Graphics",
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webProj);
        break;
      case "graphics":
        setData(graphicsProj);
        break;
      default:
        setData(webProj);
    }
  }, [selected]);

  return (
    <div id='projects' className='projects'>
      <h1 className='title'>
        My Projects
      </h1>
      <ul>
        {list.map(item=>(
          <ProjectList 
            title={item.title} 
            active={ selected === item.id } 
            setSelected={setSelected} 
            id = {item.id}
          />
        ))}
      </ul>
      <div className="container">
      {data.map((d) => (
        <div className='card'>
          <div className='top'>
            <a href={d.link} alt=''><img src={d.img} alt=''></img></a>
          </div>
          <div className='bottom'>
            {d.title}
          </div>
          <div className='repository'>
            <a href={d.repo}>GitHub</a>
          </div>
        </div>
      ))}
      </div>
      Click on a picture for a video demonstration of the project!
    </div>
  )
}

export default Projects;