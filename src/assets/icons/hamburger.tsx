import * as React from 'react';
import { SVGProps } from 'react';

const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} {...props}>
    <path d='M4 4.001h16m-16 8h16m-16 8h16' />
  </svg>
);

export default HamburgerIcon;
