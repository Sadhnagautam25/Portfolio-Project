import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import MacWindow from "../../window/MacWindow";

const NoteTab = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch((err) => console.error("Error loading markdown:", err));
  }, []);

  return (
    <MacWindow windowId={'note'}>
      <div className="note-tab ">
        {markdown ? <Markdown>{markdown}</Markdown> : <p>Loading...</p>}
      </div>
    </MacWindow>
  );
};

export default NoteTab;
