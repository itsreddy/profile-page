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
    <div className="flex justify-center pt-4">
      <img
        className="rounded-lg object-contain md:object-scale-down max-h-96"
        src={`${process.env.baseUrl}/assets/images/prash_profile.jpg`}
        alt=""
      />
    </div>
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={(
          <>
            {'PRASHANTH REDDY\n'}
            <span className="text-primary-500">DUGGIRALA</span>
          </>
        )}
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
