import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

export default function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className='h-screen items-center flex'>
      <div className="lg:grid grid-cols-2">
        <div data-aos="fade-right" className="text flex items-center">
          <h1 className='text-4xl lg:text-8xl text-yellow-500 font-semibold leading-snug text-start flex items-center'>About Me</h1>
        </div>
        <div data-aos="fade-left" className="description">
          <h4 className="text-start text-yellow-500 text-2xl font-bold mb-3">Introduce Myself</h4>
          <p className="text-start text-white">
            Hello there! My name is M B Subhana, and I grew up in the vibrant city of Chattogram, Bangladesh. I am currently pursuing a Diploma in Computer Science and Engineering (CSE) at a polytechnic institute and also studying BSS (Honors) in Political Science. <br/>

            My journey into coding began with self-learning, but I soon realized the importance of structured guidance. I enrolled in a comprehensive web development course, which provided me with the foundation and confidence to dive into this field. Since then, I have been working on numerous web development projects and thoroughly enjoy the process of coding. <br/>

            I have 4 months of internship experience in Frontend Development at Techfinna and 10 months of professional experience as a Frontend Engineer at TekGenio, where I specialized in creating responsive and dynamic user interfaces. <br/>

            Additionally, I have contributed to the education sector by recording a course on Frontend Development with React.js for the EPaathshala online platform, helping others kickstart their journey in web development. <br/>

            Despite studying a different subject initially, coding has become my passion and a key focus of my career. In my free time, I enjoy exploring diverse topics about the world, especially in technology and global developments.
          </p>
          <h4 className="text-start text-yellow-500 text-2xl font-bold my-3">Personal Information</h4>
          <div className='text-start text-white'><u className='font-bold me-2'>Name:</u> M B Subhana</div>
          <div className='text-start text-white'><u className='font-bold me-2'>Email:</u> mbsubhana03@gmail.com</div>
          <div className='text-start text-white'><u className='font-bold me-2'>Phone:</u> +880 1880684481</div>
          <div className='text-start text-white'><u className='font-bold me-2'>Address:</u> Chattogram, Bangladesh</div>
          <div className="icons flex space-x-5 mt-5">
            <a className="text-2xl text-yellow-500" href="https://www.linkedin.com/in/m-b-subhana-858655227/"><FaLinkedin /></a>
            <a className="text-2xl text-yellow-500" href="https://www.facebook.com/m.b.subhana.2024"><FaFacebook /></a>
            <a className="text-2xl text-yellow-500" href="https://www.instagram.com/mbsubhana03/"><FaInstagramSquare /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
