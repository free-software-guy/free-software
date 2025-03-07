import React, { useState } from 'react';
import './App.css';

function App() {
  const softwareList = [
    // Existing 71 Software
    { category: "Media Players", name: "VLC Media Player", description: "Free video and audio player", link: "https://www.videolan.org/vlc/", icon: "https://www.videolan.org/favicon.ico" },
    { category: "Media Players", name: "OBS Studio", description: "Free streaming and recording", link: "https://obsproject.com/", icon: "https://obsproject.com/favicon.ico" },
    { category: "Media Players", name: "NewPipe", description: "Free YouTube client with ad-free streaming", link: "https://newpipe.net/", icon: "https://newpipe.net/favicon.ico" },
    { category: "Media Players", name: "MPV", description: "Minimalist media player", link: "https://mpv.io/", icon: "https://mpv.io/favicon.ico" },
    { category: "Media Players", name: "Clementine", description: "Rich music player", link: "https://www.clementine-player.org/", icon: "https://www.clementine-player.org/favicon.ico" },
    { category: "Media Players", name: "Audacious", description: "Lightweight audio player", link: "https://audacious-media-player.org/", icon: "https://audacious-media-player.org/favicon.ico" },
    { category: "Media Players", name: "Kodi", description: "Media center", link: "https://kodi.tv/", icon: "https://kodi.tv/favicon.ico" },
    { category: "Media Players", name: "Foobar2000", description: "Customizable audio player", link: "https://www.foobar2000.org/", icon: "https://www.foobar2000.org/favicon.ico" },
    { category: "Image Editing", name: "GIMP", description: "Free image editing software", link: "https://www.gimp.org/", icon: "https://www.gimp.org/favicon.ico" },
    { category: "Image Editing", name: "Inkscape", description: "Free vector graphics editor", link: "https://inkscape.org/", icon: "https://inkscape.org/favicon.ico" },
    { category: "Image Editing", name: "Paint.NET", description: "Free image editor", link: "https://www.getpaint.net/", icon: "https://www.getpaint.net/favicon.ico" },
    { category: "Image Editing", name: "Krita", description: "Digital painting tool", link: "https://krita.org/", icon: "https://krita.org/favicon.ico" },
    { category: "Image Editing", name: "Pinta", description: "Simple image editor", link: "https://www.pinta-project.com/", icon: "https://www.pinta-project.com/favicon.ico" },
    { category: "Image Editing", name: "Darktable", description: "RAW photo editor", link: "https://www.darktable.org/", icon: "https://www.darktable.org/favicon.ico" },
    { category: "Image Editing", name: "Photopea", description: "Web-based Photoshop alternative", link: "https://www.photopea.com/", icon: "https://www.photopea.com/favicon.ico" },
    { category: "Image Editing", name: "RawTherapee", description: "RAW image processing", link: "https://rawtherapee.com/", icon: "https://rawtherapee.com/favicon.ico" },
    { category: "Development Tools", name: "VS Code", description: "Powerful code editor", link: "https://code.visualstudio.com/", icon: "https://code.visualstudio.com/favicon.ico" },
    { category: "Development Tools", name: "Git", description: "Free version control system", link: "https://git-scm.com/", icon: "https://git-scm.com/favicon.ico" },
    { category: "Development Tools", name: "Putty", description: "Free SSH and telnet client", link: "https://www.putty.org/", icon: "https://www.putty.org/favicon.ico" },
    { category: "Development Tools", name: "Eclipse", description: "Java IDE", link: "https://www.eclipse.org/", icon: "https://www.eclipse.org/favicon.ico" },
    { category: "Development Tools", name: "Apache NetBeans", description: "Multi-language IDE", link: "https://netbeans.apache.org/", icon: "https://netbeans.apache.org/favicon.ico" },
    { category: "Development Tools", name: "Code::Blocks", description: "C/C++ IDE", link: "https://www.codeblocks.org/", icon: "https://www.codeblocks.org/favicon.ico" },
    { category: "Development Tools", name: "Sublime Text", description: "Fast text editor (free tier)", link: "https://www.sublimetext.com/", icon: "https://www.sublimetext.com/favicon.ico" },
    { category: "Development Tools", name: "Geany", description: "Lightweight IDE", link: "https://www.geany.org/", icon: "https://www.geany.org/favicon.ico" },
    { category: "Productivity", name: "LibreOffice", description: "Free office suite (Word, Excel)", link: "https://www.libreoffice.org/", icon: "https://www.libreoffice.org/favicon.ico" },
    { category: "Productivity", name: "Notepad++", description: "Lightweight text editor", link: "https://notepad-plus-plus.org/", icon: "https://notepad-plus-plus.org/favicon.ico" },
    { category: "Productivity", name: "Thunderbird", description: "Free email client", link: "https://www.thunderbird.net/", icon: "https://www.thunderbird.net/favicon.ico" },
    { category: "Productivity", name: "Calibre", description: "E-book manager", link: "https://calibre-ebook.com/", icon: "https://calibre-ebook.com/favicon.ico" },
    { category: "Productivity", name: "GnuCash", description: "Accounting software", link: "https://www.gnucash.org/", icon: "https://www.gnucash.org/favicon.ico" },
    { category: "Productivity", name: "FocusWriter", description: "Distraction-free writing", link: "https://gottcode.org/focuswriter/", icon: "https://gottcode.org/favicon.ico" },
    { category: "Productivity", name: "FreeMind", description: "Mind mapping tool", link: "http://freemind.sourceforge.net/", icon: "http://freemind.sourceforge.net/favicon.ico" },
    { category: "Productivity", name: "TiddlyWiki", description: "Personal wiki notebook", link: "https://tiddlywiki.com/", icon: "https://tiddlywiki.com/favicon.ico" },
    { category: "Audio Editing", name: "Audacity", description: "Free audio recording and editing", link: "https://www.audacityteam.org/", icon: "https://www.audacityteam.org/favicon.ico" },
    { category: "Audio Editing", name: "Ardour", description: "Digital audio workstation", link: "https://ardour.org/", icon: "https://ardour.org/favicon.ico" },
    { category: "Audio Editing", name: "LMMS", description: "Music production tool", link: "https://lmms.io/", icon: "https://lmms.io/favicon.ico" },
    { category: "Audio Editing", name: "Qtractor", description: "Audio/MIDI sequencer", link: "https://qtractor.org/", icon: "https://qtractor.org/favicon.ico" },
    { category: "Audio Editing", name: "Mixxx", description: "DJ mixing software", link: "https://www.mixxx.org/", icon: "https://www.mixxx.org/favicon.ico" },
    { category: "Audio Editing", name: "Ocenaudio", description: "Easy audio editor", link: "https://www.ocenaudio.com/", icon: "https://www.ocenaudio.com/favicon.ico" },
    { category: "Video Editing", name: "Blender", description: "Free 3D modeling and animation", link: "https://www.blender.org/", icon: "https://www.blender.org/favicon.ico" },
    { category: "Video Editing", name: "Kdenlive", description: "Free video editing software", link: "https://kdenlive.org/", icon: "https://kdenlive.org/favicon.ico" },
    { category: "Video Editing", name: "Shotcut", description: "Free video editor", link: "https://shotcut.org/", icon: "https://shotcut.org/favicon.ico" },
    { category: "Video Editing", name: "HandBrake", description: "Free video converter", link: "https://handbrake.fr/", icon: "https://handbrake.fr/favicon.ico" },
    { category: "Video Editing", name: "OpenShot", description: "Simple video editor", link: "https://www.openshot.org/", icon: "https://www.openshot.org/favicon.ico" },
    { category: "Video Editing", name: "DaVinci Resolve", description: "Pro video editing (free tier)", link: "https://www.blackmagicdesign.com/", icon: "https://www.blackmagicdesign.com/favicon.ico" },
    { category: "Video Editing", name: "Avidemux", description: "Basic video editing", link: "http://avidemux.sourceforge.net/", icon: "http://avidemux.sourceforge.net/favicon.ico" },
    { category: "Video Editing", name: "Lightworks", description: "Pro video editor (free tier)", link: "https://lwks.com/", icon: "https://lwks.com/favicon.ico" },
    { category: "Video Editing", name: "Flowblade", description: "Non-linear video editor", link: "https://jliljebl.github.io/flowblade/", icon: "https://jliljebl.github.io/favicon.ico" },
    { category: "Web Browsers", name: "Firefox", description: "Fast and private web browser", link: "https://www.mozilla.org/firefox/", icon: "https://www.mozilla.org/favicon.ico" },
    { category: "Web Browsers", name: "Brave", description: "Ad-blocking browser", link: "https://brave.com/", icon: "https://brave.com/favicon.ico" },
    { category: "Web Browsers", name: "Chromium", description: "Open-source Chrome base", link: "https://www.chromium.org/", icon: "https://www.chromium.org/favicon.ico" },
    { category: "Web Browsers", name: "Tor Browser", description: "Anonymous browsing", link: "https://www.torproject.org/", icon: "https://www.torproject.org/favicon.ico" },
    { category: "Web Browsers", name: "Midori", description: "Lightweight browser", link: "https://midori-browser.org/", icon: "https://midori-browser.org/favicon.ico" },
    { category: "Web Browsers", name: "Waterfox", description: "Privacy-focused Firefox fork", link: "https://www.waterfox.net/", icon: "https://www.waterfox.net/favicon.ico" },
    { category: "File Management", name: "7-Zip", description: "Free file compression tool", link: "https://www.7-zip.org/", icon: "https://www.7-zip.org/favicon.ico" },
    { category: "File Management", name: "FileZilla", description: "Free FTP client for file transfer", link: "https://filezilla-project.org/", icon: "https://filezilla-project.org/favicon.ico" },
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
    { category: "Miscellaneous", name: "VirtualBox", description: "Free virtualization software", link: "https://www.virtualbox.org/", icon: "https://www.virtualbox.org/favicon.ico" },
    { category: "Miscellaneous", name: "OpenStreetMap", description: "Collaborative maps", link: "https://www.openstreetmap.org/", icon: "https://www.openstreetmap.org/favicon.ico" },
    { category: "Miscellaneous", name: "Tux Paint", description: "Drawing for kids", link: "https://tuxpaint.org/", icon: "https://tuxpaint.org/favicon.ico" },
    { category: "Miscellaneous", name: "Stellarium", description: "Planetarium software", link: "https://stellarium.org/", icon: "https://stellarium.org/favicon.ico" },
    { category: "Miscellaneous", name: "FreeCAD", description: "3D CAD design", link: "https://www.freecadweb.org/", icon: "https://www.freecadweb.org/favicon.ico" },
    { category: "Miscellaneous", name: "Kiwix", description: "Offline Wikipedia", link: "https://www.kiwix.org/", icon: "https://www.kiwix.org/favicon.ico" },

    // New 129 Software
    { category: "Productivity", name: "Zotero", description: "Research reference manager", link: "https://www.zotero.org/", icon: "https://www.zotero.org/favicon.ico" },
    { category: "Productivity", name: "Joplin", description: "Note-taking app", link: "https://joplinapp.org/", icon: "https://joplinapp.org/favicon.ico" },
    { category: "Productivity", name: "ONLYOFFICE", description: "Office suite", link: "https://www.onlyoffice.com/", icon: "https://www.onlyoffice.com/favicon.ico" },
    { category: "Productivity", name: "CherryTree", description: "Hierarchical note-taking", link: "https://www.giuspen.com/cherrytree/", icon: "https://www.giuspen.com/favicon.ico" },
    { category: "Productivity", name: "Task Coach", description: "Task manager", link: "https://www.taskcoach.org/", icon: "https://www.taskcoach.org/favicon.ico" },
    { category: "Productivity", name: "RedNotebook", description: "Journaling software", link: "https://rednotebook.app/", icon: "https://rednotebook.app/favicon.ico" },
    { category: "Productivity", name: "Scribus", description: "Desktop publishing", link: "https://www.scribus.net/", icon: "https://www.scribus.net/favicon.ico" },
    { category: "Productivity", name: "PDFsam", description: "PDF splitter/merger", link: "https://pdfsam.org/", icon: "https://pdfsam.org/favicon.ico" },
    { category: "Productivity", name: "Okular", description: "Document viewer", link: "https://okular.kde.org/", icon: "https://okular.kde.org/favicon.ico" },
    { category: "Productivity", name: "Xournal", description: "Handwritten notes", link: "http://xournal.sourceforge.net/", icon: "http://xournal.sourceforge.net/favicon.ico" },
    { category: "Productivity", name: "KMyMoney", description: "Personal finance", link: "https://kmymoney.org/", icon: "https://kmymoney.org/favicon.ico" },
    { category: "Productivity", name: "Planner", description: "Task planner", link: "https://planner-todo.web.app/", icon: "https://planner-todo.web.app/favicon.ico" },
    { category: "Productivity", name: "Tomboy", description: "Note-taking app", link: "https://wiki.gnome.org/Apps/Tomboy", icon: "https://wiki.gnome.org/favicon.ico" },
    { category: "Productivity", name: "Grisbi", description: "Personal accounting", link: "http://www.grisbi.org/", icon: "http://www.grisbi.org/favicon.ico" },
    { category: "Productivity", name: "HomeBank", description: "Financial management", link: "http://homebank.free.fr/", icon: "http://homebank.free.fr/favicon.ico" },
    { category: "Productivity", name: "Dia", description: "Diagram editor", link: "https://wiki.gnome.org/Apps/Dia", icon: "https://wiki.gnome.org/favicon.ico" },
    { category: "Productivity", name: "ProjectLibre", description: "Project management", link: "https://www.projectlibre.com/", icon: "https://www.projectlibre.com/favicon.ico" },
    { category: "Productivity", name: "OpenProj", description: "Project planning", link: "http://openproj.org/", icon: "http://openproj.org/favicon.ico" },
    { category: "Productivity", name: "Calligra", description: "Office suite", link: "https://calligra.org/", icon: "https://calligra.org/favicon.ico" },
    { category: "Productivity", name: "Etherpad", description: "Collaborative editor", link: "https://etherpad.org/", icon: "https://etherpad.org/favicon.ico" },
    { category: "Media Players", name: "SMPlayer", description: "Customizable media player", link: "https://www.smplayer.info/", icon: "https://www.smplayer.info/favicon.ico" },
    { category: "Media Players", name: "MediaMonkey", description: "Music organizer", link: "https://www.mediamonkey.com/", icon: "https://www.mediamonkey.com/favicon.ico" },
    { category: "Media Players", name: "Banshee", description: "Music player", link: "http://banshee.fm/", icon: "http://banshee.fm/favicon.ico" },
    { category: "Media Players", name: "Rhythmbox", description: "Music management", link: "https://wiki.gnome.org/Apps/Rhythmbox", icon: "https://wiki.gnome.org/favicon.ico" },
    { category: "Media Players", name: "Quod Libet", description: "Audio player", link: "https://quodlibet.readthedocs.io/", icon: "https://quodlibet.readthedocs.io/favicon.ico" },
    { category: "Media Players", name: "Amarok", description: "Music player", link: "https://amarok.kde.org/", icon: "https://amarok.kde.org/favicon.ico" },
    { category: "Media Players", name: "AIMP", description: "Lightweight audio player", link: "https://www.aimp.dev/", icon: "https://www.aimp.dev/favicon.ico" },
    { category: "Media Players", name: "Winamp", description: "Classic media player", link: "https://www.winamp.com/", icon: "https://www.winamp.com/favicon.ico" },
    { category: "Media Players", name: "Tomahawk", description: "Social media player", link: "https://www.tomahawk-player.org/", icon: "https://www.tomahawk-player.org/favicon.ico" },
    { category: "Media Players", name: "MOC", description: "Console audio player", link: "http://moc.daper.net/", icon: "http://moc.daper.net/favicon.ico" },
    { category: "Media Players", name: "DeaDBeeF", description: "Minimalist audio player", link: "https://deadbeef.sourceforge.io/", icon: "https://deadbeef.sourceforge.io/favicon.ico" },
    { category: "Media Players", name: "Cantata", description: "MPD client", link: "https://github.com/CDrummond/cantata", icon: "https://github.com/favicon.ico" },
    { category: "Media Players", name: "Elisa", description: "KDE music player", link: "https://elisa.kde.org/", icon: "https://elisa.kde.org/favicon.ico" },
    { category: "Media Players", name: "Lollypop", description: "Modern music player", link: "https://wiki.gnome.org/Apps/Lollypop", icon: "https://wiki.gnome.org/favicon.ico" },
    { category: "Media Players", name: "Tauon Music Box", description: "Music player", link: "https://github.com/Taiko2k/tauonmb", icon: "https://github.com/favicon.ico" },
    { category: "Image Editing", name: "PhotoFlare", description: "Simple image editor", link: "https://photoflare.io/", icon: "https://photoflare.io/favicon.ico" },
    { category: "Image Editing", name: "MyPaint", description: "Digital painting tool", link: "https://mypaint.app/", icon: "https://mypaint.app/favicon.ico" },
    { category: "Image Editing", name: "LazPaint", description: "Lightweight image editor", link: "https://lazpaint.github.io/", icon: "https://lazpaint.github.io/favicon.ico" },
    { category: "Image Editing", name: "GrafX2", description: "Pixel art editor", link: "https://pulkomandy.tk/projects/GrafX2", icon: "https://pulkomandy.tk/favicon.ico" },
    { category: "Image Editing", name: "Aseprite", description: "Animated sprite editor (open-source build)", link: "https://www.aseprite.org/", icon: "https://www.aseprite.org/favicon.ico" },
    { category: "Image Editing", name: "ImageMagick", description: "Image manipulation tool", link: "https://imagemagick.org/", icon: "https://imagemagick.org/favicon.ico" },
    { category: "Image Editing", name: "XnView", description: "Image viewer and converter", link: "https://www.xnview.com/", icon: "https://www.xnview.com/favicon.ico" },
    { category: "Image Editing", name: "GThumb", description: "Image viewer and organizer", link: "https://wiki.gnome.org/Apps/Gthumb", icon: "https://wiki.gnome.org/favicon.ico" },
    { category: "Image Editing", name: "Shotwell", description: "Photo manager", link: "https://wiki.gnome.org/Apps/Shotwell", icon: "https://wiki.gnome.org/favicon.ico" },
    { category: "Image Editing", name: "Nomacs", description: "Image viewer", link: "https://nomacs.org/", icon: "https://nomacs.org/favicon.ico" },
    { category: "Image Editing", name: "IrfanView", description: "Fast image viewer", link: "https://www.irfanview.com/", icon: "https://www.irfanview.com/favicon.ico" },
    { category: "Image Editing", name: "digiKam", description: "Photo management", link: "https://www.digikam.org/", icon: "https://www.digikam.org/favicon.ico" },
    { category: "Image Editing", name: "Pix", description: "Image gallery", link: "https://github.com/linuxmint/pix", icon: "https://github.com/favicon.ico" },
    { category: "Image Editing", name: "Photivo", description: "RAW photo processor", link: "http://photivo.org/", icon: "http://photivo.org/favicon.ico" },
    { category: "Image Editing", name: "Fotoxx", description: "Photo editor", link: "https://kornelix.net/fotoxx/fotoxx.html", icon: "https://kornelix.net/favicon.ico" },
    { category: "Video Editing", name: "Pitivi", description: "Open-source video editor", link: "https://www.pitivi.org/", icon: "https://www.pitivi.org/favicon.ico" },
    { category: "Video Editing", name: "LosslessCut", description: "Lossless video trimmer", link: "https://mifi.no/losslesscut/", icon: "https://mifi.no/favicon.ico" },
    { category: "Video Editing", name: "Cinelerra", description: "Advanced video editor", link: "http://cinelerra-gg.org/", icon: "http://cinelerra-gg.org/favicon.ico" },
    { category: "Video Editing", name: "Olive", description: "Non-linear video editor", link: "https://www.olivevideoeditor.org/", icon: "https://www.olivevideoeditor.org/favicon.ico" },
    { category: "Video Editing", name: "Natron", description: "Compositing software", link: "https://natrongithub.github.io/", icon: "https://natrongithub.github.io/favicon.ico" },
    { category: "Video Editing", name: "VideoLAN Movie Creator", description: "Simple video editor", link: "https://www.videolan.org/vlmc/", icon: "https://www.videolan.org/favicon.ico" },
    { category: "Video Editing", name: "MEncoder", description: "Video encoding tool", link: "http://www.mplayerhq.hu/", icon: "http://www.mplayerhq.hu/favicon.ico" },
    { category: "Video Editing", name: "FFmpeg", description: "Multimedia framework", link: "https://ffmpeg.org/", icon: "https://ffmpeg.org/favicon.ico" },
    { category: "Video Editing", name: "Vidiot", description: "Basic video editor", link: "https://sourceforge.net/projects/vidiot/", icon: "https://sourceforge.net/favicon.ico" },
    { category: "Video Editing", name: "LiVES", description: "Video editing and VJ tool", link: "http://lives-video.com/", icon: "http://lives-video.com/favicon.ico" },
    { category: "Video Editing", name: "Open Movie Editor", description: "Simple video editor", link: "http://www.openmovieeditor.org/", icon: "http://www.openmovieeditor.org/favicon.ico" },
    { category: "Video Editing", name: "Kino", description: "Non-linear video editor", link: "http://www.kinodv.org/", icon: "http://www.kinodv.org/favicon.ico" },
    { category: "Video Editing", name: "Jahshaka", description: "Video editing and effects", link: "http://www.jahshaka.com/", icon: "http://www.jahshaka.com/favicon.ico" },
    { category: "Video Editing", name: "VidCutter", description: "Video trimmer", link: "https://github.com/ozmartian/vidcutter", icon: "https://github.com/favicon.ico" },
    { category: "Video Editing", name: "Flowblade", description: "Multitrack video editor", link: "https://jliljebl.github.io/flowblade/", icon: "https://jliljebl.github.io/favicon.ico" },
    { category: "Audio Editing", name: "Rosegarden", description: "Music composition", link: "https://www.rosegardenmusic.com/", icon: "https://www.rosegardenmusic.com/favicon.ico" },
    { category: "Audio Editing", name: "Hydrogen", description: "Drum machine", link: "http://hydrogen-music.org/", icon: "http://hydrogen-music.org/favicon.ico" },
    { category: "Audio Editing", name: "MuseScore", description: "Music notation software", link: "https://musescore.org/", icon: "https://musescore.org/favicon.ico" },
    { category: "Audio Editing", name: "TuxGuitar", description: "Guitar tablature editor", link: "https://sourceforge.net/projects/tuxguitar/", icon: "https://sourceforge.net/favicon.ico" },
    { category: "Audio Editing", name: "SoundConverter", description: "Audio file converter", link: "https://soundconverter.org/", icon: "https://soundconverter.org/favicon.ico" },
    { category: "Audio Editing", name: "Reaper", description: "DAW with free evaluation", link: "https://www.reaper.fm/", icon: "https://www.reaper.fm/favicon.ico" },
    { category: "Audio Editing", name: "WaveShop", description: "Audio editor", link: "http://waveshop.sourceforge.net/", icon: "http://waveshop.sourceforge.net/favicon.ico" },
    { category: "Audio Editing", name: "Sneedacity", description: "Fork of Audacity", link: "https://github.com/Sneeds-Feed-and-Seed/sneedacity", icon: "https://github.com/favicon.ico" },
    { category: "Audio Editing", name: "Frescobaldi", description: "LilyPond music editor", link: "https://www.frescobaldi.org/", icon: "https://www.frescobaldi.org/favicon.ico" },
    { category: "Audio Editing", name: "Sonic Visualiser", description: "Audio analysis tool", link: "https://www.sonicvisualiser.org/", icon: "https://www.sonicvisualiser.org/favicon.ico" },
    { category: "Audio Editing", name: "Traverso DAW", description: "Multitrack audio recorder", link: "https://traverso-daw.org/", icon: "https://traverso-daw.org/favicon.ico" },
    { category: "Audio Editing", name: "Spek", description: "Audio spectrum analyzer", link: "http://spek.cc/", icon: "http://spek.cc/favicon.ico" },
    { category: "Audio Editing", name: "Cecilia", description: "Audio signal processing", link: "http://ajaxsoundstudio.com/software/cecilia/", icon: "http://ajaxsoundstudio.com/favicon.ico" },
    { category: "Audio Editing", name: "ZynAddSubFX", description: "Software synthesizer", link: "https://zynaddsubfx.sourceforge.io/", icon: "https://zynaddsubfx.sourceforge.io/favicon.ico" },
    { category: "Audio Editing", name: "JACK Audio", description: "Audio connection kit", link: "https://jackaudio.org/", icon: "https://jackaudio.org/favicon.ico" },
    { category: "Web Browsers", name: "Otter Browser", description: "Classic browser experience", link: "https://otter-browser.org/", icon: "https://otter-browser.org/favicon.ico" },
    { category: "Web Browsers", name: "Pale Moon", description: "Lightweight Firefox fork", link: "https://www.palemoon.org/", icon: "https://www.palemoon.org/favicon.ico" },
    { category: "Web Browsers", name: "Qutebrowser", description: "Keyboard-driven browser", link: "https://qutebrowser.org/", icon: "https://qutebrowser.org/favicon.ico" },
    { category: "Web Browsers", name: "Lynx", description: "Text-based browser", link: "https://lynx.invisible-island.net/", icon: "https://lynx.invisible-island.net/favicon.ico" },
    { category: "Web Browsers", name: "Surf", description: "Minimalist browser", link: "https://surf.suckless.org/", icon: "https://surf.suckless.org/favicon.ico" },
    { category: "Web Browsers", name: "Falkon", description: "Lightweight browser", link: "https://www.falkon.org/", icon: "https://www.falkon.org/favicon.ico" },
    { category: "Web Browsers", name: "Epiphany", description: "GNOME web browser", link: "https://wiki.gnome.org/Apps/Web", icon: "https://wiki.gnome.org/favicon.ico" },
    { category: "Web Browsers", name: "Dillo", description: "Small footprint browser", link: "https://www.dillo.org/", icon: "https://www.dillo.org/favicon.ico" },
    { category: "Web Browsers", name: "NetSurf", description: "Fast lightweight browser", link: "http://www.netsurf-browser.org/", icon: "http://www.netsurf-browser.org/favicon.ico" },
    { category: "Web Browsers", name: "Basilisk", description: "Firefox-based browser", link: "https://www.basilisk-browser.org/", icon: "https://www.basilisk-browser.org/favicon.ico" },
    { category: "File Management", name: "PeaZip", description: "File archiver", link: "https://peazip.github.io/", icon: "https://peazip.github.io/favicon.ico" },
    { category: "File Management", name: "Rclone", description: "Cloud syncing tool", link: "https://rclone.org/", icon: "https://rclone.org/favicon.ico" },
    { category: "File Management", name: "Duplicati", description: "Backup software", link: "https://www.duplicati.com/", icon: "https://www.duplicati.com/favicon.ico" },
    { category: "File Management", name: "Far Manager", description: "File manager", link: "https://www.farmanager.com/", icon: "https://www.farmanager.com/favicon.ico" },
    { category: "File Management", name: "SpaceFM", description: "Customizable file manager", link: "https://ignorantguru.github.io/spacefm/", icon: "https://ignorantguru.github.io/favicon.ico" },
    { category: "File Management", name: "PCManFM", description: "Lightweight file manager", link: "https://wiki.lxde.org/en/PCManFM", icon: "https://wiki.lxde.org/favicon.ico" },
    { category: "File Management", name: "Thunar", description: "Fast file manager", link: "https://docs.xfce.org/xfce/thunar/start", icon: "https://docs.xfce.org/favicon.ico" },
    { category: "File Management", name: "Caja", description: "MATE file manager", link: "https://mate-desktop.org/", icon: "https://mate-desktop.org/favicon.ico" },
    { category: "File Management", name: "Dolphin", description: "KDE file manager", link: "https://kde.org/applications/system/dolphin/", icon: "https://kde.org/favicon.ico" },
    { category: "File Management", name: "Midnight Commander", description: "Text-based file manager", link: "https://midnight-commander.org/", icon: "https://midnight-commander.org/favicon.ico" },
    { category: "File Management", name: "Krusader", description: "Twin-panel file manager", link: "https://krusader.org/", icon: "https://krusader.org/favicon.ico" },
    { category: "File Management", name: "Tixati", description: "Torrent client", link: "https://www.tixati.com/", icon: "https://www.tixati.com/favicon.ico" },
    { category: "File Management", name: "Transmission", description: "Lightweight torrent client", link: "https://transmissionbt.com/", icon: "https://transmissionbt.com/favicon.ico" },
    { category: "File Management", name: "DirSync Pro", description: "Directory synchronization", link: "https://dirsyncpro.org/", icon: "https://dirsyncpro.org/favicon.ico" },
    { category: "File Management", name: "Bulk Rename Utility", description: "File renaming tool", link: "https://www.bulkrenameutility.co.uk/", icon: "https://www.bulkrenameutility.co.uk/favicon.ico" },
    { category: "Security & Privacy", name: "Bitwarden", description: "Open-source password manager", link: "https://bitwarden.com/", icon: "https://bitwarden.com/favicon.ico" },
    { category: "Security & Privacy", name: "Wireshark", description: "Network analyzer", link: "https://www.wireshark.org/", icon: "https://www.wireshark.org/favicon.ico" },
    { category: "Security & Privacy", name: "Tor", description: "Anonymity network", link: "https://www.torproject.org/", icon: "https://www.torproject.org/favicon.ico" },
    { category: "Security & Privacy", name: "BleachBit", description: "System cleaner", link: "https://www.bleachbit.org/", icon: "https://www.bleachbit.org/favicon.ico" },
    { category: "Security & Privacy", name: "Cryptomator", description: "Cloud file encryption", link: "https://cryptomator.org/", icon: "https://cryptomator.org/favicon.ico" },
    { category: "Security & Privacy", name: "Eraser", description: "Secure file deletion", link: "https://eraser.heidi.ie/", icon: "https://eraser.heidi.ie/favicon.ico" },
    { category: "Security & Privacy", name: "PeerBlock", description: "IP blocking tool", link: "https://www.peerblock.com/", icon: "https://www.peerblock.com/favicon.ico" },
    { category: "Security & Privacy", name: "O&O ShutUp10", description: "Windows privacy tool", link: "https://www.oo-software.com/en/shutup10", icon: "https://www.oo-software.com/favicon.ico" },
    { category: "Security & Privacy", name: "Password Safe", description: "Password manager", link: "https://pwsafe.org/", icon: "https://pwsafe.org/favicon.ico" },
    { category: "Security & Privacy", name: "Privoxy", description: "Web proxy", link: "https://www.privoxy.org/", icon: "https://www.privoxy.org/favicon.ico" },
    { category: "Security & Privacy", name: "ProtonVPN", description: "Free VPN (limited)", link: "https://protonvpn.com/", icon: "https://protonvpn.com/favicon.ico" },
    { category: "Security & Privacy", name: "Tailscale", description: "Zero-config VPN", link: "https://tailscale.com/", icon: "https://tailscale.com/favicon.ico" },
    { category: "Security & Privacy", name: "HashCalc", description: "Hash calculator", link: "https://www.slavasoft.com/hashcalc/", icon: "https://www.slavasoft.com/favicon.ico" },
    { category: "Security & Privacy", name: "TrueCrypt", description: "Disk encryption (legacy)", link: "https://truecrypt.ch/", icon: "https://truecrypt.ch/favicon.ico" },
    { category: "Security & Privacy", name: "Mat2", description: "Metadata removal tool", link: "https://0xacab.org/jvoisin/mat2", icon: "https://0xacab.org/favicon.ico" },
    { category: "Development Tools", name: "Node.js", description: "JavaScript runtime environment", link: "https://nodejs.org/", icon: "https://nodejs.org/favicon.ico" }, // Added Node.js
    { category: "Development Tools", name: "Atom", description: "Hackable text editor", link: "https://atom.io/", icon: "https://atom.io/favicon.ico" },
    { category: "Development Tools", name: "PyCharm CE", description: "Python IDE (Community Edition)", link: "https://www.jetbrains.com/pycharm/", icon: "https://www.jetbrains.com/favicon.ico" },
    { category: "Development Tools", name: "IntelliJ IDEA CE", description: "Java IDE (Community Edition)", link: "https://www.jetbrains.com/idea/", icon: "https://www.jetbrains.com/favicon.ico" },
    { category: "Development Tools", name: "BlueJ", description: "Java learning IDE", link: "https://www.bluej.org/", icon: "https://www.bluej.org/favicon.ico" },
    { category: "Development Tools", name: "Brackets", description: "Web development editor", link: "http://brackets.io/", icon: "http://brackets.io/favicon.ico" },
    { category: "Development Tools", name: "KDevelop", description: "Cross-platform IDE", link: "https://www.kdevelop.org/", icon: "https://www.kdevelop.org/favicon.ico" },
    { category: "Development Tools", name: "MonoDevelop", description: "C# and .NET IDE", link: "https://www.monodevelop.com/", icon: "https://www.monodevelop.com/favicon.ico" },
    { category: "Development Tools", name: "Lazarus", description: "Pascal IDE", link: "https://www.lazarus-ide.org/", icon: "https://www.lazarus-ide.org/favicon.ico" },
    { category: "Development Tools", name: "Eric", description: "Python IDE", link: "https://eric-ide.python-projects.org/", icon: "https://eric-ide.python-projects.org/favicon.ico" },
    { category: "Development Tools", name: "Anjuta", description: "GNOME IDE", link: "https://anjuta.org/", icon: "https://anjuta.org/favicon.ico" },
    { category: "Development Tools", name: "CodeLite", description: "C/C++ IDE", link: "https://codelite.org/", icon: "https://codelite.org/favicon.ico" },
    { category: "Development Tools", name: "GNU Emacs", description: "Extensible text editor", link: "https://www.gnu.org/software/emacs/", icon: "https://www.gnu.org/favicon.ico" },
    { category: "Development Tools", name: "Vim", description: "Highly configurable text editor", link: "https://www.vim.org/", icon: "https://www.vim.org/favicon.ico" },
    { category: "Development Tools", name: "Nano", description: "Simple text editor", link: "https://www.nano-editor.org/", icon: "https://www.nano-editor.org/favicon.ico" },
    { category: "Miscellaneous", name: "GCompris", description: "Educational software for kids", link: "https://gcompris.net/", icon: "https://gcompris.net/favicon.ico" },
    { category: "Miscellaneous", name: "XMind", description: "Mind mapping (free tier)", link: "https://www.xmind.net/", icon: "https://www.xmind.net/favicon.ico" },
    { category: "Miscellaneous", name: "Scratch", description: "Programming for kids", link: "https://scratch.mit.edu/", icon: "https://scratch.mit.edu/favicon.ico" },
    { category: "Miscellaneous", name: "KStars", description: "Astronomy software", link: "https://kstars.kde.org/", icon: "https://kstars.kde.org/favicon.ico" },
    { category: "Miscellaneous", name: "Celestia", description: "Space simulation", link: "https://celestia.space/", icon: "https://celestia.space/favicon.ico" },
    { category: "Miscellaneous", name: "Dia", description: "Diagram software", link: "https://wiki.gnome.org/Apps/Dia", icon: "https://wiki.gnome.org/favicon.ico" },
    { category: "Miscellaneous", name: "Pencil2D", description: "2D animation software", link: "https://www.pencil2d.org/", icon: "https://www.pencil2d.org/favicon.ico" },
    { category: "Miscellaneous", name: "Synfig", description: "2D animation software", link: "https://www.synfig.org/", icon: "https://www.synfig.org/favicon.ico" },
    { category: "Miscellaneous", name: "OpenToonz", description: "Animation production", link: "https://opentoonz.github.io/", icon: "https://opentoonz.github.io/favicon.ico" },
    { category: "Miscellaneous", name: "TupiTube", description: "Animation for beginners", link: "https://www.tupitube.com/", icon: "https://www.tupitube.com/favicon.ico" },
    { category: "Miscellaneous", name: "Krita", description: "Digital painting (also in Image Editing)", link: "https://krita.org/", icon: "https://krita.org/favicon.ico" },
    { category: "Miscellaneous", name: "Blender", description: "3D creation (also in Video Editing)", link: "https://www.blender.org/", icon: "https://www.blender.org/favicon.ico" },
    { category: "Miscellaneous", name: "ScummVM", description: "Classic game emulator", link: "https://www.scummvm.org/", icon: "https://www.scummvm.org/favicon.ico" },
    { category: "Miscellaneous", name: "DosBox", description: "DOS emulator", link: "https://www.dosbox.com/", icon: "https://www.dosbox.com/favicon.ico" }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // 20 software per page

  const categories = ["All", ...new Set(softwareList.map(s => s.category))];
  const filteredList = softwareList.filter(software => {
    const matchesCategory = selectedCategory === "All" || software.category === selectedCategory;
    const matchesSearch = software.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination Logic
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
        <h1>Free Open-Source Software</h1> {/* "200" removed */}
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
              <img src={software.icon} alt={`${software.name} icon`} className="software-icon" />
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