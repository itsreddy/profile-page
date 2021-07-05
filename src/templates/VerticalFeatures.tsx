import React from 'react';

// import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { VerticalFeatureRowClickable } from '../feature/VerticalFeatureRowClickable';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Academic Objective"
    description="Exposure to applications of machine learning in the area of medicine and discussions with Ophthalmologists about potential applications of intelligent robots and sensor systems in the operation theatre has helped me realize how complex multimedia data is rapidly growing in the medical field. It has deeply influenced my determination to pursue research in applications of ML and computer vision in this area on the long term."
  >
    <VerticalFeatureRowClickable
      title="Research"
      description="I have a keen interest in Computer Vision, Deep Learning and Blockchains. I have solved problems in the domains of Medical Diagnosis, Data Analytics, Sentiment Analysis, Time series prediction and also made a robot. You can find a detailed list of some of my research and projects here. Click here to view some of my research"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
      href="/research"
      reverse
    />
    <VerticalFeatureRowClickable
      title="Work"
      description="I have spent most of my summer breaks in the industry, working on exciting projects and trying to complement my knowledge from coursework with meaningful internships which gave me invaluable experience. Click here to view some of my research"
      image="/assets/images/feature.svg"
      imageAlt="Third feature alt text"
      href="/work"
    />
  </Section>
);

export { VerticalFeatures };
