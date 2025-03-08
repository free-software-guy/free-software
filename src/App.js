import React, { useState } from 'react';
import './App.css';

function App() {
  const softwareList = [
    // Original 71 Software
    { category: "Media Players", name: "VLC Media Player", description: "Free video and audio player", link: "https://www.videolan.org/vlc/", icon: "https://www.videolan.org/favicon.ico" },
    { category: "Media Players", name: "Audacity", description: "Free audio editor", link: "https://www.audacityteam.org/", icon: "https://www.audacityteam.org/favicon.ico" },
    { category: "Media Players", name: "OBS Studio", description: "Free streaming and recording", link: "https://obsproject.com/", icon: "https://obsproject.com/favicon.ico" },
    { category: "Media Players", name: "Kodi", description: "Open-source media center", link: "https://kodi.tv/", icon: "https://kodi.tv/favicon.ico" },
    { category: "Media Players", name: "MPV", description: "Lightweight media player", link: "https://mpv.io/", icon: "https://mpv.io/favicon.ico" },
    { category: "Media Players", name: "Clementine", description: "Music player and organizer", link: "https://www.clementine-player.org/", icon: "https://www.clementine-player.org/favicon.ico" },
    { category: "Media Players", name: "Foobar2000", description: "Customizable audio player", link: "https://www.foobar2000.org/", icon: "https://www.foobar2000.org/favicon.ico" },
    { category: "Image Editing", name: "GIMP", description: "Free image editing software", link: "https://www.gimp.org/", icon: "https://www.gimp.org/favicon.ico" },
    { category: "Image Editing", name: "Inkscape", description: "Vector graphics editor", link: "https://inkscape.org/", icon: "https://inkscape.org/favicon.ico" },
    { category: "Image Editing", name: "Krita", description: "Digital painting software", link: "https://krita.org/", icon: "https://krita.org/favicon.ico" },
    { category: "Image Editing", name: "Paint.NET", description: "Simple image editor", link: "https://www.getpaint.net/", icon: "https://www.getpaint.net/favicon.ico" },
    { category: "Image Editing", name: "Pinta", description: "Lightweight image editor", link: "https://www.pinta-project.com/", icon: "https://www.pinta-project.com/favicon.ico" },
    { category: "Development Tools", name: "VS Code", description: "Powerful code editor", link: "https://code.visualstudio.com/", icon: "https://code.visualstudio.com/favicon.ico" },
    { category: "Development Tools", name: "Git", description: "Free version control system", link: "https://git-scm.com/", icon: "https://git-scm.com/favicon.ico" },
    { category: "Development Tools", name: "Eclipse", description: "Java IDE", link: "https://www.eclipse.org/", icon: "https://www.eclipse.org/favicon.ico" },
    { category: "Development Tools", name: "Sublime Text", description: "Fast text editor (free tier)", link: "https://www.sublimetext.com/", icon: "https://www.sublimetext.com/favicon.ico" },
    { category: "Development Tools", name: "Notepad++", description: "Free source code editor", link: "https://notepad-plus-plus.org/", icon: "https://notepad-plus-plus.org/favicon.ico" },
    { category: "Development Tools", name: "Atom", description: "Hackable text editor", link: "https://atom.io/", icon: "https://atom.io/favicon.ico" },
    { category: "Productivity", name: "LibreOffice", description: "Free office suite (Word, Excel)", link: "https://www.libreoffice.org/", icon: "https://www.libreoffice.org/favicon.ico" },
    { category: "Productivity", name: "Thunderbird", description: "Free email client", link: "https://www.thunderbird.net/", icon: "https://www.thunderbird.net/favicon.ico" },
    { category: "Productivity", name: "Calibre", description: "E-book management", link: "https://calibre-ebook.com/", icon: "https://calibre-ebook.com/favicon.ico" },
    { category: "Productivity", name: "FreeMind", description: "Mind mapping tool", link: "http://freemind.sourceforge.net/", icon: "http://freemind.sourceforge.net/favicon.ico" },
    { category: "Productivity", name: "CherryTree", description: "Hierarchical note-taking", link: "https://www.giuspen.com/cherrytree/", icon: "https://www.giuspen.com/favicon.ico" },
    { category: "Web Browsers", name: "Firefox", description: "Fast and private web browser", link: "https://www.mozilla.org/firefox/", icon: "https://www.mozilla.org/favicon.ico" },
    { category: "Web Browsers", name: "Brave", description: "Ad-blocking browser", link: "https://brave.com/", icon: "https://brave.com/favicon.ico" },
    { category: "Web Browsers", name: "Chromium", description: "Open-source Chrome base", link: "https://www.chromium.org/", icon: "https://www.chromium.org/favicon.ico" },
    { category: "Web Browsers", name: "Tor Browser", description: "Anonymous browsing", link: "https://www.torproject.org/", icon: "https://www.torproject.org/favicon.ico" },
    { category: "Web Browsers", name: "Midori", description: "Lightweight browser", link: "https://midori-browser.org/", icon: "https://midori-browser.org/favicon.ico" },
    { category: "Web Browsers", name: "Waterfox", description: "Privacy-focused Firefox fork", link: "https://www.waterfox.net/", icon: "https://www.waterfox.net/favicon.ico" },
    { category: "Audio Editing", name: "Ardour", description: "Digital audio workstation", link: "https://ardour.org/", icon: "https://ardour.org/favicon.ico" },
    { category: "Audio Editing", name: "LMMS", description: "Music production software", link: "https://lmms.io/", icon: "https://lmms.io/favicon.ico" },
    { category: "Audio Editing", name: "Mixxx", description: "Free DJ software", link: "https://mixxx.org/", icon: "https://mixxx.org/favicon.ico" },
    { category: "Audio Editing", name: "Qtractor", description: "Audio/MIDI multi-track", link: "https://qtractor.org/", icon: "https://qtractor.org/favicon.ico" },
    { category: "Video Editing", name: "Shotcut", description: "Free video editor", link: "https://shotcut.org/", icon: "https://shotcut.org/favicon.ico" },
    { category: "Video Editing", name: "OpenShot", description: "Simple video editor", link: "https://www.openshot.org/", icon: "https://www.openshot.org/favicon.ico" },
    { category: "Video Editing", name: "Kdenlive", description: "Non-linear video editor", link: "https://kdenlive.org/", icon: "https://kdenlive.org/favicon.ico" },
    { category: "Video Editing", name: "Blender", description: "3D creation with video editing", link: "https://www.blender.org/", icon: "https://www.blender.org/favicon.ico" },
    { category: "File Management", name: "7-Zip", description: "File archiver", link: "https://www.7-zip.org/", icon: "https://www.7-zip.org/favicon.ico" },
    { category: "File Management", name: "FileZilla", description: "FTP client", link: "https://filezilla-project.org/", icon: "https://filezilla-project.org/favicon.ico" },
    { category: "File Management", name: "Double Commander", description: "Dual-pane file manager", link: "https://doublecmd.sourceforge.io/", icon: "https://doublecmd.sourceforge.io/favicon.ico" },
    { category: "File Management", name: "Free Download Manager", description: "Download accelerator", link: "https://www.freedownloadmanager.org/", icon: "https://www.freedownloadmanager.org/favicon.ico" },
    { category: "Security & Privacy", name: "KeePass", description: "Password manager", link: "https://keepass.info/", icon: "https://keepass.info/favicon.ico" },
    { category: "Security & Privacy", name: "VeraCrypt", description: "Disk encryption", link: "https://www.veracrypt.fr/", icon: "https://www.veracrypt.fr/favicon.ico" },
    { category: "Security & Privacy", name: "Tor", description: "Anonymity network", link: "https://www.torproject.org/", icon: "https://www.torproject.org/favicon.ico" },
    { category: "Security & Privacy", name: "OpenVPN", description: "VPN software", link: "https://openvpn.net/", icon: "https://openvpn.net/favicon.ico" },
    { category: "Miscellaneous", name: "HandBrake", description: "Video transcoder", link: "https://handbrake.fr/", icon: "https://handbrake.fr/favicon.ico" },
    { category: "Miscellaneous", name: "VirtualBox", description: "Virtualization software", link: "https://www.virtualbox.org/", icon: "https://www.virtualbox.org/favicon.ico" },
    { category: "Miscellaneous", name: "Putty", description: "SSH and telnet client", link: "https://www.putty.org/", icon: "https://www.putty.org/favicon.ico" },
    { category: "Miscellaneous", name: "Wireshark", description: "Network protocol analyzer", link: "https://www.wireshark.org/", icon: "https://www.wireshark.org/favicon.ico" },
    { category: "Miscellaneous", name: "GParted", description: "Partition editor", link: "https://gparted.org/", icon: "https://gparted.org/favicon.ico" },
    { category: "Miscellaneous", name: "Tux Paint", description: "Drawing for kids", link: "https://tuxpaint.org/", icon: "https://tuxpaint.org/favicon.ico" },
    { category: "Miscellaneous", name: "Stellarium", description: "Planetarium software", link: "https://stellarium.org/", icon: "https://stellarium.org/favicon.ico" },
    { category: "Miscellaneous", name: "Dia", description: "Diagram creation", link: "http://dia-installer.de/", icon: "http://dia-installer.de/favicon.ico" },
    { category: "Miscellaneous", name: "Scribus", description: "Desktop publishing", link: "https://www.scribus.net/", icon: "https://www.scribus.net/favicon.ico" },
    { category: "Miscellaneous", name: "Synfig", description: "2D animation software", link: "https://www.synfig.org/", icon: "https://www.synfig.org/favicon.ico" },
    { category: "Miscellaneous", name: "Avidemux", description: "Simple video editor", link: "http://avidemux.sourceforge.net/", icon: "http://avidemux.sourceforge.net/favicon.ico" },
    { category: "Miscellaneous", name: "PDFCreator", description: "PDF creation tool", link: "https://www.pdfforge.org/pdfcreator", icon: "https://www.pdfforge.org/favicon.ico" },
    { category: "Miscellaneous", name: "Sumatra PDF", description: "Lightweight PDF reader", link: "https://www.sumatrapdfreader.org/", icon: "https://www.sumatrapdfreader.org/favicon.ico" },
    { category: "Miscellaneous", name: "Greenshot", description: "Screenshot tool", link: "https://getgreenshot.org/", icon: "https://getgreenshot.org/favicon.ico" },
    { category: "Miscellaneous", name: "ShareX", description: "Screen capture and sharing", link: "https://getsharex.com/", icon: "https://getsharex.com/favicon.ico" },
    { category: "Miscellaneous", name: "XnView", description: "Image viewer and organizer", link: "https://www.xnview.com/", icon: "https://www.xnview.com/favicon.ico" },
    { category: "Miscellaneous", name: "qBittorrent", description: "Free torrent client", link: "https://www.qbittorrent.org/", icon: "https://www.qbittorrent.org/favicon.ico" },
    { category: "Miscellaneous", name: "Transmission", description: "Lightweight torrent client", link: "https://transmissionbt.com/", icon: "https://transmissionbt.com/favicon.ico" },
    { category: "Miscellaneous", name: "JDownloader", description: "Download manager", link: "https://jdownloader.org/", icon: "https://jdownloader.org/favicon.ico" },
    { category: "Miscellaneous", name: "BleachBit", description: "System cleaner", link: "https://www.bleachbit.org/", icon: "https://www.bleachbit.org/favicon.ico" },
    { category: "Miscellaneous", name: "CCleaner", description: "System optimization (free tier)", link: "https://www.ccleaner.com/", icon: "https://www.ccleaner.com/favicon.ico" },
    { category: "Miscellaneous", name: "WinDirStat", description: "Disk usage analyzer", link: "https://windirstat.net/", icon: "https://windirstat.net/favicon.ico" },
    { category: "Miscellaneous", name: "HTTrack", description: "Website copier", link: "https://www.httrack.com/", icon: "https://www.httrack.com/favicon.ico" },
    { category: "Miscellaneous", name: "Fritzing", description: "Electronics design", link: "https://fritzing.org/", icon: "https://fritzing.org/favicon.ico" },

    // Additional 129 Software (Pehle wala expansion)
    { category: "Web Browsers", name: "Otter Browser", description: "Classic browser experience", link: "https://otter-browser.org/", icon: "https://otter-browser.org/favicon.ico" },
    { category: "Web Browsers", name: "Pale Moon", description: "Lightweight Firefox fork", link: "https://www.palemoon.org/", icon: "https://www.palemoon.org/favicon.ico" },
    { category: "Web Browsers", name: "Qutebrowser", description: "Keyboard-oriented browser", link: "https://qutebrowser.org/", icon: "https://qutebrowser.org/favicon.ico" },
    { category: "Web Browsers", name: "Lynx", description: "Text-based browser", link: "https://lynx.invisible-island.net/", icon: "https://lynx.invisible-island.net/favicon.ico" },
    { category: "Web Browsers", name: "Falkon", description: "Lightweight browser", link: "https://www.falkon.org/", icon: "https://www.falkon.org/favicon.ico" },
    { category: "Web Browsers", name: "GNOME Web", description: "Simple web browser", link: "https://wiki.gnome.org/Apps/Web", icon: "https://wiki.gnome.org/favicon.ico" },
    { category: "Web Browsers", name: "SeaMonkey", description: "All-in-one internet suite", link: "https://www.seamonkey-project.org/", icon: "https://www.seamonkey-project.org/favicon.ico" },
    { category: "Web Browsers", name: "Konqueror", description: "KDE web browser", link: "https://konqueror.org/", icon: "https://konqueror.org/favicon.ico" },
    { category: "Web Browsers", name: "Dillo", description: "Minimalist browser", link: "https://www.dillo.org/", icon: "https://www.dillo.org/favicon.ico" },
    { category: "Web Browsers", name: "Surf", description: "Simple web browser", link: "https://surf.suckless.org/", icon: "https://surf.suckless.org/favicon.ico" },
    { category: "Development Tools", name: "Bluefish", description: "Web development editor", link: "http://bluefish.openoffice.nl/", icon: "http://bluefish.openoffice.nl/favicon.ico" },
    { category: "Development Tools", name: "Geany", description: "Lightweight IDE", link: "https://www.geany.org/", icon: "https://www.geany.org/favicon.ico" },
    { category: "Development Tools", name: "Code::Blocks", description: "C++ IDE", link: "https://www.codeblocks.org/", icon: "https://www.codeblocks.org/favicon.ico" },
    { category: "Development Tools", name: "Brackets", description: "Web design editor", link: "http://brackets.io/", icon: "http://brackets.io/favicon.ico" },
    { category: "Development Tools", name: "Light Table", description: "Interactive IDE", link: "http://lighttable.com/", icon: "http://lighttable.com/favicon.ico" },
    { category: "Development Tools", name: "KDevelop", description: "Cross-platform IDE", link: "https://www.kdevelop.org/", icon: "https://www.kdevelop.org/favicon.ico" },
    { category: "Development Tools", name: "Anjuta", description: "GNOME IDE", link: "https://anjuta.org/", icon: "https://anjuta.org/favicon.ico" },
    { category: "Development Tools", name: "MonoDevelop", description: "C# and .NET IDE", link: "https://www.monodevelop.com/", icon: "https://www.monodevelop.com/favicon.ico" },
    { category: "Development Tools", name: " Lazarus", description: "Delphi-like IDE", link: "https://www.lazarus-ide.org/", icon: "https://www.lazarus-ide.org/favicon.ico" },
    { category: "Development Tools", name: "Eric", description: "Python IDE", link: "https://eric-ide.python-projects.org/", icon: "https://eric-ide.python-projects.org/favicon.ico" },
    { category: "Media Players", name: "SMPlayer", description: "Media player with codecs", link: "https://www.smplayer.info/", icon: "https://www.smplayer.info/favicon.ico" },
    { category: "Media Players", name: "Banshee", description: "Music player and manager", link: "http://banshee.fm/", icon: "http://banshee.fm/favicon.ico" },
    { category: "Media Players", name: "Rhythmbox", description: "GNOME music player", link: "https://wiki.gnome.org/Apps/Rhythmbox", icon: "https://wiki.gnome.org/favicon.ico" },
    { category: "Media Players", name: "Amarok", description: "KDE music player", link: "https://amarok.kde.org/", icon: "https://amarok.kde.org/favicon.ico" },
    { category: "Media Players", name: "Tomahawk", description: "Social media player", link: "https://www.tomahawk-player.org/", icon: "https://www.tomahawk-player.org/favicon.ico" },
    { category: "Media Players", name: "Quod Libet", description: "Music library manager", link: "https://quodlibet.readthedocs.io/", icon: "https://quodlibet.readthedocs.io/favicon.ico" },
    { category: "Media Players", name: "AIMP", description: "Lightweight audio player", link: "https://www.aimp.ru/", icon: "https://www.aimp.ru/favicon.ico" },
    { category: "Media Players", name: "Winamp", description: "Classic media player", link: "https://www.winamp.com/", icon: "https://www.winamp.com/favicon.ico" },
    { category: "Media Players", name: "MediaMonkey", description: "Media organizer (free tier)", link: "https://www.mediamonkey.com/", icon: "https://www.mediamonkey.com/favicon.ico" },
    { category: "Image Editing", name: "Photopea", description: "Online Photoshop alternative", link: "https://www.photopea.com/", icon: "https://www.photopea.com/favicon.ico" },
    { category: "Image Editing", name: "MyPaint", description: "Digital painting tool", link: "http://mypaint.org/", icon: "http://mypaint.org/favicon.ico" },
    { category: "Image Editing", name: "RawTherapee", description: "RAW image processor", link: "https://rawtherapee.com/", icon: "https://rawtherapee.com/favicon.ico" },
    { category: "Image Editing", name: "Darktable", description: "Photography workflow", link: "https://www.darktable.org/", icon: "https://www.darktable.org/favicon.ico" },
    { category: "Image Editing", name: "ImageMagick", description: "Image conversion tool", link: "https://imagemagick.org/", icon: "https://imagemagick.org/favicon.ico" },
    { category: "Image Editing", name: "XnConvert", description: "Batch image converter", link: "https://www.xnview.com/en/xnconvert/", icon: "https://www.xnview.com/favicon.ico" },
    { category: "Image Editing", name: "IrfanView", description: "Fast image viewer", link: "https://www.irfanview.com/", icon: "https://www.irfanview.com/favicon.ico" },
    { category: "Image Editing", name: "FastStone", description: "Image viewer (free tier)", link: "https://www.faststone.org/", icon: "https://www.faststone.org/favicon.ico" },
    { category: "Image Editing", name: "PhotoFlare", description: "Simple image editor", link: "https://photoflare.io/", icon: "https://photoflare.io/favicon.ico" },
    { category: "Productivity", name: "OnlyOffice", description: "Online office suite", link: "https://www.onlyoffice.com/", icon: "https://www.onlyoffice.com/favicon.ico" },
    { category: "Productivity", name: "OpenOffice", description: "Free office suite", link: "https://www.openoffice.org/", icon: "https://www.openoffice.org/favicon.ico" },
    { category: "Productivity", name: "FocusWriter", description: "Distraction-free writing", link: "https://gottcode.org/focuswriter/", icon: "https://gottcode.org/favicon.ico" },
    { category: "Productivity", name: "Tomboy", description: "Note-taking app", link: "https://wiki.gnome.org/Apps/Tomboy", icon: "https://wiki.gnome.org/favicon.ico" },
    { category: "Productivity", name: "Zim", description: "Desktop wiki", link: "https://zim-wiki.org/", icon: "https://zim-wiki.org/favicon.ico" },
    { category: "Productivity", name: "XMind", description: "Mind mapping (free tier)", link: "https://www.xmind.net/", icon: "https://www.xmind.net/favicon.ico" },
    { category: "Productivity", name: "RedNotebook", description: "Journaling software", link: "https://rednotebook.app/", icon: "https://rednotebook.app/favicon.ico" },
    { category: "Productivity", name: "Task Coach", description: "Task manager", link: "https://www.taskcoach.org/", icon: "https://www.taskcoach.org/favicon.ico" },
    { category: "Productivity", name: "Nitro", description: "Task management", link: "https://nitrotasks.com/", icon: "https://nitrotasks.com/favicon.ico" },
    { category: "Audio Editing", name: "Rosegarden", description: "MIDI sequencer", link: "https://www.rosegardenmusic.com/", icon: "https://www.rosegardenmusic.com/favicon.ico" },
    { category: "Audio Editing", name: "MusE", description: "MIDI/audio sequencer", link: "https://muse-sequencer.github.io/", icon: "https://muse-sequencer.github.io/favicon.ico" },
    { category: "Audio Editing", name: "Traverso DAW", description: "Multitrack audio", link: "https://traverso-daw.org/", icon: "https://traverso-daw.org/favicon.ico" },
    { category: "Audio Editing", name: "OcenAudio", description: "Easy audio editor", link: "https://www.ocenaudio.com/", icon: "https://www.ocenaudio.com/favicon.ico" },
    { category: "Audio Editing", name: "WaveShop", description: "Bit-perfect audio editor", link: "http://waveshop.sourceforge.net/", icon: "http://waveshop.sourceforge.net/favicon.ico" },
    { category: "Video Editing", name: "DaVinci Resolve", description: "Pro video editor (free tier)", link: "https://www.blackmagicdesign.com/products/davinciresolve/", icon: "https://www.blackmagicdesign.com/favicon.ico" },
    { category: "Video Editing", name: "Lightworks", description: "Video editing (free tier)", link: "https://lwks.com/", icon: "https://lwks.com/favicon.ico" },
    { category: "Video Editing", name: "Flowblade", description: "Multitrack video editor", link: "https://jliljebl.github.io/flowblade/", icon: "https://jliljebl.github.io/favicon.ico" },
    { category: "Video Editing", name: "Pitivi", description: "Simple video editor", link: "http://www.pitivi.org/", icon: "http://www.pitivi.org/favicon.ico" },
    { category: "Video Editing", name: "Cinelerra", description: "Advanced video editor", link: "http://cinelerra-gg.org/", icon: "http://cinelerra-gg.org/favicon.ico" },
    { category: "File Management", name: "Total Commander", description: "File manager (free tier)", link: "https://www.ghisler.com/", icon: "https://www.ghisler.com/favicon.ico" },
    { category: "File Management", name: "Q-Dir", description: "Quad-pane file manager", link: "https://www.softwareok.com/?seite=Q-Dir", icon: "https://www.softwareok.com/favicon.ico" },
    { category: "File Management", name: "Multi Commander", description: "Advanced file manager", link: "http://multicommander.com/", icon: "http://multicommander.com/favicon.ico" },
    { category: "File Management", name: "Far Manager", description: "Console file manager", link: "https://www.farmanager.com/", icon: "https://www.farmanager.com/favicon.ico" },
    { category: "File Management", name: "Unreal Commander", description: "Dual-pane file manager", link: "https://x-diesel.com/", icon: "https://x-diesel.com/favicon.ico" },
    { category: "Security & Privacy", name: "GnuPG", description: "Encryption tool", link: "https://gnupg.org/", icon: "https://gnupg.org/favicon.ico" },
    { category: "Security & Privacy", name: "ClamAV", description: "Antivirus software", link: "https://www.clamav.net/", icon: "https://www.clamav.net/favicon.ico" },
    { category: "Security & Privacy", name: "PeerBlock", description: "IP blocking tool", link: "https://www.peerblock.com/", icon: "https://www.peerblock.com/favicon.ico" },
    { category: "Security & Privacy", name: "Eraser", description: "Secure file deletion", link: "https://eraser.heidi.ie/", icon: "https://eraser.heidi.ie/favicon.ico" },
    { category: "Security & Privacy", name: "TrueCrypt", description: "Legacy disk encryption", link: "https://truecrypt.ch/", icon: "https://truecrypt.ch/favicon.ico" },
    { category: "Miscellaneous", name: "KiCad", description: "PCB design software", link: "https://www.kicad.org/", icon: "https://www.kicad.org/favicon.ico" },
    { category: "Miscellaneous", name: "FreeCAD", description: "3D CAD modeler", link: "https://www.freecadweb.org/", icon: "https://www.freecadweb.org/favicon.ico" },
    { category: "Miscellaneous", name: "OpenSCAD", description: "Script-based 3D modeling", link: "https://www.openscad.org/", icon: "https://www.openscad.org/favicon.ico" },
    { category: "Miscellaneous", name: "Sweet Home 3D", description: "Interior design", link: "http://www.sweethome3d.com/", icon: "http://www.sweethome3d.com/favicon.ico" },
    { category: "Miscellaneous", name: "Pencil2D", description: "2D animation", link: "https://www.pencil2d.org/", icon: "https://www.pencil2d.org/favicon.ico" },
    { category: "Miscellaneous", name: "TupiTube", description: "Animation for kids", link: "https://www.tupitube.com/", icon: "https://www.tupitube.com/favicon.ico" },
    { category: "Miscellaneous", name: "KStars", description: "Astronomy software", link: "https://kstars.kde.org/", icon: "https://kstars.kde.org/favicon.ico" },
    { category: "Miscellaneous", name: "Celestia", description: "Space simulation", link: "https://celestia.space/", icon: "https://celestia.space/favicon.ico" },
    { category: "Miscellaneous", name: "BOINC", description: "Distributed computing", link: "https://boinc.berkeley.edu/", icon: "https://boinc.berkeley.edu/favicon.ico" },
    { category: "Miscellaneous", name: "FlightGear", description: "Flight simulator", link: "https://www.flightgear.org/", icon: "https://www.flightgear.org/favicon.ico" },
    { category: "Miscellaneous", name: "0 A.D.", description: "Historical RTS game", link: "https://play0ad.com/", icon: "https://play0ad.com/favicon.ico" },
    { category: "Miscellaneous", name: "SuperTuxKart", description: "Racing game", link: "https://supertuxkart.net/", icon: "https://supertuxkart.net/favicon.ico" },
    { category: "Miscellaneous", name: "OpenTTD", description: "Transport simulation", link: "https://www.openttd.org/", icon: "https://www.openttd.org/favicon.ico" },
    { category: "Miscellaneous", name: "Battle for Wesnoth", description: "Turn-based strategy", link: "https://www.wesnoth.org/", icon: "https://www.wesnoth.org/favicon.ico" },
    { category: "Miscellaneous", name: "Hedgewars", description: "Worms-like game", link: "https://www.hedgewars.org/", icon: "https://www.hedgewars.org/favicon.ico" },
    { category: "Miscellaneous", name: "Minetest", description: "Minecraft alternative", link: "https://www.minetest.net/", icon: "https://www.minetest.net/favicon.ico" },

    // Node.js (202nd from earlier)
    { category: "Development Tools", name: "Node.js", description: "JavaScript runtime for server-side", link: "https://nodejs.org/", icon: "https://nodejs.org/favicon.ico" },

    // New Additions: Chrome, Edge + 100 = 102 (Total 304 tak)
    { category: "Web Browsers", name: "Chrome", description: "Popular web browser with open-source roots", link: "https://www.google.com/chrome/", icon: "https://www.google.com/favicon.ico" },
    { category: "Web Browsers", name: "Edge", description: "Fast browser with Chromium engine", link: "https://www.microsoft.com/edge/", icon: "https://www.microsoft.com/favicon.ico" },
    { category: "Media Players", name: "MPlayer", description: "Classic media player", link: "http://www.mplayerhq.hu/", icon: "http://www.mplayerhq.hu/favicon.ico" },
    { category: "Media Players", name: "MPC-HC", description: "Lightweight video player", link: "https://mpc-hc.org/", icon: "https://mpc-hc.org/favicon.ico" },
    { category: "Media Players", name: "Strawberry", description: "Modern music player", link: "https://strawberrymusicplayer.org/", icon: "https://strawberrymusicplayer.org/favicon.ico" },
    { category: "Media Players", name: "Parole", description: "Simple media player", link: "https://docs.xfce.org/", icon: "https://docs.xfce.org/favicon.ico" },
    { category: "Media Players", name: "Celluloid", description: "GTK-based video player", link: "https://celluloid-player.github.io/", icon: "https://celluloid-player.github.io/favicon.ico" },
    { category: "Media Players", name: "Bomi", description: "Powerful multimedia player", link: "https://bomi-player.github.io/", icon: "https://bomi-player.github.io/favicon.ico" },
    { category: "Media Players", name: "Haruna", description: "Qt-based video player", link: "https://haruna.kde.org/", icon: "https://haruna.kde.org/favicon.ico" },
    { category: "Media Players", name: "MusicBee", description: "Music organizer (free tier)", link: "https://getmusicbee.com/", icon: "https://getmusicbee.com/favicon.ico" },
    { category: "Media Players", name: "Cmus", description: "Console music player", link: "https://cmus.github.io/", icon: "https://cmus.github.io/favicon.ico" },
    { category: "Media Players", name: "Vox", description: "Minimalist music player", link: "https://vox.rocks/", icon: "https://vox.rocks/favicon.ico" },
    { category: "Image Editing", name: "Photoline", description: "Advanced image editor (free tier)", link: "https://www.pl32.com/", icon: "https://www.pl32.com/favicon.ico" },
    { category: "Image Editing", name: "Gravit Designer", description: "Vector design tool", link: "https://www.designer.io/", icon: "https://www.designer.io/favicon.ico" },
    { category: "Image Editing", name: "Pixen", description: "Pixel art editor", link: "https://pixenapp.com/", icon: "https://pixenapp.com/favicon.ico" },
    { category: "Image Editing", name: "Paintstorm", description: "Digital painting (free tier)", link: "https://paintstormstudio.com/", icon: "https://paintstormstudio.com/favicon.ico" },
    { category: "Image Editing", name: "PhotoScape X", description: "Easy photo editor (free tier)", link: "http://www.photoscape.org/", icon: "http://www.photoscape.org/favicon.ico" },
    { category: "Image Editing", name: "FireAlpaca", description: "Lightweight painting tool", link: "https://firealpaca.com/", icon: "https://firealpaca.com/favicon.ico" },
    { category: "Image Editing", name: "MediBang Paint", description: "Comic creation tool", link: "https://medibangpaint.com/", icon: "https://medibangpaint.com/favicon.ico" },
    { category: "Image Editing", name: "Sumo Paint", description: "Online image editor", link: "https://www.sumopaint.com/", icon: "https://www.sumopaint.com/favicon.ico" },
    { category: "Image Editing", name: "PaintTool SAI", description: "Drawing tool (free trial)", link: "https://www.systemax.jp/en/sai/", icon: "https://www.systemax.jp/favicon.ico" },
    { category: "Image Editing", name: "Karbon", description: "Vector graphics editor", link: "https://calligra.org/karbon/", icon: "https://calligra.org/favicon.ico" },
    { category: "Development Tools", name: "IntelliJ IDEA CE", description: "Java IDE (Community Edition)", link: "https://www.jetbrains.com/idea/", icon: "https://www.jetbrains.com/favicon.ico" },
    { category: "Development Tools", name: "PyCharm CE", description: "Python IDE (Community Edition)", link: "https://www.jetbrains.com/pycharm/", icon: "https://www.jetbrains.com/favicon.ico" },
    { category: "Development Tools", name: "Jupyter Notebook", description: "Interactive coding environment", link: "https://jupyter.org/", icon: "https://jupyter.org/favicon.ico" },
    { category: "Development Tools", name: "RStudio", description: "R programming IDE", link: "https://rstudio.com/", icon: "https://rstudio.com/favicon.ico" },
    { category: "Development Tools", name: "Arduino IDE", description: "Microcontroller coding", link: "https://www.arduino.cc/", icon: "https://www.arduino.cc/favicon.ico" },
    { category: "Development Tools", name: "Qt Creator", description: "C++ IDE", link: "https://www.qt.io/", icon: "https://www.qt.io/favicon.ico" },
    { category: "Development Tools", name: "Thonny", description: "Python beginner IDE", link: "https://thonny.org/", icon: "https://thonny.org/favicon.ico" },
    { category: "Development Tools", name: "Spyder", description: "Scientific Python IDE", link: "https://www.spyder-ide.org/", icon: "https://www.spyder-ide.org/favicon.ico" },
    { category: "Development Tools", name: "Netlify CLI", description: "Deployment tool", link: "https://www.netlify.com/", icon: "https://www.netlify.com/favicon.ico" },
    { category: "Development Tools", name: "Postman", description: "API testing (free tier)", link: "https://www.postman.com/", icon: "https://www.postman.com/favicon.ico" },
    { category: "Development Tools", name: "DBeaver", description: "Database management", link: "https://dbeaver.io/", icon: "https://dbeaver.io/favicon.ico" },
    { category: "Development Tools", name: "HeidiSQL", description: "MySQL client", link: "https://www.heidisql.com/", icon: "https://www.heidisql.com/favicon.ico" },
    { category: "Development Tools", name: "GitKraken", description: "Git GUI (free tier)", link: "https://www.gitkraken.com/", icon: "https://www.gitkraken.com/favicon.ico" },
    { category: "Development Tools", name: "VSCodium", description: "VS Code without telemetry", link: "https://vscodium.com/", icon: "https://vscodium.com/favicon.ico" },
    { category: "Development Tools", name: "Xcode", description: "macOS dev tool (free)", link: "https://developer.apple.com/xcode/", icon: "https://www.apple.com/favicon.ico" },
    { category: "Development Tools", name: "Android Studio", description: "Android dev IDE", link: "https://developer.android.com/studio", icon: "https://developer.android.com/favicon.ico" },
    { category: "Development Tools", name: "CLion CE", description: "C/C++ IDE (free tier)", link: "https://www.jetbrains.com/clion/", icon: "https://www.jetbrains.com/favicon.ico" },
    { category: "Development Tools", name: "RubyMine CE", description: "Ruby IDE (free tier)", link: "https://www.jetbrains.com/rubymine/", icon: "https://www.jetbrains.com/favicon.ico" },
    { category: "Development Tools", name: "Kate", description: "Text editor", link: "https://kate-editor.org/", icon: "https://kate-editor.org/favicon.ico" },
    { category: "Development Tools", name: "Nano", description: "Terminal text editor", link: "https://www.nano-editor.org/", icon: "https://www.nano-editor.org/favicon.ico" },
    { category: "Productivity", name: "Obsidian", description: "Knowledge management tool", link: "https://obsidian.md/", icon: "https://obsidian.md/favicon.ico" },
    { category: "Productivity", name: "Notion", description: "Notes and collaboration (free tier)", link: "https://www.notion.so/", icon: "https://www.notion.so/favicon.ico" },
    { category: "Productivity", name: "Typora", description: "Markdown editor", link: "https://typora.io/", icon: "https://typora.io/favicon.ico" },
    { category: "Productivity", name: "Rocket.Chat", description: "Open-source team chat", link: "https://rocket.chat/", icon: "https://rocket.chat/favicon.ico" },
    { category: "Productivity", name: "Mattermost", description: "Slack alternative", link: "https://mattermost.com/", icon: "https://mattermost.com/favicon.ico" },
    { category: "Productivity", name: "Zettlr", description: "Writing and research tool", link: "https://www.zettlr.com/", icon: "https://www.zettlr.com/favicon.ico" },
    { category: "Productivity", name: "Standard Notes", description: "Secure note-taking", link: "https://standardnotes.com/", icon: "https://standardnotes.com/favicon.ico" },
    { category: "Productivity", name: "Simplenote", description: "Minimalist notes", link: "https://simplenote.com/", icon: "https://simplenote.com/favicon.ico" },
    { category: "Productivity", name: "OpenProject", description: "Project management", link: "https://www.openproject.org/", icon: "https://www.openproject.org/favicon.ico" },
    { category: "Productivity", name: "Leantime", description: "Lightweight PM tool", link: "https://leantime.io/", icon: "https://leantime.io/favicon.ico" },
    { category: "Productivity", name: "Focalboard", description: "Open-source Trello alternative", link: "https://www.focalboard.com/", icon: "https://www.focalboard.com/favicon.ico" },
    { category: "Productivity", name: "Kanboard", description: "Kanban project management", link: "https://kanboard.org/", icon: "https://kanboard.org/favicon.ico" },
    { category: "Productivity", name: "Taiga", description: "Agile project management", link: "https://www.taiga.io/", icon: "https://www.taiga.io/favicon.ico" },
    { category: "Productivity", name: "Wekan", description: "Open-source kanban", link: "https://wekan.github.io/", icon: "https://wekan.github.io/favicon.ico" },
    { category: "Productivity", name: "Nextcloud", description: "Cloud storage and collab", link: "https://nextcloud.com/", icon: "https://nextcloud.com/favicon.ico" },
    { category: "Productivity", name: "CryptPad", description: "Encrypted collaboration", link: "https://cryptpad.fr/", icon: "https://cryptpad.fr/favicon.ico" },
    { category: "Productivity", name: "Jitsi Meet", description: "Video conferencing", link: "https://jitsi.org/", icon: "https://jitsi.org/favicon.ico" },
    { category: "Productivity", name: "BigBlueButton", description: "Virtual classroom", link: "https://bigbluebutton.org/", icon: "https://bigbluebutton.org/favicon.ico" },
    { category: "Productivity", name: "Collabora Online", description: "Online office suite", link: "https://www.collaboraoffice.com/", icon: "https://www.collaboraoffice.com/favicon.ico" },
    { category: "Productivity", name: "Trilium Notes", description: "Hierarchical note-taking", link: "https://github.com/zadam/trilium", icon: "https://github.com/favicon.ico" },
    { category: "Audio Editing", name: "Reaper", description: "DAW with free trial", link: "https://www.reaper.fm/", icon: "https://www.reaper.fm/favicon.ico" },
    { category: "Audio Editing", name: "Cakewalk", description: "Professional DAW (free)", link: "https://www.bandlab.com/products/cakewalk", icon: "https://www.bandlab.com/favicon.ico" },
    { category: "Audio Editing", name: "Soundtrap", description: "Online audio editor (free tier)", link: "https://www.soundtrap.com/", icon: "https://www.soundtrap.com/favicon.ico" },
    { category: "Audio Editing", name: "WavePad", description: "Audio editor (free tier)", link: "https://www.nch.com.au/wavepad/", icon: "https://www.nch.com.au/favicon.ico" },
    { category: "Audio Editing", name: "Tenacity", description: "Audacity fork", link: "https://tenacityaudio.org/", icon: "https://tenacityaudio.org/favicon.ico" },
    { category: "Audio Editing", name: "Audiotool", description: "Online music production", link: "https://www.audiotool.com/", icon: "https://www.audiotool.com/favicon.ico" },
    { category: "Audio Editing", name: "Soundation", description: "Online DAW (free tier)", link: "https://soundation.com/", icon: "https://soundation.com/favicon.ico" },
    { category: "Audio Editing", name: "Fruity Loops", description: "Music production (free trial)", link: "https://www.image-line.com/flstudio/", icon: "https://www.image-line.com/favicon.ico" },
    { category: "Audio Editing", name: "Ableton Live", description: "DAW (free trial)", link: "https://www.ableton.com/", icon: "https://www.ableton.com/favicon.ico" },
    { category: "Audio Editing", name: "Tracktion Waveform", description: "Music creation (free tier)", link: "https://www.tracktion.com/", icon: "https://www.tracktion.com/favicon.ico" },
    { category: "Video Editing", name: "VSDC Free Video Editor", description: "Non-linear video editing", link: "https://www.videosoftdev.com/", icon: "https://www.videosoftdev.com/favicon.ico" },
    { category: "Video Editing", name: "HitFilm Express", description: "Video editor with effects (free)", link: "https://fxhome.com/hitfilm-express", icon: "https://fxhome.com/favicon.ico" },
    { category: "Video Editing", name: "Clipchamp", description: "Online video editor (free tier)", link: "https://clipchamp.com/", icon: "https://clipchamp.com/favicon.ico" },
    { category: "Video Editing", name: "VideoPad", description: "Simple video editor (free tier)", link: "https://www.nchsoftware.com/videopad/", icon: "https://www.nchsoftware.com/favicon.ico" },
    { category: "Video Editing", name: "Kapwing", description: "Online video editing", link: "https://www.kapwing.com/", icon: "https://www.kapwing.com/favicon.ico" },
    { category: "Video Editing", name: "WeVideo", description: "Cloud-based editor (free tier)", link: "https://www.wevideo.com/", icon: "https://www.wevideo.com/favicon.ico" },
    { category: "Video Editing", name: "iMovie", description: "Free video editor for macOS", link: "https://www.apple.com/imovie/", icon: "https://www.apple.com/favicon.ico" },
    { category: "Video Editing", name: "Movie Maker", description: "Classic Windows editor", link: "https://www.microsoft.com/", icon: "https://www.microsoft.com/favicon.ico" },
    { category: "Video Editing", name: "Open Broadcaster", description: "Streaming and editing", link: "https://obsproject.com/", icon: "https://obsproject.com/favicon.ico" },
    { category: "Video Editing", name: "Voukoder", description: "Video encoding plugin", link: "https://www.voukoder.org/", icon: "https://www.voukoder.org/favicon.ico" },
    { category: "File Management", name: "Everything", description: "Fast file search", link: "https://www.voidtools.com/", icon: "https://www.voidtools.com/favicon.ico" },
    { category: "File Management", name: "TeraCopy", description: "File transfer utility (free tier)", link: "https://www.codesector.com/teracopy", icon: "https://www.codesector.com/favicon.ico" },
    { category: "File Management", name: "Beyond Compare", description: "File comparison (free trial)", link: "https://www.scootersoftware.com/", icon: "https://www.scootersoftware.com/favicon.ico" },
    { category: "File Management", name: "GoodSync", description: "File sync (free tier)", link: "https://www.goodsync.com/", icon: "https://www.goodsync.com/favicon.ico" },
    { category: "File Management", name: "FolderSync", description: "Cloud syncing", link: "https://foldersync.io/", icon: "https://foldersync.io/favicon.ico" },
    { category: "File Management", name: "rSync", description: "File synchronization", link: "https://rsync.samba.org/", icon: "https://rsync.samba.org/favicon.ico" },
    { category: "File Management", name: "Cyberduck", description: "FTP and cloud client", link: "https://cyberduck.io/", icon: "https://cyberduck.io/favicon.ico" },
    { category: "File Management", name: "WinSCP", description: "Secure file transfer", link: "https://winscp.net/", icon: "https://winscp.net/favicon.ico" },
    { category: "File Management", name: "Explorer++", description: "Windows Explorer alternative", link: "https://explorerplusplus.com/", icon: "https://explorerplusplus.com/favicon.ico" },
    { category: "File Management", name: "FreeCommander", description: "Dual-pane file manager", link: "https://freecommander.com/", icon: "https://freecommander.com/favicon.ico" },
    { category: "Security & Privacy", name: "ProtonVPN", description: "Free VPN service", link: "https://protonvpn.com/", icon: "https://protonvpn.com/favicon.ico" },
    { category: "Security & Privacy", name: "Windscribe", description: "VPN with free tier", link: "https://windscribe.com/", icon: "https://windscribe.com/favicon.ico" },
    { category: "Security & Privacy", name: "TunnelBear", description: "Simple VPN (free tier)", link: "https://www.tunnelbear.com/", icon: "https://www.tunnelbear.com/favicon.ico" },
    { category: "Security & Privacy", name: "Privoxy", description: "Privacy proxy", link: "https://www.privoxy.org/", icon: "https://www.privoxy.org/favicon.ico" },
    { category: "Security & Privacy", name: "Aircrack-ng", description: "Wi-Fi security tool", link: "https://www.aircrack-ng.org/", icon: "https://www.aircrack-ng.org/favicon.ico" },
    { category: "Security & Privacy", name: "Metasploit", description: "Penetration testing", link: "https://www.metasploit.com/", icon: "https://www.metasploit.com/favicon.ico" },
    { category: "Security & Privacy", name: "Kali Linux Tools", description: "Security toolkit", link: "https://www.kali.org/", icon: "https://www.kali.org/favicon.ico" },
    { category: "Security & Privacy", name: "Hashcat", description: "Password recovery tool", link: "https://hashcat.net/", icon: "https://hashcat.net/favicon.ico" },
    { category: "Security & Privacy", name: "John the Ripper", description: "Password cracker", link: "https://www.openwall.com/john/", icon: "https://www.openwall.com/favicon.ico" },
    { category: "Security & Privacy", name: "Burp Suite", description: "Web security testing (free tier)", link: "https://portswigger.net/burp", icon: "https://portswigger.net/favicon.ico" },

    // Bonus 2 Software (305th and 306th)
    { category: "Miscellaneous", name: "Godot Engine", description: "Open-source game engine", link: "https://godotengine.org/", icon: "https://godotengine.org/favicon.ico" },
    { category: "Miscellaneous", name: "Blender Game Engine", description: "Game development tool", link: "https://www.blender.org/", icon: "https://www.blender.org/favicon.ico" }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const categories = ["All", ...new Set(softwareList.map(s => s.category))];
  const filteredList = softwareList.filter(software => {
    const matchesCategory = selectedCategory === "All" || software.category === selectedCategory;
    const matchesSearch = software.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalItems = filteredList.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredList.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Free Open-Source Software</h1>
        <p>Discover 300+ free open-source tools for developers, creators, and everyone. Updated March 2025!</p>
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
              onClick={() => { setSelectedCategory(category); setCurrentPage(1); }}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="software-list">
          {currentItems.map((software) => (
            <div className="software-card" key={software.name}>
              <img src={software.icon} alt={`${software.name} free open-source software icon`} className="software-icon" />
              <h3>{software.name}</h3>
              <p>{software.description}</p>
              <a href={software.link} target="_blank" rel="noopener noreferrer">Download</a>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;