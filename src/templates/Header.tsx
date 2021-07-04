import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { HeaderSection } from '../layout/HeaderSection';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Header = () => (
  <Background color="bg-gray-100">
    <HeaderSection yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="mailto:pduggirala@ucdavis.edu">
            <a>Email</a>
          </Link>
        </li>
        <li>
          <Link href="https://www.github.com/itsreddy">
            <a target="_blank">GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="http://www.linkedin.com/in/prashred/">
            <a target="_blank">LinkedIn</a>
          </Link>
        </li>
        {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a target="_blank">Resume</a>
          </Link>
        </li> */}
      </NavbarTwoColumns>
    </HeaderSection>
  </Background>
);

export { Header };
