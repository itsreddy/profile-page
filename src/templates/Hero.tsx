import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
// import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
// import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    {/* <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
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
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section> */}

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={(
          <>
            {'PRASHANTH REDDY\n'}
            <span className="text-primary-500">DUGGIRALA</span>
          </>
        )}
        description="I'm a second year graduate student majoring in Computer Science at University of California, Davis, where I work on AI in general and Deep Learning in particular."
        button={(
          <Link href="https://itsreddy.github.io/data/resume-prashanth-may21.pdf">
            <a target="_blank">
              <Button xl>View Resume</Button>
            </a>
          </Link>
        )}
      />
    </Section>
  </Background>
);

export { Hero };
