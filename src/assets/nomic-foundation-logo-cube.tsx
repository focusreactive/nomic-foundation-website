import React, { SVGProps } from 'react';

const NomicFoundationCube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={37}
    height={33}
    fill='none'
    {...props}
  >
    <path
      fill='#888890'
      fillRule='evenodd'
      d='M17.511 15.475H.445c-.184 0-.3-.2-.206-.36L8.635.792A.955.955 0 0 1 9.46.318h16.375c.184 0 .299.2.207.359l-8.53 14.798Zm6.062-13.612c.053-.03.032-.111-.03-.111H9.997a.478.478 0 0 0-.413.239l-6.78 11.744c-.03.053.03.112.082.082L23.573 1.862Z'
      clipRule='evenodd'
    />
    <path
      fill='#888890'
      d='M25.835 32.318a.239.239 0 0 0 .207-.358l-8.53-14.795H.438a.24.24 0 0 0-.206.36l8.366 14.32a.955.955 0 0 0 .825.473h16.412Z'
    />
    <path
      fill='#888890'
      fillRule='evenodd'
      d='m18.965 16.351 8.484-14.697a.239.239 0 0 1 .414 0l8.208 14.22a.96.96 0 0 1 0 .956l-8.208 14.22a.239.239 0 0 1-.414 0l-8.484-14.7Zm8.691 11.967c0 .061.081.083.112.03l6.786-11.757a.478.478 0 0 0 0-.478L27.767 4.356c-.03-.053-.111-.032-.111.03v23.932Z'
      clipRule='evenodd'
    />
  </svg>
);

export default NomicFoundationCube;
