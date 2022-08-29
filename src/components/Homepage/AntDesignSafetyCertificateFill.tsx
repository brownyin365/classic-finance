import { memo, SVGProps } from 'react';

const AntDesignSafetyCertificateFill = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M44.0223 8.62773L26.7668 2.74727C26.5586 2.67617 26.2793 2.64062 26 2.64062C25.7207 2.64062 25.4414 2.67617 25.2332 2.74727L7.97773 8.62773C7.55625 8.76992 7.21094 9.25742 7.21094 9.7043V34.2012C7.21094 34.648 7.50039 35.2371 7.85078 35.5164L25.3551 49.1562C25.5328 49.2934 25.7613 49.3645 25.9949 49.3645C26.2285 49.3645 26.4621 49.2934 26.6348 49.1562L44.1391 35.5164C44.4895 35.2422 44.7789 34.6531 44.7789 34.2012V9.7043C44.7891 9.25742 44.4438 8.775 44.0223 8.62773V8.62773ZM35.2676 17.3012L24.4715 32.1648C24.3956 32.2687 24.2962 32.3532 24.1815 32.4115C24.0668 32.4697 23.94 32.5001 23.8113 32.5001C23.6827 32.5001 23.5558 32.4697 23.4411 32.4115C23.3264 32.3532 23.2271 32.2687 23.1512 32.1648L16.7324 23.3289C16.5395 23.0598 16.7324 22.684 17.0625 22.684H19.8656C20.1246 22.684 20.3734 22.8109 20.5258 23.0191L23.8113 27.5387L31.4742 16.9863C31.6266 16.7781 31.8703 16.6512 32.1344 16.6512H34.9375C35.2676 16.6562 35.4605 17.032 35.2676 17.3012V17.3012Z'
      fill='#FFE200'
    />
  </svg>
);

const Memo = memo(AntDesignSafetyCertificateFill);
export { Memo as AntDesignSafetyCertificateFill };