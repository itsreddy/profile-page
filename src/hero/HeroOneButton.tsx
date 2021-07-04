import React, { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl pl-4 pr-4 mt-4 mb-8 justify-between">{props.description}</div>
    <div className="text-xl pl-4 pr-4 mb-10 justify-between">
      Currently researching deep stacked autoencoder based networks and progressive training
      techniques for unified representation learning from multiple modalities of data, specifically
      images and time-series data for applications like multi-modal transport and synthetic data
      generation in the health domain under the guidance of Prof.
      {' '}
      <a
        className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
        href="https://www.math.ucdavis.edu/~strohmer/"
        target="_blank"
        rel="noreferrer"
      >
        Thomas Strohmer
      </a>
      .
    </div>
    {props.button}
  </header>
);

export { HeroOneButton };
