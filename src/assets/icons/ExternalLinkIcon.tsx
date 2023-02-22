import * as React from 'react';
import { SVGProps } from 'react';

const ExternalLinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={21}
    fill='none'
    {...props}
  >
    <path d='M15 15.5H5v-10m2.844 7.157 6.678-6.68m-4.412 0h4.41v4.412' />
  </svg>
);

export default ExternalLinkIcon;
