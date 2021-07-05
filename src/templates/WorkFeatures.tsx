import React from 'react';

import { Section } from '../layout/Section';

const WorkFeatures = () => (
  <Section title="Work Experience">
    <a href="https://lvpmitra.com/#home" target="_blank" rel="noreferrer">
      <div className="transition duration-500 rounded-3xl hover:bg-gray-100 mt-20 p-6 flex flex-wrap items-center flex-row-reverse">
        <div className="w-full sm:w-1/2 sm:px-6">
          <h3 className="text-xl text-gray-900 font-semibold">
            Machine Learning Intern/Research Fellow, Center for Innovation, L. V. Prasad Eye
            Institute, India (May 2018 - May 2019)
          </h3>
          <div className="mt-6 text-base line-height: 1 leading-9">
            LVPEI Center for Innovation evolved out of LVP-MITRA program, a collaboration between
            {' '}
            <a href="https://www.lvpei.org/about-us" target="_blank" rel="noreferrer">
              L V Prasad Eye Institute
            </a>
            {' '}
            and
            {' '}
            <a href="https://www.media.mit.edu/" target="_blank" rel="noreferrer">
              MIT Media Lab
            </a>
            {' '}
            to build and deploy next generation of eye care technologies powered by AI. I worked on
            a device called
            {' '}
            <a href="https://lvpmitra.com/pediatric-perimeter#introduction-1" target="_blank" rel="noreferrer">
              Pediatric Perimeter
            </a>
            , a one-of-a-kind device to quantify visual field extent and developmental delays in
            infants. Specifically, my work was on video based eye gaze estimation of infants to
            automate the calculations of Visual Field Extent and Delay in reaction to light stimuli.
            Since it was to be used on infants, I developed machine learning algorithms for
            non-intrusive and pose-invariant eye-gaze estimation. Details in the Research section.
          </div>
        </div>

        <div className="w-full sm:w-1/2 p-6">
          <img
            className="rounded-lg"
            src={`${process.env.baseUrl}/assets/images/prash_lvpei_main_logo.png`}
            alt="Experience"
          />
        </div>
      </div>
    </a>

    <a href="https://leoforce.com/" target="_blank" rel="noreferrer">
      <div className="transition duration-500 rounded-3xl hover:bg-gray-100 mt-20 p-6 flex flex-wrap items-center flex-row-reverse">
        <div className="w-full sm:w-1/2 sm:px-6">
          <h3 className="text-xl text-gray-900 font-semibold">
            Summer Intern, Leoforce Inc., India (June - July, 2017)
          </h3>
          <div className="mt-6 text-base line-height: 1 leading-9">
            Monitored and profiled slow, unresponsive queries and stored procedures using MySQL
            Server and Workbench to potentially improve query execution time.
          </div>
        </div>

        <div className="w-full sm:w-1/2 p-6">
          <img
            className="rounded-lg"
            src={`${process.env.baseUrl}/assets/images/prash_leoforce_logo.png`}
            alt="Experience"
          />
        </div>
      </div>
    </a>

    <a href="https://www.osi-systems.com/" target="_blank" rel="noreferrer">
      <div className="transition duration-500 rounded-3xl hover:bg-gray-100 mt-20 p-6 flex flex-wrap items-center flex-row-reverse">
        <div className="w-full sm:w-1/2 sm:px-6">
          <h3 className="text-xl text-gray-900 font-semibold">
            Summer Intern, OSI Systems Inc., India (May - July, 2016)
          </h3>
          <div className="mt-6 text-base line-height: 1 leading-9">
            Worked with the
            {' '}
            <a href="https://www.rapiscansystems.com/en/" target="_blank" rel="noreferrer">
              Rapiscan
            </a>
            {' '}
            team on AWK and Shell scripting languages with understanding of VB Script for text
            processing. Developed eﬃcient algorithms for testing the baggage ﬂow control in airport
            security screening machine systems and achieved a signiﬁcant improvement in performance
            from before.
          </div>
        </div>

        <div className="w-full sm:w-1/2 p-6">
          <img
            className="rounded-lg"
            src={`${process.env.baseUrl}/assets/images/prash_rapiscan.png`}
            alt="Experience"
          />
        </div>
      </div>
    </a>
  </Section>
);

export { WorkFeatures };
