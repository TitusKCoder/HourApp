import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Check out the Timesquare!",
          "Spend an hour on HourApp!",
          "Engage in hot topics!",
          "Here To Connect?",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
