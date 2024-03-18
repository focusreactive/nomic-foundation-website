import * as React from 'react';
import { SVGProps } from 'react';

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={10}
    height={10}
    {...props}
    viewBox='0 0 10 10'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4.9987 0.832031V9.16536M0.832031 4.9987H9.16536'
      strokeWidth='1.19048'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default PlusIcon;
