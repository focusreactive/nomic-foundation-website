import * as React from 'react';
import { SVGProps } from 'react';

export const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={8}
    height={19}
    {...props}
    viewBox='0 0 8 19'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M0.0684453 17.95L5.04645 9.78L0.0684453 1.629L1.94945 0.831L7.40245 9.78L1.94945 18.748L0.0684453 17.95Z' />
  </svg>
);

export default Arrow;
