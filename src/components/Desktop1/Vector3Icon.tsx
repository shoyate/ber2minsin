import { memo, SVGProps } from 'react';

const Vector3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 39 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H39' stroke='#696262' />
  </svg>
);

const Memo = memo(Vector3Icon);
export { Memo as Vector3Icon };
