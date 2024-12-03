import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


export default function Education() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-3xl text-yellow-500 text-center mt-12 mb-5 font-semibold leading-snug">My Education Qualification</h1>
        <div className='text-yellow-500 bg-yellow-500' style={{ height: '3px' }}></div>
        <div data-aos="fade-right" className='my-12'>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#f3a847", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #f3a847" }}
            iconStyle={{ background: "#f3a847", color: "#fff" }}
            icon={<i className="fas fa-graduation-cap"></i>} // Optional icon
          >
            <div className='text-start ms-10 mt-5'>
              <h3 className="text-2xl font-bold text-black">
               Chittagong Mohila Polytechnic Institute</h3>
              <h4 className="text-1xl text-gray-700">Diploma in Engineering</h4>
              <span className=' text-gray-600 my-0 py-0'>Computer Science</span>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#f3a847", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #f3a847" }}
            iconStyle={{ background: "#f3a847", color: "#fff" }}
            icon={<i className="fas fa-graduation-cap"></i>} // Optional icon
          >
            <div className='text-start ms-10 mt-5'>
              <h3 className="text-2xl font-bold text-black">
               Chittagong College </h3>
              <h4 className="text-1xl text-gray-700">Bachelor of Social Science - BSS</h4>
              <span className=' text-gray-600 my-0 py-0'>Political Science</span>
            </div>
          </VerticalTimelineElement>
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-yellow-500 text-center mt-12 mb-5 font-semibold leading-snug">Licenses & certifications</h1>
        <div className='text-yellow-500 bg-yellow-500' style={{ height: '3px' }}></div>
        <div className='my-12'>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#f3a847", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #f3a847" }}
              iconStyle={{ background: "#f3a847", color: "#fff" }}
              icon={<i className="fas fa-graduation-cap"></i>} // Optional icon
            >
              <div className='text-start ms-10 mt-5'>
                <h3 className="text-2xl font-bold text-black">
                  Complete Web Development
                </h3>
                <h4 className="text-1xl text-gray-700">Programming Hero (batch 7)</h4>
                <span className=' text-gray-600 my-0 py-0'>Jan 2023 - june 2023</span>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#f3a847", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #f3a847" }}
              iconStyle={{ background: "#f3a847", color: "#fff" }}
              icon={<i className="fas fa-graduation-cap"></i>} // Optional icon
            >
              <div className='text-start ms-10 mt-5'>
                <h3 className="text-2xl font-bold text-black">
                  IT Career Solution </h3>
                <h4 className="text-1xl text-gray-700">Web Development</h4>
                <span className=' text-gray-600 my-0 py-0'>6 Month 2021</span>
              </div>
            </VerticalTimelineElement>
            
          </VerticalTimeline>
        </div>
      </div>
    </div>
  )
}
