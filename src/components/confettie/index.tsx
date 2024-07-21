import React from "react";
import ReactConfetti from "react-confetti";

const MyConfetti = () => {
  return (
    <div id="confettiContainer">
      <ReactConfetti width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
};

export default MyConfetti;
