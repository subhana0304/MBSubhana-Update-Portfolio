import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experienced() {
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);
  return (
    <div>
      <div data-aos="fade-in">
        <h1 className="text-3xl text-yellow-500 text-center mt-16 lg:mt-12 mb-5 font-semibold leading-snug">My Experience</h1>
        <VerticalTimeline>
          {/* Timeline Item 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#eab308", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #eab308" }}
            iconStyle={{ background: "#eab308", color: "#fff" }}
            icon={<i className="fas fa-laptop-code"></i>}
          >
            <h3 className="text-2xl font-bold text-white">TekGenio</h3>
            <h4 className="text-1xl font-semibold text-gray-700">Frontend Software Engineer</h4>
            <span className=' text-gray-600 my-0 py-0'>November 2023 - August 2024 (10 mon)</span>
            <span className=' text-gray-600'>Remote</span>
          </VerticalTimelineElement>

          {/* Timeline Item 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#eab308", color: "#fff" }}
            icon={<i className="fas fa-graduation-cap"></i>}
          >
            <h3 className="text-2xl font-bold text-yellow-500">TechFinna</h3>
            <h4 className="text-1xl font-semibold text-gray-700">Frontend Developer | Internship</h4>
            <span className=' text-gray-600 my-0 py-0'>July 2023 to Oct 2023 (4 mon)</span>
            <span className=' text-gray-500'>Remote</span>
          </VerticalTimelineElement>

          {/* Timeline Item 3 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#eab308", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #eab308" }}
            iconStyle={{ background: "#eab308", color: "#fff" }}
            icon={<i className="fas fa-laptop-code"></i>}
          >
            <h3 className="text-2xl font-bold text-white">Epaathshalabd</h3>
            <h4 className="text-1xl font-semibold text-gray-700">Web Developer & Designer</h4>
            <span className=' text-gray-600 my-0 py-0'>Jul 2023 - Nov 2023 (5 mon)</span>
            <span className=' text-gray-600'>Remote</span>
          </VerticalTimelineElement>

          {/* Timeline Item 4 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#eab308", color: "#fff" }}
            icon={<i className="fas fa-graduation-cap"></i>}
          >
            <h3 className="text-2xl font-bold text-yellow-500">Freelancer.com</h3>
            <h4 className="text-1xl font-semibold text-gray-700">Web Developer & UI Designer (Freelancer)</h4>
            <span className=' text-gray-600 my-0 py-0'>Jan 2022 to Oct 2022 (10 mon)</span>
            <span className=' text-gray-500'>Remote</span>
          </VerticalTimelineElement>
        </VerticalTimeline>

      </div>
    </div>
  )
}
