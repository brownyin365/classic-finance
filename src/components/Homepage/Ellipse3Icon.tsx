import { memo, SVGProps } from 'react';

const Ellipse3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 138 138' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={69} cy={69} r={69} fill='url(#paint0_linear_676_11)' fillOpacity={0.1} />
    <defs>
      <linearGradient id='paint0_linear_676_11' x1={69} y1={0} x2={69} y2={138} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#BE7100' />
        <stop offset={1} stopColor='#FFE200' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse3Icon);
export { Memo as Ellipse3Icon };
