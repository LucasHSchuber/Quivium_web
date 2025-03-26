import { useEffect, useState } from 'react';
import axios from "axios";
import _env from '../assets/ts/env';
console.log('_env', _env);

// import index_img from "../assets/images/index.png"
// import download_img from "../assets/images/download.png"
// import menu_img from "../assets/images/menu.png"
// import new_task_img from "../assets/images/new_task.png"
// import notes_img from "../assets/images/notes.png"
// import hero_vid from "../assets/videos/quivium_hero.mp4"

interface Asset {
    browser_download_url: string;
    download_count: number;
    size: number;
}

interface Release {
    tag_name: string;
    published_at: string;
    body: string;
    assets: Asset[];
    download_url: string;
}

function Versions() {
  // define states
  const [data, setData] = useState<Release[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 997);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 997);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log('isMobile', isMobile);
  }, [isMobile]);

  useEffect(() => {
    const fetchGithubData = async () => {
    try {
        const response = await axios.get(_env.githubUrl, {
          headers: {
            Authorization: `token ${_env.githubToken}`,
          },
        });
        console.log('response.data', response.data);
        if (response.status === 200){
            setData(response.data)
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }      
    }
    fetchGithubData()
  }, []);


  const handleClickDownloadApplication = async (versionData: Asset) => {
        console.log('handleClickDownloadApplication triggered');
        try {            
            const downloadAsset = versionData; 
            const downloadUrl = downloadAsset.browser_download_url;

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


  const convertToMb = (size: number) => {
    const bytes = size;
    const megabytes = bytes / 1048576;
    const roundedMegabytes = Math.round(megabytes * 10) / 10;  
    console.log(roundedMegabytes); 
    return roundedMegabytes; 
};




  return (
    <div className='page-wrapper'>
        <div className='header-box'>
            <h1>Versions</h1>
        </div>        
        <p className='mt-5'>Quivium has currently only support for Windows operating system</p>
        {data.length > 0 && (
            <table className="version-table">
                <thead>
                    <tr>
                        <th>Version</th>
                        <th>Published</th>
                        <th>Operating System</th>
                        {!isMobile && (
                            <th>Release Notes</th>
                        )}
                        <th>Size</th>
                        <th>Downloads</th>
                        {!isMobile && (
                            <th></th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, index: number) => (
                        <tr key={index}>
                            <td>{d.tag_name}</td>
                            <td>{new Date(d.published_at).toLocaleDateString()}</td>
                            <td>Windows</td>
                            {!isMobile && (
                                <td style={{ maxWidth: "40em" }}>{d.body}</td>
                            )} 
                            <td>{convertToMb(d.assets[2].size)} MB</td>
                            <td>{d.assets[2].download_count}</td>
                            {!isMobile && (
                                <td>
                                    <a href={d.download_url} target="_blank" rel="noopener noreferrer">
                                        <button onClick={() => handleClickDownloadApplication(d.assets[2])}>Download {d.tag_name}</button>
                                    </a>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>


  );
}

export default Versions;
