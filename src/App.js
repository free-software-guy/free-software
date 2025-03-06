import React, { useState } from 'react';
import './App.css';

function App() {
  const softwareList = [
    { name: "VLC Media Player", description: "Free video and audio player", link: "https://www.videolan.org/vlc/" },
    { name: "GIMP", description: "Free image editing software", link: "https://www.gimp.org/" },
    { name: "VS Code", description: "Powerful code editor", link: "https://code.visualstudio.com/" },
    { name: "LibreOffice", description: "Free office suite (Word, Excel)", link: "https://www.libreoffice.org/" },
    { name: "Audacity", description: "Free audio recording and editing", link: "https://www.audacityteam.org/" },
    { name: "Blender", description: "Free 3D modeling and animation", link: "https://www.blender.org/" },
    { name: "Inkscape", description: "Free vector graphics editor", link: "https://inkscape.org/" },
    { name: "Firefox", description: "Fast and private web browser", link: "https://www.mozilla.org/firefox/" },
    { name: "7-Zip", description: "Free file compression tool", link: "https://www.7-zip.org/" },
    { name: "Notepad++", description: "Lightweight text editor", link: "https://notepad-plus-plus.org/" },
    { name: "Kdenlive", description: "Free video editing software", link: "https://kdenlive.org/" },
    { name: "FileZilla", description: "Free FTP client for file transfer", link: "https://filezilla-project.org/" },
    { name: "OBS Studio", description: "Free streaming and recording", link: "https://obsproject.com/" },
    { name: "Git", description: "Free version control system", link: "https://git-scm.com/" },
    { name: "Shotcut", description: "Free video editor", link: "https://shotcut.org/" },
    { name: "Thunderbird", description: "Free email client", link: "https://www.thunderbird.net/" },
    { name: "HandBrake", description: "Free video converter", link: "https://handbrake.fr/" },
    { name: "VirtualBox", description: "Free virtualization software", link: "https://www.virtualbox.org/" },
    { name: "Paint.NET", description: "Free image editor", link: "https://www.getpaint.net/" },
    { name: "Putty", description: "Free SSH and telnet client", link: "https://www.putty.org/" },
    { name: "NewPipe", description: "Free YouTube client with ad-free streaming", link: "https://newpipe.net/" },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredList = softwareList.filter(software =>
    software.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header>
        <h1>Free Open-Source Software</h1>
      </header>
      <main>
        <input
          type="text"
          placeholder="Search software..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="software-list">
          {filteredList.map((software, index) => (
            <div className="software-card" key={index}>
              <h3>{software.name}</h3>
              <p>{software.description}</p>
              <a href={software.link} target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;