import React from 'react';

import className from 'classnames';

type IVerticalFeatureProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  href?: string;
  target?: string;
};

const WorkFeatureClickable = (props: IVerticalFeatureProps) => {
  const verticalFeatureClass = className(
    'transition duration-500',
    'rounded-3xl',
    'hover:bg-gray-100',
    'mt-20',
    'p-6',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  return (
    // <VfrWrap/>
    <a href={props.href} target={props.target}>
      <div className={verticalFeatureClass}>
        <div className="w-full sm:w-1/2 sm:px-6">
          <h3 className="text-xl text-gray-900 font-semibold">{props.title}</h3>
          <div className="mt-6 text-base line-height: 1 leading-9">{props.description}</div>
        </div>

        <div className="w-full sm:w-1/2 p-6">
          <img
            className="rounded-lg"
            src={`${process.env.baseUrl}${props.image}`}
            alt={props.imageAlt}
          />
        </div>
      </div>
    </a>
  );
};

export { WorkFeatureClickable };
