import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";

const WordAnimation = ({ word }) => {
  return (
    <span className="word">
      {word.split("").map((letter, index) => (
        <span
          key={index}
          style={{
            animation: `fadeIn 0.5s forwards ${index * 0.3}s`,
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="h-screen text-start items-center flex">
      <h1 data-aos="fade-right" className="text-3xl md:text-5xl lg:text-8xl text-white font-semibold leading-snug text-start">
        Hello, I'm <br />
        M B {" "}
        <WordAnimation word="Subhana" /><br />
        A Frontend {" "}
        <WordAnimation word="Developer" />
      </h1>
    </div>
  );
}


