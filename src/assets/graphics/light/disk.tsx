import * as React from 'react';
import { SVGProps } from 'react';

const Disk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    {...props}
  >
    <rect
      width='24'
      height='24'
      rx='12'
      fill='url(#paint0_linear_7041_59317)'
    />
    <circle
      cx='12'
      cy='12'
      r='4'
      fill='white'
    />
    <defs>
      <linearGradient
        id='paint0_linear_7041_59317'
        x1='-11.1983'
        y1='29.5627'
        x2='34.5837'
        y2='15.6073'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='white' />
        <stop
          offset='0.401302'
          stopColor='#CACAD2'
        />
        <stop
          offset='1'
          stopColor='#FFE2D4'
        />
      </linearGradient>
    </defs>
  </svg>
);

export default Disk;
