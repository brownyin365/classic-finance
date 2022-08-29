import { memo, SVGProps } from 'react';

const Rectangle85Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 935 1044' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M658.378 310.536C700.245 248.248 795.816 0 870.866 0V0C906.286 0 935 28.7136 935 64.1336V722.437C935 859.443 833.976 975.472 698.273 994.325L359.595 1041.38C323.379 1046.41 286.678 1044.48 252.218 1032.25C102.681 979.215 -276.183 801.872 342.741 524.5C520.787 444.708 616.262 373.194 658.378 310.536Z'
      fill='url(#paint0_linear_676_15)'
      fillOpacity={0.3}
    />
    <defs>
      <linearGradient
        id='paint0_linear_676_15'
        x1={467.5}
        y1={0}
        x2={1520.85}
        y2={1048.69}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#700083' />
        <stop offset={0.553242} stopColor='#FF9700' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Rectangle85Icon);
export { Memo as Rectangle85Icon };
