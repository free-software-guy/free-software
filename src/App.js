import React, { useState } from 'react';
import './App.css';

function App() {
  const softwareList = [
    // Tune Di 21 Software
    { category: "Media Players", name: "VLC Media Player", description: "Free video and audio player", link: "https://www.videolan.org/vlc/", icon: "https://www.videolan.org/favicon.ico" },
    { category: "Media Players", name: "OBS Studio", description: "Free streaming and recording", link: "https://obsproject.com/", icon: "https://obsproject.com/favicon.ico" },
    { category: "Media Players", name: "NewPipe", description: "Free YouTube client with ad-free streaming", link: "https://newpipe.net/", icon: "https://newpipe.net/favicon.ico" },
    { category: "Image Editing", name: "GIMP", description: "Free image editing software", link: "https://www.gimp.org/", icon: "https://www.gimp.org/favicon.ico" },
    { category: "Image Editing", name: "Inkscape", description: "Free vector graphics editor", link: "https://inkscape.org/", icon: "https://inkscape.org/favicon.ico" },
    { category: "Image Editing", name: "Paint.NET", description: "Free image editor", link: "https://www.getpaint.net/", icon: "https://www.getpaint.net/favicon.ico" },
    { category: "Development Tools", name: "VS Code", description: "Powerful code editor", link: "https://code.visualstudio.com/", icon: "https://code.visualstudio.com/favicon.ico" },
    { category: "Development Tools", name: "Git", description: "Free version control system", link: "https://git-scm.com/", icon: "https://git-scm.com/favicon.ico" },
    { category: "Development Tools", name: "Putty", description: "Free SSH and telnet client", link: "https://www.putty.org/", icon: "https://www.putty.org/favicon.ico" },
    { category: "Productivity", name: "LibreOffice", description: "Free office suite (Word, Excel)", link: "https://www.libreoffice.org/", icon: "https://www.libreoffice.org/favicon.ico" },
    { category: "Productivity", name: "Notepad++", description: "Lightweight text editor", link: "https://notepad-plus-plus.org/", icon: "https://notepad-plus-plus.org/favicon.ico" },
    { category: "Productivity", name: "Thunderbird", description: "Free email client", link: "https://www.thunderbird.net/", icon: "https://www.thunderbird.net/favicon.ico" },
    { category: "Audio Editing", name: "Audacity", description: "Free audio recording and editing", link: "https://www.audacityteam.org/", icon: "https://www.audacityteam.org/favicon.ico" },
    { category: "Video Editing", name: "Blender", description: "Free 3D modeling and animation", link: "https://www.blender.org/", icon: "https://www.blender.org/favicon.ico" },
    { category: "Video Editing", name: "Kdenlive", description: "Free video editing software", link: "https://kdenlive.org/", icon: "https://kdenlive.org/favicon.ico" },
    { category: "Video Editing", name: "Shotcut", description: "Free video editor", link: "https://shotcut.org/", icon: "https://shotcut.org/favicon.ico" },
    { category: "Video Editing", name: "HandBrake", description: "Free video converter", link: "https://handbrake.fr/", icon: "https://handbrake.fr/favicon.ico" },
    { category: "Web Browsers", name: "Firefox", description: "Fast and private web browser", link: "https://www.mozilla.org/firefox/", icon: "https://www.mozilla.org/favicon.ico" },
    { category: "File Management", name: "7-Zip", description: "Free file compression tool", link: "https://www.7-zip.org/", icon: "https://www.7-zip.org/favicon.ico" },
    { category: "File Management", name: "FileZilla", description: "Free FTP client for file transfer", link: "https://filezilla-project.org/", icon: "https://filezilla-project.org/favicon.ico" },
    { category: "Miscellaneous", name: "VirtualBox", description: "Free virtualization software", link: "https://www.virtualbox.org/", icon: "https://www.virtualbox.org/favicon.ico" },

    // Baaki 50 Software
    { category: "Productivity", name: "Calibre", description: "E-book manager", link: "https://calibre-ebook.com/", icon: "https://calibre-ebook.com/favicon.ico" },
    { category: "Productivity", name: "GnuCash", description: "Accounting software", link: "https://www.gnucash.org/", icon: "https://www.gnucash.org/favicon.ico" },
    { category: "Productivity", name: "FocusWriter", description: "Distraction-free writing", link: "https://gottcode.org/focuswriter/", icon: "https://gottcode.org/favicon.ico" },
    { category: "Productivity", name: "FreeMind", description: "Mind mapping tool", link: "http://freemind.sourceforge.net/", icon: "http://freemind.sourceforge.net/favicon.ico" },
    { category: "Productivity", name: "TiddlyWiki", description: "Personal wiki notebook", link: "https://tiddlywiki.com/", icon: "https://tiddlywiki.com/favicon.ico" },
    { category: "Media Players", name: "MPV", description: "Minimalist media player", link: "https://mpv.io/", icon: "https://mpv.io/favicon.ico" },
    { category: "Media Players", name: "Clementine", description: "Rich music player", link: "https://www.clementine-player.org/", icon: "https://www.clementine-player.org/favicon.ico" },
    { category: "Media Players", name: "Audacious", description: "Lightweight audio player", link: "https://audacious-media-player.org/", icon: "https://audacious-media-player.org/favicon.ico" },
    { category: "Media Players", name: "Kodi", description: "Media center", link: "https://kodi.tv/", icon: "https://kodi.tv/favicon.ico" },
    { category: "Media Players", name: "Foobar2000", description: "Customizable audio player", link: "https://www.foobar2000.org/", icon: "https://www.foobar2000.org/favicon.ico" },
    { category: "Image Editing", name: "Krita", description: "Digital painting tool", link: "https://krita.org/", icon: "https://krita.org/favicon.ico" },
    { category: "Image Editing", name: "Pinta", description: "Simple image editor", link: "https://www.pinta-project.com/", icon: "https://www.pinta-project.com/favicon.ico" },
    { category: "Image Editing", name: "Darktable", description: "RAW photo editor", link: "https://www.darktable.org/", icon: "https://www.darktable.org/favicon.ico" },
    { category: "Image Editing", name: "Photopea", description: "Web-based Photoshop alternative", link: "https://www.photopea.com/", icon: "https://www.photopea.com/favicon.ico" },
    { category: "Image Editing", name: "RawTherapee", description: "RAW image processing", link: "https://rawtherapee.com/", icon: "https://rawtherapee.com/favicon.ico" },
    { category: "Video Editing", name: "OpenShot", description: "Simple video editor", link: "https://www.openshot.org/", icon: "https://www.openshot.org/favicon.ico" },
    { category: "Video Editing", name: "DaVinci Resolve", description: "Pro video editing (free tier)", link: "https://www.blackmagicdesign.com/", icon: "https://www.blackmagicdesign.com/favicon.ico" },
    { category: "Video Editing", name: "Avidemux", description: "Basic video editing", link: "http://avidemux.sourceforge.net/", icon: "http://avidemux.sourceforge.net/favicon.ico" },
    { category: "Video Editing", name: "Lightworks", description: "Pro video editor (free tier)", link: "https://lwks.com/", icon: "https://lwks.com/favicon.ico" },
    { category: "Video Editing", name: "Flowblade", description: "Non-linear video editor", link: "https://jliljebl.github.io/flowblade/", icon: "https://jliljebl.github.io/favicon.ico" },
    { category: "Audio Editing", name: "Ardour", description: "Digital audio workstation", link: "https://ardour.org/", icon: "https://ardour.org/favicon.ico" },
    { category: "Audio Editing", name: "LMMS", description: "Music production tool", link: "https://lmms.io/", icon: "https://lmms.io/favicon.ico" },
    { category: "Audio Editing", name: "Qtractor", description: "Audio/MIDI sequencer", link: "https://qtractor.org/", icon: "https://qtractor.org/favicon.ico" },
    { category: "Audio Editing", name: "Mixxx", description: "DJ mixing software", link: "https://www.mixxx.org/", icon: "https://www.mixxx.org/favicon.ico" },
    { category: "Audio Editing", name: "Ocenaudio", description: "Easy audio editor", link: "https://www.ocenaudio.com/", icon: "https://www.ocenaudio.com/favicon.ico" },
    { category: "Web Browsers", name: "Brave", description: "Ad-blocking browser", link: "https://brave.com/", icon: "https://brave.com/favicon.ico" },
    { category: "Web Browsers", name: "Chromium", description: "Open-source Chrome base", link: "https://www.chromium.org/", icon: "https://www.chromium.org/favicon.ico" },
    { category: "Web Browsers", name: "Tor Browser", description: "Anonymous browsing", link: "https://www.torproject.org/", icon: "https://www.torproject.org/favicon.ico" },
    { category: "Web Browsers", name: "Midori", description: "Lightweight browser", link: "https://midori-browser.org/", icon: "https://midori-browser.org/favicon.ico" },
    { category: "Web Browsers", name: "Waterfox", description: "Privacy-focused Firefox fork", link: "https://www.waterfox.net/", icon: "https://www.waterfox.net/favicon.ico" },
    { category: "File Management", name: "Double Commander", description: "Dual-pane file manager", link: "https://doublecmd.sourceforge.io/", icon: "https://doublecmd.sourceforge.io/favicon.ico" },
    { category: "File Management", name: "FreeFileSync", description: "File synchronization", link: "https://freefilesync.org/", icon: "https://freefilesync.org/favicon.ico" },
    { category: "File Management", name: "Syncthing", description: "Peer-to-peer syncing", link: "https://syncthing.net/", icon: "https://syncthing.net/favicon.ico" },
    { category: "File Management", name: "WinDirStat", description: "Disk usage analyzer", link: "https://windirstat.net/", icon: "https://windirstat.net/favicon.ico" },
    { category: "File Management", name: "qBittorrent", description: "Free torrent client", link: "https://www.qbittorrent.org/", icon: "https://www.qbittorrent.org/favicon.ico" },
    { category: "Security & Privacy", name: "KeePassXC", description: "Password manager", link: "https://keepassxc.org/", icon: "https://keepassxc.org/favicon.ico" },
    { category: "Security & Privacy", name: "VeraCrypt", description: "Disk encryption", link: "https://www.veracrypt.fr/", icon: "https://www.veracrypt.fr/favicon.ico" },
    { category: "Security & Privacy", name: "ClamAV", description: "Antivirus engine", link: "https://www.clamav.net/", icon: "https://www.clamav.net/favicon.ico" },
    { category: "Security & Privacy", name: "OpenVPN", description: "Secure VPN", link: "https://openvpn.net/", icon: "https://openvpn.net/favicon.ico" },
    { category: "Security & Privacy", name: "GPG", description: "Encryption tool", link: "https://gnupg.org/", icon: "https://gnupg.org/favicon.ico" },
    { category: "Development Tools", name: "Eclipse", description: "Java IDE", link: "https://www.eclipse.org/", icon: "https://www.eclipse.org/favicon.ico" },
    { category: "Development Tools", name: "Apache NetBeans", description: "Multi-language IDE", link: "https://netbeans.apache.org/", icon: "https://netbeans.apache.org/favicon.ico" },
    { category: "Development Tools", name: "Code::Blocks", description: "C/C++ IDE", link: "https://www.codeblocks.org/", icon: "https://www.codeblocks.org/favicon.ico" },
    { category: "Development Tools", name: "Sublime Text", description: "Fast text editor (free tier)", link: "https://www.sublimetext.com/", icon: "https://www.sublimetext.com/favicon.ico" },
    { category: "Development Tools", name: "Geany", description: "Lightweight IDE", link: "https://www.geany.org/", icon: "https://www.geany.org/favicon.ico" },
    { category: "Miscellaneous", name: "OpenStreetMap", description: "Collaborative maps", link: "https://www.openstreetmap.org/", icon: "https://www.openstreetmap.org/favicon.ico" },
    { category: "Miscellaneous", name: "Tux Paint", description: "Drawing for kids", link: "https://www.tuxpaint.org/", icon: "https://www.tuxpaint.org/favicon.ico" },
    { category: "Miscellaneous", name: "Stellarium", description: "Planetarium software", link: "https://stellarium.org/", icon: "https://stellarium.org/favicon.ico" },
    { category: "Miscellaneous", name: "FreeCAD", description: "3D CAD design", link: "https://www.freecadweb.org/", icon: "https://www.freecadweb.org/favicon.ico" },
    { category: "Miscellaneous", name: "Kiwix", description: "Offline Wikipedia", link: "https://www.kiwix.org/", icon: "https://www.kiwix.org/favicon.ico" }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", ...new Set(softwareList.map(s => s.category))];
  const filteredList = softwareList.filter(software => {
    const matchesCategory = selectedCategory === "All" || software.category === selectedCategory;
    const matchesSearch = software.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="software-list">
          {filteredList.map((software) => (
            <div className="software-card" key={software.name}>
              <img src={software.icon} alt={`${software.name} icon`} className="software-icon" />
              <h3>{software.name}</h3>
              <p>{software.description}</p>
              <a href={software.link} target="_blank" rel="noopener noreferrer">Download</a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;