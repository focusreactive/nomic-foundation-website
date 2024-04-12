import * as React from 'react';
import { SVGProps } from 'react';

const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
    className='icon icon-twitter'
  >
    <path d='M9.39663 6.85148L14.8603 0.5H13.5656L8.82148 6.0149L5.03238 0.5H0.662109L6.39197 8.8395L0.662109 15.5H1.9569L6.96679 9.67608L10.9683 15.5H15.3386L9.39631 6.85148H9.39663ZM7.62324 8.91297L7.04269 8.08255L2.42343 1.47476H4.41214L8.13994 6.80746L8.72049 7.63788L13.5662 14.5696H11.5775L7.62324 8.91329V8.91297Z' />
  </svg>
);

export default TwitterIcon;
