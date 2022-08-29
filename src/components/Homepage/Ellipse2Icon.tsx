import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={22} cy={22} r={22} fill='url(#paint0_linear_676_16)' fillOpacity={0.17} />
    <defs>
      <linearGradient id='paint0_linear_676_16' x1={22} y1={0} x2={22} y2={44} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#BE7100' />
        <stop offset={1} stopColor='#FFE200' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
