import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={11} cy={11} r={11} fill='url(#paint0_linear_676_10)' />
    <defs>
      <linearGradient id='paint0_linear_676_10' x1={11} y1={0} x2={11} y2={22} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#BE7100' />
        <stop offset={1} stopColor='#FFE200' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
