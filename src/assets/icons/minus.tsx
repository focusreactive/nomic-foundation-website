import * as React from 'react';
import { SVGProps } from 'react';

export const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={10}
    height={2}
    {...props}
    viewBox='0 0 10 2'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0.832031 1H9.16536'
      strokeWidth='1.19048'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default MinusIcon;
