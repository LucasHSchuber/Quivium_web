// import { useEffect, useState } from 'react';
// import axios from "axios";
import _env from '../assets/ts/env';
console.log('_env', _env);

// import index_img from "../assets/images/index.png"
// import download_img from "../assets/images/download.png"
// import menu_img from "../assets/images/menu.png"
// import new_task_img from "../assets/images/new_task.png"
// import notes_img from "../assets/images/notes.png"
// import hero_vid from "../assets/videos/quivium_hero.mp4"


function About() {
  // define states
  

  return (
    <div className='page-wrapper'>
        <div className='header-box'>
            <h1>About</h1>
        </div>        
        
        <div className="mt-5 about-page">
            <section className="project-overview">
                <h2>What is Quivium?</h2>
                <p>Quivium is task management desktop application designed to help users organize and structureize private or work tasks. Our goal is to provide a simple and intuitive tool to keep track of tasks with possiblity to make notes linked to a list or specific task.</p>
            </section>

            {/* <section className="features">
                <h2>Features</h2>
                <ul>
                    <li>Easy-to-use interface</li>

                </ul>
            </section> */}

            <section className="story">
                <h2>The Story Behind Quivium</h2>
                <p>The idea of a free and accesable desktop application to keep my work organized with tasks and notes in custom made lists was missing on the market. From that need Quivium was born. It started as a small personal project which was running on my local machine, which then grew into a shared product free to use for whomever has the same needs as I do. With the built in auto updater, the user never has to worry about missing out on new release versions and, and can always enjoy the latest application updates. </p>
            </section>

            {/* <section className="team">
                <h2>Developer</h2>
                <div className="team-member">
                    <img src="/path/to/photo.jpg" alt="Image of Lucas Schuber " />
                    <h3>Lucas H. Schuber</h3>
                </div>
            </section> */}

            <section className="technologies">
                <h2>Technologies Used</h2>
                <ul>
                    <li>React.js</li>
                    <li>Electron.js</li>
                    <li>Node.js</li>
                    <li>SQLite Database</li>
                </ul>
            </section>

            {/* <section className="contributing">
                <h2>Contribute</h2>
                <p>We welcome contributions from the community! If you'd like to help improve [Project Name], here’s how you can get involved:</p>
                <ul>
                    <li>Fork the repository on GitHub</li>
                    <li>Submit a pull request</li>
                    <li>Report bugs and suggest features</li>
                </ul>
                <a href="https://github.com/your-username/repository" target="_blank" rel="noopener noreferrer">Visit the GitHub Repository</a>
            </section> */}

            {/* <section className="license">
                <h2>License</h2>
                <p>This project is licensed under the MIT License - see the <a href="/LICENSE" target="_blank" rel="noopener noreferrer">LICENSE</a> file for details.</p>
            </section> */}
            {/* 
            <section className="contact">
                <h2>Contact Us</h2>
                <ul>
                    <li>Email: <a href="mailto:contact@example.com">contact@example.com</a></li>
                    <li>Twitter: <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">@yourhandle</a></li>
                </ul>
            </section> */}

            {/* <section className="cta">
                <h2>Get Started Today!</h2>
                <p>Join the community and start using [Project Name] today. We’re constantly improving and releasing new features.</p>
                <button>Download Now</button>
            </section> */}
        </div>
    </div>

  );
}

export default About;
