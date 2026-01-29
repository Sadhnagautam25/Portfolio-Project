import React from "react";
import MacWindow from "../../window/MacWindow";

const ResumeTab = () => {
  return (
    <MacWindow windowId={"resume"}>
      <div className="w-full h-full flex flex-col bg-[#0d1117] rounded-lg overflow-hidden">
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-800">
          <span className="text-xs text-gray-400">Resume Preview</span>

          <div className="flex gap-3 text-xs">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Open
            </a>
            <a
              href="/resume.pdf"
              download
              className="text-green-400 hover:underline"
            >
              Download
            </a>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-black">
          <iframe
            src="/resume.pdf"
            title="Sadhna Gautam Resume"
            className="w-full h-full"
          />
        </div>
      </div>
    </MacWindow>
  );
};

export default ResumeTab;
