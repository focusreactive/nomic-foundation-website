import * as React from 'react';
import { SVGProps } from 'react';

const CrossIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} {...props}>
    <path d='M4 4.006 20 20m-16-.007L20 4' />
  </svg>
);

export default CrossIcon;
