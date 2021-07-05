import React from 'react';

import { Meta } from '../layout/Meta';
import { Config } from '../utils/Config';
import { Footer } from './Footer';
import { Header } from './Header';
import { WorkFeatures } from './WorkFeatures';

const Work = () => (
  <div className="antialiased text-gray-600">
    <Meta title={Config.title} description={Config.description} />
    <Header />
    <WorkFeatures />
    <Footer />
  </div>
);

export { Work };
