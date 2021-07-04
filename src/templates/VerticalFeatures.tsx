import React from 'react';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { VerticalFeatureRowClickable } from '../feature/VerticalFeatureRowClickable';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Academic Objective"
    description="Exposure to applications of machine learning in the area of medicine and discussions with Ophthalmologists about potential applications of intelligent robots and sensor systems in the operation theatre has helped me realize how complex multimedia data is rapidly growing in the medical field. It has deeply influenced my determination to pursue research in applications of ML and computer vision in this area on the long term."
  >
    <VerticalFeatureRowClickable
      title="Research"
      description="I have a keen interest in Computer Vision, Deep Learning and Blockchains. I have solved problems in the domains of Medical Diagnosis, Data Analytics, Sentiment Analysis, Time series prediction and also made a robot. You can find a detailed list of some of my research and projects here. Click this item to view some of my research"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
      href="/research"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
