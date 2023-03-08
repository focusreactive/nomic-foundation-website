import * as React from 'react';
import { SVGProps } from 'react';

const SlangIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 65 65'
    fill='none'
    {...props}
  >
    <path
      fill='#FADECA'
      stroke='#F2C09B'
      strokeWidth={1.90588}
      d='M55.769 34.953v28.892H.953V8.978h28.444v25.967h.952l25.42.008Z'
    />
    <path
      stroke='#F2C09B'
      strokeWidth={1.90588}
      d='M63.844.953H36.832L29.4 8.425l.008 26.519 26.898-.029 7.538-7.349V.953Z'
    />
    <path fill='#F2C09B' d='M64.797 0H36.436v27.798h28.36z' />
  </svg>
);

export default SlangIcon;
