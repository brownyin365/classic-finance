import { memo, SVGProps } from 'react';

const Ellipse4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 123 123' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={61.5} cy={61.5} r={61.5} fill='url(#paint0_linear_676_8)' fillOpacity={0.17} />
    <defs>
      <linearGradient id='paint0_linear_676_8' x1={61.5} y1={0} x2={61.5} y2={123} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#BE7100' />
        <stop offset={1} stopColor='#FFE200' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse4Icon);
export { Memo as Ellipse4Icon };
