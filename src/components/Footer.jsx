import React from "react";

function Footer() {
  const handleYoutubeClick = () => {
    window.open("https://www.youtube.com/@dave-grave", "_blank");
  };

  const yt = (
    <svg
      viewBox="-0.5 -0.5 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="Youtube--Streamline-Iconoir"
      height="24"
      width="24"
      className="text-black dark:text-white"
    >
      <desc>Youtube Streamline Icon: https://streamlinehq.com</desc>
      <path
        d="m8.867437500000001 7.5000625 -2.3930000000000002 1.3674374999999999V6.132625000000001l2.3930000000000002 1.3674374999999999Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      ></path>
      <path
        d="M0.6628125 7.98375v-0.9675c0 -1.9796250000000002 0 -2.9694375 0.6190625000000001 -3.6063125 0.619125 -0.6368125 1.5938125 -0.6644375 3.5431875 -0.7195625 0.92375 -0.026125 1.8673125 -0.0448125 2.6749374999999995 -0.0448125s1.7511875 0.0186875 2.6749374999999995 0.0448125c1.9493125 0.055125 2.9240625 0.0826875 3.5431875 0.7195625s0.6190625000000001 1.6266875 0.6190625000000001 3.6063125v0.9675c0 1.9795625000000001 0 2.9694375 -0.6190625000000001 3.6062499999999997 -0.619125 0.636875 -1.59375 0.6644375 -3.543125 0.719625 -0.9238124999999999 0.026125 -1.867375 0.0448125 -2.6750000000000003 0.0448125s-1.75125 -0.0186875 -2.6750000000000003 -0.0448125c-1.9493125 -0.0551875 -2.924 -0.08274999999999999 -3.543125 -0.719625 -0.6190625000000001 -0.6368125 -0.6190625000000001 -1.6266249999999998 -0.6190625000000001 -3.6062499999999997Z"
        stroke="currentColor"
        stroke-width="1"
      ></path>
    </svg>
  );

  return (
    <div className="py-5 text-center">
      {/* code for some icons for socials */}
      <div className="flex justify-center space-x-4">
        <button
          type="button"
          onClick={handleYoutubeClick}
          className="p-2 bg-gray-400 dark:bg-gray-700 text-white text-lg rounded-md
          flex items-center space-x-2 hover:bg-red-500 dark:hover:bg-red-800 transition"
        >
          {yt}
        </button>
      </div>

      {/* copyright */}
      <p className="py-2 text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()}
        <span> David Huang </span>
      </p>
    </div>
  );
}

export default Footer;
