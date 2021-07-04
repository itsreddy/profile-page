import React from 'react';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { VerticalFeatureRowClickable } from '../feature/VerticalFeatureRowClickable';
import { Section } from '../layout/Section';
import { Header } from '../templates/Header';

const ResearchVerticalFeatures = () => (
  <div>
    <Header />
    <Section title="Research">
      <VerticalFeatureRowClickable
        title="Predicting ASD diagnosis in children with synthetic and image-based eye gaze data"
        description="In this journal paper, we propose two machine learning methods, synthetic saccade approach and image based approach, to automatically classify autism spectrum disorder (ASD) given children’s eye gaze data collected from free-viewing tasks of natural images.
           The first approach uses a generative model of synthetic saccade patterns to represent the baseline scan-path from a typical non-ASD individual and combines it with the real scan-path as well as other auxiliary data as inputs to a deep learning classifier. The second approach adopts a more holistic image-based approach by feeding the input image and a sequence of fixation maps into a convolutional or recurrent neural network."
        image="/assets/images/prash-ASD-gaze.png"
        imageAlt="Third feature alt text"
        href="https://www.sciencedirect.com/science/article/abs/pii/S0923596521000357#aep-article-footnote-id1"
        target="_blank"
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
  </div>
);

export default ResearchVerticalFeatures;
