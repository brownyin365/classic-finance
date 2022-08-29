import { memo, SVGProps } from 'react';

const Rectangle55Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 935 598' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M558.411 232.049C603.02 213.919 847.898 0 896.051 0V0C917.562 0 935 17.438 935 38.9489V295.423C935 438.603 824.949 557.734 682.217 569.062L336.63 596.49C315.613 598.158 294.62 597.475 273.897 593.603C145.346 569.579 -307.979 466.161 343 299.5C435.916 275.712 506.334 253.213 558.411 232.049Z'
      fill='url(#paint0_linear_676_7)'
      fillOpacity={0.5}
    />
    <defs>
      <linearGradient id='paint0_linear_676_7' x1={467.705} y1={0} x2={987} y2={905} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#FF9700' />
        <stop offset={1} stopColor='#700083' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Rectangle55Icon);
export { Memo as Rectangle55Icon };
