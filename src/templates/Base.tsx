import React from 'react';

import { Meta } from '../layout/Meta';
import { Config } from '../utils/Config';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={Config.title} description={Config.description} />
    <Header />
    <Hero />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
