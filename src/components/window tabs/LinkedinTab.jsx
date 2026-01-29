import React from "react";
import MacWindow from "../../window/MacWindow";

const LinkedinTab = () => {
  return (
    <MacWindow windowId={"linkedin"}>
      <div className="w-full h-full flex items-center justify-center bg-[#0a0f1c] p-6">
        <div
          className="
            w-full max-w-3xl
            bg-white/5 backdrop-blur-lg
            border border-white/10
            rounded-2xl
            shadow-xl
            overflow-hidden
            animate-fadeInUp
          "
        >
          {/* Header */}
          <div className="flex items-center gap-5 p-6 bg-linear-to-r from-[#0A66C2] to-[#004182]">
            <div className="w-20 h-20 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
              <a
                href="https://www.linkedin.com/in/sadhnagautam25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/profile.png"
                  alt="LinkedIn"
                  className="w-full h-full bg-cover bg-center cursor-pointer"
                />
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">
                Sadhna Gautam
              </h2>
              <p className="text-sm text-white/80">
                Frontend Developer • React • UI
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 text-white/80 space-y-4">
            <p className="leading-relaxed">
              Passionate Frontend Developer focused on building modern,
              responsive, and user-friendly web experiences. I love working with
              React, clean UI, and subtle animations.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              {["React", "Tailwind CSS", "UI Design", "Animations"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="
        px-4 py-1.5 text-sm font-medium
        text-white/90
        rounded-full
        bg-white/5
        border border-white/10
        backdrop-blur-md
        transition-all duration-300
        hover:bg-white/10
        hover:border-white/20
        hover:-translate-y-0.5
        hover:shadow-[0_6px_20px_rgba(10,102,194,0.25)] cursor-pointer
      "
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>

            {/* CTA */}
            <a
              href="https://www.linkedin.com/in/sadhnagautam25"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 mt-4
                bg-[#0A66C2] hover:bg-[#004182]
                text-white font-medium
                px-5 py-2.5 rounded-lg
                transition-all duration-300
                hover:scale-[1.03]
              "
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </MacWindow>
  );
};

export default LinkedinTab;
