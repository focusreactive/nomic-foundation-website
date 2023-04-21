import * as React from 'react';
import { SVGProps } from 'react';

const TheGraphLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 87 70'
    fill='none'
    {...props}
  >
    <g fill='#B0B0B8' opacity={0.6}>
      <path d='M16.014 43.027c-2.166 0-4.26-.42-6.231-1.262a16.016 16.016 0 0 1-5.092-3.429 15.85 15.85 0 0 1-3.428-5.091A16.017 16.017 0 0 1 0 27.014c0-2.156.42-4.26 1.263-6.231A16.017 16.017 0 0 1 4.69 15.69a15.85 15.85 0 0 1 5.092-3.428A16.018 16.018 0 0 1 16.013 11c2.156 0 4.26.42 6.232 1.263 1.909.81 3.623 1.96 5.091 3.428a15.848 15.848 0 0 1 3.429 5.092 16.018 16.018 0 0 1 1.262 6.23c0 2.156-.42 4.26-1.262 6.232a16.016 16.016 0 0 1-3.429 5.091 15.849 15.849 0 0 1-5.091 3.429 15.942 15.942 0 0 1-6.231 1.262Zm0-26.853c-5.975 0-10.83 4.855-10.83 10.83 0 5.974 4.866 10.84 10.84 10.84s10.84-4.866 10.84-10.84c-.01-5.975-4.876-10.83-10.85-10.83ZM34.717 16.102a2.525 2.525 0 1 0 0-5.05 2.525 2.525 0 0 0 0 5.05ZM18.673 59a2.573 2.573 0 0 1-1.827-.76 2.584 2.584 0 0 1 0-3.664l10.778-10.779a2.583 2.583 0 0 1 3.665 0 2.583 2.583 0 0 1 0 3.665L20.51 58.24c-.513.514-1.18.76-1.837.76ZM50.726 29.406c0-.093-.03-.144-.123-.144h-1.879c-.092 0-.133.04-.133.133v.668c-.565-.524-.893-.74-1.386-.863-1.232-.308-2.32-.02-3.244.822-1.16 1.077-1.509 2.432-1.18 3.952.39 1.776 1.991 3.13 3.931 2.925.637-.072 1.212-.308 1.673-.76.052-.05.083-.133.196-.112-.01.43.03.852-.052 1.283-.154.729-.688 1.232-1.447 1.314-.79.092-1.54-.134-1.889-.873-.103-.215-.216-.277-.431-.267-.4.02-.8 0-1.201.01-.185 0-.36-.03-.544.021-.02.144 0 .267.03.39.278 1.12 1.007 1.838 2.064 2.228 1.026.38 2.074.39 3.11.072 1.242-.37 2.023-1.191 2.34-2.444.103-.4.144-.8.144-1.221v-6.96c.021-.051.021-.113.021-.174ZM46.805 35c-1.232-.01-1.981-.944-1.981-1.991.01-1.13.841-1.971 1.95-1.982 1.129-.01 1.97.842 1.97 1.992.011 1.119-.83 1.991-1.94 1.981ZM75.896 30.052c-1.324-1.283-3.377-1.293-4.537-.051-.02.02-.041.02-.082-.01 0-.154-.01-.339 0-.514.01-.174-.062-.215-.226-.215-.513.01-1.037 0-1.55 0-.41 0-.36-.041-.36.36V40.05c.01.215.01.225.237.225h1.653c.236 0 .246 0 .246-.256V36.19c.349.38.698.626 1.108.79 1.253.493 2.731.134 3.696-.924a4.114 4.114 0 0 0 1.067-2.31c.154-1.426-.205-2.689-1.252-3.695Zm-.996 3.85c-.256.821-.954 1.334-1.817 1.334-.985 0-1.755-.636-1.93-1.622-.071-.4-.06-.79.062-1.18.267-.893 1.027-1.448 1.93-1.406.924.04 1.642.677 1.827 1.59.072.442.062.863-.072 1.284ZM52.245 19.428c.811-.934 1.797-1.15 2.874-.955 1.232.226 1.92 1.037 2.218 2.218.092.369.133.739.133 1.118v4.332c.02.154-.04.226-.195.206H55.633c-.288 0-.288.02-.288-.278V22.21c0-.236-.02-.473-.072-.709-.195-.985-1.077-1.427-2.001-1.016-.37.164-.627.452-.79.821-.185.411-.237.852-.237 1.294V26.069c0 .267 0 .267-.256.267h-1.653c-.216-.01-.216-.01-.226-.246V15.045c0-.052.01-.113 0-.165-.02-.174.062-.215.226-.215.554.01 1.098 0 1.653 0 .256 0 .267 0 .267.267v4.075c-.01.133-.01.236-.01.42ZM81.203 30.032c.955-.996 2.094-1.17 3.316-.75 1.047.36 1.56 1.201 1.786 2.248.072.329.082.668.082.996v4.342c0 .103-.03.165-.144.165h-1.847c-.093 0-.144-.041-.144-.134v-3.983c0-.256-.01-.513-.072-.77-.123-.503-.37-.913-.893-1.057-.554-.154-1.078-.03-1.499.37-.41.38-.554.893-.595 1.427-.02.236-.01.472-.01.708v3.14c0 .288 0 .288-.277.288h-1.622c-.236 0-.236 0-.247-.256V25.72c0-.42-.04-.359.36-.359h1.457c.35 0 .319-.02.319.308v4.014c.01.113-.01.226.03.349ZM66.596 29.252c-.596 0-1.19.01-1.786 0-.154 0-.185.061-.175.195.01.184 0 .359 0 .605-.082-.061-.102-.082-.133-.102-.596-.627-1.345-.893-2.187-.863-1.088.031-1.98.503-2.648 1.355-.873 1.109-1.109 2.372-.8 3.727.256 1.15.882 2.053 1.93 2.628 1.19.657 2.822.513 3.725-.493.02-.02.052-.041.103.01 0 .154.01.339 0 .524-.01.154.062.205.216.195.513-.01 1.036 0 1.55 0 .39 0 .37.061.37-.36v-7.247c.02-.133-.042-.174-.165-.174Zm-1.889 4.609c-.267.883-.985 1.396-1.92 1.375-.882-.02-1.59-.595-1.806-1.478a2.508 2.508 0 0 1 .04-1.376c.278-.862 1.017-1.396 1.91-1.354.893.03 1.591.605 1.807 1.488.051.195.082.4.072.606.01.256-.031.503-.103.739ZM67.253 21.522c-.339-1.437-1.18-2.443-2.608-2.915a4.06 4.06 0 0 0-1.888-.165c-1.51.206-2.608.976-3.213 2.382-.329.77-.4 1.58-.247 2.412.236 1.294.893 2.3 2.105 2.854 1.519.698 3.018.585 4.434-.318a3.455 3.455 0 0 0 1.325-1.591c.04-.103.112-.206.092-.36H65.19c-.103 0-.154.062-.195.134a1.385 1.385 0 0 1-.493.451 2.29 2.29 0 0 1-1.376.257c-.995-.103-1.652-.708-1.765-1.653.133-.05.256-.03.37-.03h5.44c.226 0 .226-.01.236-.226a6.131 6.131 0 0 0-.154-1.232Zm-5.81.02c.102-.831.913-1.426 1.868-1.406.862.02 1.622.657 1.684 1.407h-3.552ZM48.283 24.437v1.694c0 .154-.103.174-.206.195-.359.092-.728.113-1.088.113-.523 0-1.036-.062-1.509-.288-.831-.38-1.303-1.026-1.467-1.92a4.119 4.119 0 0 1-.052-.707V20.71c0-.257 0-.267-.267-.267-.37 0-.729-.01-1.098 0-.154 0-.205-.041-.205-.205.01-.493.01-.996 0-1.489 0-.143.05-.184.184-.184.39.01.78-.01 1.16.01.175 0 .226-.052.226-.216-.01-.564 0-1.119 0-1.683 0-.247 0-.257.247-.257h1.683c.154 0 .205.041.205.205-.01.544 0 1.078 0 1.622 0 .37-.03.34.36.34h1.621c.154 0 .237.03.226.215-.01.482-.01.975 0 1.457 0 .185-.072.216-.225.206-.575-.01-1.14 0-1.715 0-.246 0-.256 0-.256.246v2.453c0 .175.02.35.05.514.083.441.34.708.77.81.401.093.791.062 1.181-.03.041-.031.093-.052.175-.02ZM55.212 30.33c.123-.072.143-.175.195-.247.513-.729 1.345-1.057 2.279-.872.102.02.174.061.174.195v1.98c-.174.011-.308-.05-.451-.081-1.11-.236-1.94.328-2.146 1.447-.04.205-.051.4-.051.606v3.264c0 .062-.01.133 0 .195.02.175-.072.216-.226.216-.565-.01-1.119 0-1.683 0-.226 0-.226-.01-.226-.236v-7.31c0-.163.04-.225.215-.225.575.01 1.14.01 1.715 0 .174 0 .215.072.215.226-.01.256-.01.534-.01.841Z' />
    </g>
  </svg>
);

export default TheGraphLogo;
