import { useEffect } from 'react';
import axios from "axios";
import _env from '../assets/ts/env';
console.log('_env', _env);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'; 
// import { faInstagram, faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// import index_img from "../assets/images/index.png"
import download_img from "../assets/images/download.png"
import menu_img from "../assets/images/menu.png"
import new_task_img from "../assets/images/new_task.png"
import notes_img from "../assets/images/notes.png"
import hero_vid from "../assets/videos/quivium_hero_compressed.mp4"
import sticky_vid from "../assets/videos/quivium_sticky_compressed.mp4"


function Index() {
  // define states


  useEffect(() => {
    const fetchGithubData = async () => {
    try {
        const response = await axios.get(_env.githubUrl, {
          headers: {
            Authorization: `token ${_env.githubToken}`,
          },
        });
        console.log('response', response);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }      
    }
    fetchGithubData()
  }, []);


  const handleClickDownloadApplication = async () => {
        console.log('handleClickDownloadApplication triggered');
        try {
            const githubResponse = await axios.get(_env.githubUrl + "/latest");
            const latestRelease = githubResponse.data;
            console.log('latestRelease', latestRelease);
            const platform = navigator.platform;
            console.log('platform', platform);
            
            const downloadAsset = latestRelease.assets[2]; 
            const downloadUrl = downloadAsset?.browser_download_url;

            if (!downloadAsset) {
                console.error("No download URL found for the specified platform.");
                return;
            }
            console.log('downloadUrl', downloadUrl);
        
            if (downloadUrl) {
                window.location.href = downloadUrl;
                console.log("Download initiated successfully.");
                notifyGmail()
            } else {
                console.error("No download URL found.");
            }
    
            } catch (error) {
            console.error("Download error:", error);
        
            }
  };

  const notifyGmail = () => {
        console.log('navigator.language', navigator.language);
        const lang  = navigator.language;
        fetch(`${_env.API_URL}send-email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lang }),
        })
  };






  return (
    <div>
        <div className='hero-wrapper'>
            <div className='d-flex hero-box'>
                <div className='hero-left-box'>
                    <h1><span>Quivium</span> Task Management Desktop Application</h1>
                    <h6>An effective desktop application where you can link your notes to tasks and tasks to lists. </h6>
                </div>
                <div className='hero-right-box'>
                    {/* <img src={index_img} alt='Img'></img> */}
                    <video src={hero_vid} autoPlay loop muted></video>
                </div>
            </div>
        </div>

        

        <hr style={{ borderColor: "#67F3B2", paddingBottom: "1.5em", borderWidth: "2px"}}></hr>



        <div className='download-wrapper'>
            <div className='d-flex download-box'>
                <div className='download-content-box'>
                    <div className='d-flex'>
                        <h1><img className='mr-3' src={download_img} alt='Img'></img>Download Quivium for windows</h1>
                    </div>
                    <h6>100% FREE to download and use</h6>
                    <button type='button' title='Download latest version of application' className='mt-5 button download-application-button'
                        onClick={() => handleClickDownloadApplication()}
                    >
                       Free Download for Win
                    </button>
                    <h3 className='mt-4'><em>Quivium is currently only avaliable for windows users</em></h3>
                </div>
                <div className='keywords-box'>
                    {/* <h5 className='keyword'>Desktop</h5> */}
                    <h5 className='keyword'>100% FREE</h5>
                    <h5 className='keyword'>User Friendly</h5>
                    <h5 className='keyword'>Full Offline Support</h5>
                    <h5 className='keyword'>SQLite Database</h5>
                    <h5 className='keyword'>Smart & Intuitive</h5>
                    <h5 className='keyword'>Archive completed lists</h5>
                    <h5 className='keyword'>Lightning Fast Performance</h5>
                    <h5 className='keyword'>No Cloud Required</h5>
                    <h5 className='keyword'>Lightweight & Resource-Efficient </h5>
                </div>
            </div>
        </div>

        

        {/* <hr style={{ borderColor: "#67F3B2", marginTop: "2em", borderWidth: "2px"}}></hr> */}



        <div className='details-wrapper'>
            <div className='d-flex justify-content-center details-box'>
                <div className='details-right-box'>
                    <img src={menu_img} alt='Img'></img>
                </div>
                <div className='details-left-box'>
                    <h4>Create lists and attach a color to it to easier distinguish it from other lists</h4>
                    <ul>
                        <li>Edit lists</li>
                        <li>Move lists to archive</li>
                        <li>Delete lists</li>
                    </ul>
                </div>
            </div>
            <div className='d-flex justify-content-center details-box'>
                <div className='details-left-box'>
                    <h4>Create tasks with or without due dates with possibility to add subtasks</h4>
                    <ul>
                        <li>View tasks grouped by tasks due today and upcoming tasks</li>
                    </ul>
                </div>
                <div className='details-right-box'>
                    <img src={new_task_img} alt='Img'></img>
                </div>
            </div>
            <div className='d-flex justify-content-center details-box'>
                <div className='details-right-box'>
                <video src={sticky_vid} autoPlay loop muted></video>
                </div>
                <div className='details-left-box'>
                    <h4>Make tasks sticky on top of the wall to prioritize certain tasks</h4>
                </div>
            </div>
            <div className='d-flex justify-content-center details-box'>
                <div className='details-left-box'>
                    <h4>Create notes linked to a list or a specific task</h4>
                    <ul>
                        <li>Auto saving notes</li>
                        <li>Link a note to the list or a specific task</li>
                    </ul>
                </div>
                <div className='details-right-box'>
                    <img src={notes_img} alt='Img'></img>
                </div>
            </div>
        </div>



        <hr style={{ borderColor: "#67F3B2", marginTop: "2em", borderWidth: "2px"}}></hr>



        <div className='quotes-wrapper'>
            <div>
                <h6>“Streamlined, clever interface and hassle free”</h6>
                <div className='ratings'>
                    <FontAwesomeIcon size="lg" icon={faStar} />
                    <FontAwesomeIcon size="lg" className='mx-1' icon={faStar} />
                    <FontAwesomeIcon size="lg" icon={faStar} />
                    <FontAwesomeIcon size="lg" className='mx-1' icon={faStar} />
                    <FontAwesomeIcon size="lg" icon={faStar} />
                </div>
                <p>-Kajsa, membership leads at IQ samhällsbyggnad </p>
            </div>
            <div>
                <h6>“Minimalistic and user friendly”</h6>
                <div className='ratings'>
                    <FontAwesomeIcon size="lg" icon={faStar} />
                    <FontAwesomeIcon size="lg" className='mx-1' icon={faStar} />
                    <FontAwesomeIcon size="lg" icon={faStar} />
                    <FontAwesomeIcon size="lg" className='mx-1' icon={faStar} />
                    <FontAwesomeIcon size="lg" icon={faStar} />
                </div>
                <p>-Matilda, fullstack developer at Nore  </p>
            </div>
            <div>
                <h6>“Perfect application to keep track of tasks and create notes linked to them”</h6>
                <div className='ratings'>
                    <FontAwesomeIcon size="lg" icon={faStar} />
                    <FontAwesomeIcon size="lg" className='mx-1' icon={faStar} />
                    <FontAwesomeIcon size="lg" icon={faStar} />
                    <FontAwesomeIcon size="lg" className='mx-1' icon={faStar} />
                    <FontAwesomeIcon size="lg" icon={faStar} />
                </div>
                <p>-Tove, engineering student at  Lunds university </p>
            </div>
    
        </div>

        
    </div>
  );
}

export default Index;
