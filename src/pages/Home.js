import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn' ;
import EmailIcon from '@material-ui/icons/Email' ;
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css'


function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Bonjour, je m'appelle Cédric</h2>
            <div className='prompt'>
                <p>Développeur Informatique</p>
                <LinkedInIcon/>
                <EmailIcon/>
                <GithubIcon/>
            </div>
        </div>
        <div className='skills'>
          <h1> Skills</h1>
          <ol className='list'>
            <li className='item'>
              <h2>Front-End</h2>
              <span>
                ReactJS, Angular, Redux, HTML, CSS, React Native, NPM, Bootstrap
              </span>
            </li>
            <li className='item'>
              <h2>Back-End</h2>
              <span>
                Symphony, MySQL, MongoDB, Django
              </span>
            </li>
            <li className='item'>
              <h2>Langages</h2>
              <span>
                Javascript,PHP, Python
              </span>
            </li>
          </ol>
        </div>
    </div>
  )
}

export default Home