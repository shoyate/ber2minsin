import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 80 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H80' stroke='white' />
  </svg>
);

const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
