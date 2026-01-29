import React from "react";
import wallpaper from "./assets/window-wallpaper.jpg";
import Footer from "./components/footer comp/Footer";
import Searhbar from "./components/nav comp/Searhbar";
import GithubTab from "./components/window tabs/GithubTab";
import ResumeTab from "./components/window tabs/ResumeTab";
import SpotifyTab from "./components/window tabs/SpotifyTab";
import InstagramTab from "./components/window tabs/InstagramTab";
import LinkedinTab from "./components/window tabs/LinkedinTab";
import CalenderTab from "./components/window tabs/CalenderTab";
import { useSelector } from "react-redux";
import NoteTab from "./components/window tabs/NoteTab";
import TerminalTab from "./components/window tabs/TerminalTab";

const App = () => {
  const windows = useSelector((state) => state.window.list);

  const isOpen = (id) => {
    return windows.find((w) => w.id === id)?.isOpen;
  };
 

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className="w-full h-screen bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backdropFilter: "blur(2px)", // subtle blur behind windows
      }}
    >
      <Searhbar />
      {isOpen("github") && <GithubTab />}
      {isOpen("resume") && <ResumeTab />}
      {isOpen("spotify") && <SpotifyTab />}
      {isOpen("instagram") && <InstagramTab />}
      {isOpen("linkedin") && <LinkedinTab />}
      {isOpen("calendar") && <CalenderTab />}
      {isOpen("note") && <NoteTab />}
      {isOpen("terminal") && <TerminalTab />}

      <Footer />
    </div>
  );
};

export default App;
