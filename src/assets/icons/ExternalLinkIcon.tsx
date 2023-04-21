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
    <path
      stroke='currentColor'
      d='M15 15.5H5v-10M7.844 12.657l6.678-6.68M10.11 5.977h4.41v4.412'
    />
  </svg>
);
export default ExternalLinkIcon;
