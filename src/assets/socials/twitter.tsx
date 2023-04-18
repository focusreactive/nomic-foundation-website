import * as React from 'react';
import { SVGProps } from 'react';

const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    viewBox='0 0 40 40'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M30.481 14.258a10.5 10.5 0 0 0 2.938-.757 10.46 10.46 0 0 1-2.559 2.528 13.35 13.35 0 0 1-.584 4.563 13.928 13.928 0 0 1-1.825 3.761 15.001 15.001 0 0 1-2.914 3.187c-1.127.923-2.486 1.66-4.076 2.21-1.59.55-3.29.824-5.102.824-2.854 0-5.466-.731-7.836-2.194.369.04.78.06 1.233.06 2.37 0 4.48-.696 6.334-2.089a5.116 5.116 0 0 1-2.97-.976c-.874-.63-1.474-1.435-1.8-2.414.347.05.668.076.963.076.453 0 .9-.056 1.343-.167-1.18-.232-2.156-.794-2.93-1.688a4.604 4.604 0 0 1-1.162-3.11v-.06a5.23 5.23 0 0 0 2.307.62 4.967 4.967 0 0 1-1.659-1.74 4.607 4.607 0 0 1-.616-2.332c0-.888.232-1.71.695-2.467 1.274 1.504 2.825 2.707 4.652 3.61a14.704 14.704 0 0 0 5.869 1.506 5.209 5.209 0 0 1-.127-1.12c0-1.352.498-2.505 1.493-3.458.995-.954 2.199-1.43 3.61-1.43 1.474 0 2.717.514 3.728 1.543a10.278 10.278 0 0 0 3.238-1.18c-.39 1.16-1.137 2.058-2.243 2.694Z' />
  </svg>
);

export default TwitterIcon;
