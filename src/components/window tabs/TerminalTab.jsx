import React from "react";
import MacWindow from "../../window/MacWindow";
import Terminal from "react-console-emulator";

const TerminalTab = () => {
  return (
    <MacWindow windowId={'terminal'}>
      <div className="cli-window w-full h-full rounded-b-xl overflow-hidden">
        <Terminal
          autoFocus
          commands={{
            echo: {
              description: "Print text",
              usage: "echo <text>",
              fn: (...args) => args.join(" "),
            },
            about: {
              description: "About me",
              usage: "about",
              fn: () =>
                "Hi — I'm Sadhna. I'm a frontend developer building React apps and interactive UIs.",
            },
            projects: {
              description: "My projects",
              usage: "projects",
              fn: () => [
                "Projects:",
                "• Window OS (this portfolio)",
                "• Spotify clone",
                "• Terminal emulator demo",
              ],
            },
            skills: {
              description: "Technical skills",
              usage: "skills",
              fn: () => "React, Redux, Vite, CSS, TailwindCSS, JavaScript",
            },
            contact: {
              description: "Contact info",
              usage: "contact",
              fn: () =>
                "Email: sadhnagautam813@gmail.com | LinkedIn: linkedin.com/in/sadhnagautam25",
            },
            github: {
              description: "GitHub profile",
              usage: "github",
              fn: () => "https://github.com/Sadhnagautam25",
            },
            resume: {
              description: "View resume",
              usage: "resume",
              fn: () =>
                "https://drive.google.com/file/d/1jFLl6Rw-Mq4y2x6_hLBEPrTICtt5DXpP/view",
            },
          }}
          welcomeMessage={[
            "Welcome to Sadhna's portfolio terminal 👋",
            "Type `help` to explore available commands.",
          ]}
          promptLabel="sadhnagautam@macbook ~ %"
          className="terminal-pro"
        />
      </div>
    </MacWindow>
  );
};

export default TerminalTab;
