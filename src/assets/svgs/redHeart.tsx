import React from "react";

const RedHeart = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      id="Heart"
      width={26}
      height={26}
      style={{
        transform: "translateY(-3px)",
      }}
    >
      <path
        fill="#ff0012"
        fill-rule="evenodd"
        d="M12.65 16.684a12.488 12.488 0 0 0 0 17.653l1.758 1.765 17.588 17.653 17.587-17.653 1.759-1.765a12.488 12.488 0 0 0 0-17.653 12.376 12.376 0 0 0-17.588 0l-1.758 1.765-1.759-1.765a12.376 12.376 0 0 0-17.587 0z"
        className="colorff143a svgShape"
      ></path>
      <path
        fill="none"
        stroke="#ffffff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.999"
        d="M14.14 29.77a8.497 8.497 0 0 1 0-8.497 8.497 8.497 0 0 1 7.36-4.249"
        opacity=".4"
        className="colorStrokeffffff svgStroke"
      ></path>
      <path
        fill="#d3000f"
        fill-rule="evenodd"
        d="M21.444 13.015a12.372 12.372 0 0 0-8.794 3.666 12.634 12.634 0 0 0-1.347 1.62c.02-.02.02-.023.032-.035a11.297 11.297 0 0 1 16.053 0l2.372 2.392 1.605-1.613c.206-.207.423-.394.64-.581L30.24 16.68a12.372 12.372 0 0 0-8.794-3.667zm21.103 0c-2.592 0-5.176.826-7.365 2.452a11.286 11.286 0 0 1 11.469 2.8 11.397 11.397 0 0 1 0 16.111l-1.605 1.613-15.374 15.432 2.323 2.332L49.583 36.1l1.757-1.766a12.49 12.49 0 0 0 0-17.654 12.372 12.372 0 0 0-8.793-3.666z"
        className="colord30045 svgShape"
      ></path>
    </svg>
  );
};

export default RedHeart;
