import './about.scss';

function About() {
  return (
    <div className='about' id='about'>
        <div className='container'>
          <div className='title'>
            <h1>About Me</h1>
          </div>
          <div className='top'>
            <div className='left'>
              <img src='pictures/Me.png' alt='' />
            </div>
            <div className='right'>
              <h2>Contact</h2>
              <br/>
              <label>Email</label>
              <p>Kyleruban1@outlook.com</p>
              <br/>
              <label>Phone #</label>
              <p>973-362-6288</p>
              <br/>
              <label>Location</label>
              <p>NY/NJ</p>
              <br/>
            </div>
          </div>
          <div className='bottom'>
            I am a recent college graduate with a B.S. in Computer Science.
            I am working to find a job in the industry with a focus in Full-Stack Software Engineering. 
            I have absorbed a ton of knowledge from building projects by myself over the last
            years along with courses taken in school to advance my programming ability to 
            new heights. I aim to find a good job where I can take my
            knowledge and desire to learn more everyday to continue pushing myself and contribute
            positively on whatever it is I am doing.
          </div>
        </div>
    </div>
  )
}

export default About;