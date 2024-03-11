import * as React from 'react';
import { SVGProps } from 'react';

const DiskDark = (props: SVGProps<SVGSVGElement>) => (
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
      fill='url(#paint0_linear_7074_28701)'
    />
    <circle
      cx='12'
      cy='12'
      r='4'
      fill='#191B22'
    />
    <defs>
      <linearGradient
        id='paint0_linear_7074_28701'
        x1='-5.15348'
        y1='28.7696'
        x2='35.1267'
        y2='15.1189'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#20232A' />
        <stop
          offset='0.635417'
          stop-color='#31343D'
        />
      </linearGradient>
    </defs>
  </svg>
);

export default DiskDark;
