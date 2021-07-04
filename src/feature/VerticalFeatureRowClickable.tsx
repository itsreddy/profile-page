import React from 'react';

import className from 'classnames';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  href?: string;
  target?: string;
};

const VerticalFeatureRowClickable = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className('mt-20', 'flex', 'flex-wrap', 'items-center', {
    'flex-row-reverse': props.reverse,
  });

  // const VfrWrap = React.forwardRef(({onClick, href}, ref) => {
  //   return (

  //   )
  // })

  return (
    // <VfrWrap/>
    <a href={props.href} target={props.target}>
      <div className={verticalFeatureClass}>
        <div className="w-full sm:w-1/2 sm:px-6">
          <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
          <div className="mt-6 text-xl leading-9">{props.description}</div>
        </div>

        <div className="w-full sm:w-1/2 p-6">
          <img src={`${process.env.baseUrl}${props.image}`} alt={props.imageAlt} />
        </div>
      </div>
    </a>
  );
};

export { VerticalFeatureRowClickable };
