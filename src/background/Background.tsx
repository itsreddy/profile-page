import React, { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  // fixed?: boolean;
};

const Background = (props: IBackgroundProps) => (
  <div className={`${props.color} `}>{props.children}</div>
);

export { Background };
