import * as React from 'react';
import { SVGProps } from 'react';

const RethnetIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 35 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M15.8127 4.71094V17.631L0.888672 32.7795V4.71094H15.8127ZM1.58315 33.4995L16.522 18.336L29.6501 18.3397V33.4995H1.58315Z'
      fill='#CFECFC'
      stroke='#AED7F2'
    />
    <path
      d='M33.8887 1.19668L16.5393 18.3339L29.9334 18.3198L33.8887 14.4636V1.19668ZM15.82 17.6388L33.171 0.5H19.7159L15.8165 4.42038L15.82 17.6388Z'
      fill='none'
      stroke='#AED7F2'
    />
    <rect
      width={14.8809}
      height={14.5852}
      transform='matrix(-1 0 0 1 34.3887 0)'
      fill='#AED7F2'
    />
  </svg>
);

export default RethnetIcon;
