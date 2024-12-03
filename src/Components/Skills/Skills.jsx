import React, { useEffect } from 'react';
import "aos/dist/aos.css";  
import Aos from "aos";

export default function Skills() {
  useEffect(()=>{
    Aos.init({duration:3000});
},[]);
  return (
    <div className=''>
      <div id='skills' className='px-5 md:px-20 py-8'>
            <div className='text-center my-5'>
                <h4 className='text-4xl font-semibold text-yellow-500 mt-12'>My Skills</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5'>
                <div className='card rounded-none border-2 border-yellow-500 p-4 hover:bg-yellow-500 text-white' data-aos="fade-up">
                    <img src="" alt="" />
                    <h5 className="text-2xl mb-2 font-semibold">
                    Html</h5>
                    <p>4+ Years of Experience</p>
                </div>
                <div className='card rounded-none border-2 border-yellow-500 p-4 hover:bg-yellow-500 text-white' data-aos="fade-up">
                    <img src="" alt="" />
                    <h5 className="text-2xl mb-2 font-semibold">
                    CSS</h5>
                    <p>4+ Years of Experience</p>
                </div>
                <div className='card rounded-none border-2 border-yellow-500 p-4 hover:bg-yellow-500 text-white' data-aos="fade-up">
                    <img src="" alt="" />
                    <h5 className="text-2xl mb-2 font-semibold">
                    Bootstrap</h5>
                    <p>4+ Years of Experience</p>
                </div>
                <div className='card rounded-none border-2 border-yellow-500 p-4 hover:bg-yellow-500 text-white' data-aos="fade-up">
                    <img src="" alt="" />
                    <h5 className="text-2xl mb-2 font-semibold">
                    Figma (UI Design)</h5>
                    <p>4+ Years of Experience</p>
                </div>
                <div className='card rounded-none border-2 border-yellow-500 p-4 hover:bg-yellow-500 text-white' data-aos="fade-up">
                    <img src="" alt="" />
                    <h5 className="text-2xl mb-2 font-semibold">
                    Tailwind CSS</h5>
                    <p>3+ Years of Experience</p>
                </div>
                <div className='card rounded-none border-2 border-yellow-500 p-4 hover:bg-yellow-500 text-white' data-aos="fade-up">
                    <img src="" alt="" />
                    <h5 className="text-2xl mb-2 font-semibold">
                    JavaScript</h5>
                    <p>3+ Years of Experience</p>
                </div>
                <div className='card rounded-none border-2 border-yellow-500 p-4 hover:bg-yellow-500 text-white' data-aos="fade-up">
                    <img src="" alt="" />
                    <h5 className="text-2xl mb-2 font-semibold">
                    React js</h5>
                    <p>2+ year of experience</p>
                </div>
                <div className='card rounded-none border-2 border-yellow-500 p-4 hover:bg-yellow-500 text-white' data-aos="fade-up">
                    <img src="" alt="" />
                    <h5 className="text-2xl mb-2 font-semibold">
                    Next js</h5>
                    <p>1+ Years of experience</p>
                </div>
                <div className='card rounded-none border-2 border-yellow-500 p-4 hover:bg-yellow-500 text-white' data-aos="fade-up">
                    <img src="" alt="" />
                    <h5 className="text-2xl mb-2 font-semibold">
                    Odoo (Frontend)</h5>
                    <p>1+ Years of experience</p>
                </div>
                <div className='card rounded-none border-2 border-yellow-500 p-4 hover:bg-yellow-500 text-white' data-aos="fade-up">
                    <img src="" alt="" />
                    <h5 className="text-2xl mb-2 font-semibold">
                    Firebase</h5>
                    <p>1+ Years of experience</p>
                </div>
                <div className='card rounded-none border-2 border-yellow-500 p-4 hover:bg-yellow-500 text-white' data-aos="fade-up">
                    <img src="" alt="" />
                    <h5 className="text-2xl mb-2 font-semibold">
                    MongoDB</h5>
                    <p>1+ Years of experience</p>
                </div>
                <div className='card rounded-none border-2 border-yellow-500 p-4 hover:bg-yellow-500 text-white' data-aos="fade-up">
                    <img src="" alt="" />
                    <h5 className="text-2xl mb-2 font-semibold">
                    Node js</h5>
                    <p>1+ Years of experience</p>
                </div>
                <div className='card rounded-none border-2 border-yellow-500 p-4 hover:bg-yellow-500 text-white' data-aos="fade-up">
                    <img src="" alt="" />
                    <h5 className="text-2xl mb-2 font-semibold">
                    Express js</h5>
                    <p>1+ Years of experience</p>
                </div>
                <div className='card rounded-none border-2 border-yellow-500 p-4 hover:bg-yellow-500 text-white' data-aos="fade-up">
                    <img src="" alt="" />
                    <h5 className="text-2xl mb-2 font-semibold">
                    Api</h5>
                    <p>1+ Years of experience</p>
                </div>
                <div className='card rounded-none border-2 border-yellow-500 p-4 hover:bg-yellow-500 text-white' data-aos="fade-up">
                    <img src="" alt="" />
                    <h5 className="text-2xl mb-2 font-semibold">
                    TypeScript</h5>
                    <p>1 years of experience</p>
                </div>
                <div className='card rounded-none border-2 border-yellow-500 p-4 hover:bg-yellow-500 text-white' data-aos="fade-up">
                    <img src="" alt="" />
                    <h5 className="text-2xl mb-2 font-semibold">
                    Redux</h5>
                    <p>1 Years of experience</p>
                </div>
            </div>
        </div>
    </div>
  )
}
