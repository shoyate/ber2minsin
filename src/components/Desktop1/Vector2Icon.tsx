import { memo, SVGProps } from 'react';

const Vector2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H40' stroke='#696262' />
  </svg>
);

const Memo = memo(Vector2Icon);
export { Memo as Vector2Icon };
