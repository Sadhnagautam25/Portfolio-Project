import React from "react";
import MacWindow from "../../window/MacWindow";

const InstagramTab = () => {
  return (
    <MacWindow windowId="instagram">
      <div
        className="w-full h-full flex items-center justify-center bg-neutral-900  bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://w0.peakpx.com/wallpaper/932/988/HD-wallpaper-instagram-asthetic-black-canon-icons-insta-logo-pure-socialmedia.jpg')",
        }}
      >
        <div
          className="
            w-full 
            backdrop-blur-lg
            border border-white/10

            rounded
            p-6
            text-center
            shadow-2xl
            animate-fadeInUp mb-1
            
          "
        >
          {/* Profile Image */}
          <div className="flex justify-center">
            <div
              className="
                w-28 h-28 rounded-full p-0.75
                bg-linear-to-tr from-[#C1352E] via-[#A02A7C] to-[#5B2D8B]
                animate-scaleIn
              "
            >
              <img
                src="/profile.png" // apni photo yaha rakho
                alt="codewithsadhna"
                className="w-full h-full rounded-full object-cover bg-black"
              />
            </div>
          </div>

         {/* Username */}
<h2
  className="
    mt-4 text-2xl font-semibold tracking-wide
    bg-linear-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]
    bg-size-[300%_300%]
    bg-clip-text text-transparent
    animate-instagramGradient
  "
>
  @codewithsadhna
</h2>

          {/* Bio */}
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            Frontend Developer 👩‍💻 <br />
            React • UI • Animations <br />
            Sharing code, projects & dev life ✨
          </p>

          {/* Stats (fake but aesthetic 😄) */}
          <div className="mt-4 flex justify-center gap-6 text-white/80 text-sm">
            <div>
              <p className="font-semibold text-white">3+</p>
              <p className="text-xs">Posts</p>
            </div>
            <div>
              <p className="font-semibold text-white">13</p>
              <p className="text-xs">Followers</p>
            </div>
            <div>
              <p className="font-semibold text-white">16</p>
              <p className="text-xs">Following</p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://www.instagram.com/codewithsadhna/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6 inline-block w-full
              bg-linear-to-tr from-[#C1352E] via-[#A02A7C] to-[#5B2D8B]
              text-white font-medium
              py-2.5 rounded-xl
              transition-all duration-300
              hover:scale-[1.03]
              hover:shadow-[0_0_25px_rgba(160,42,124,0.6)]
            "
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </MacWindow>
  );
};

export default InstagramTab;
