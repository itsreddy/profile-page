import React from 'react';

import { VerticalFeatureRowClickable } from '../feature/VerticalFeatureRowClickable';
import { Section } from '../layout/Section';

const ResearchFeatures = () => (
  <Section title="Research Experience">
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
    <VerticalFeatureRowClickable
      title="Generative Adversarial Framework for Eye Image Synthesis and Gaze Estimation"
      description="Eye Image Synthesis using Generative Adversarial Networks: Researched and developed models to generate synthetic  eye  images  for  data  augmentation  using  Deep  Convolutional  GANs  and  analysed  the  performance  of  the DCGAN using a custom metric based on categorical cross entropy loss produced on a pre-trained classifier to quantify the realness of the generated data."
      image="/assets/images/prash_sample-images-crop.gif"
      imageAlt="First feature alt text"
      href="https://drive.google.com/file/d/1EsVt26cu_6SYCiyLcNBucmRdOPORtQOo/view?usp=sharing"
      target="_blank"
      reverse
    />
    <VerticalFeatureRowClickable
      title="Gaze Direction Tracking in Infants"
      description="Development of Convolutional Neural Network based machine learning models for predicting eye-gaze direction. Additionally, development of approaches for 3D head pose estimation based on facial landmarks to determine yaw, roll and pitch from two dimensional images."
      image="/assets/images/prash_Screenshot_45_crop.png"
      imageAlt="First feature alt text"
      href="https://drive.google.com/file/d/1EsVt26cu_6SYCiyLcNBucmRdOPORtQOo/view?usp=sharing"
      target="_blank"
      reverse
    />
  </Section>
);

export { ResearchFeatures };
