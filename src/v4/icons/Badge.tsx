import React from 'react';

const Badge = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <rect width="16" height="16" rx="8" fill="#D9E5FC" />
    <path
      d="M11.2812 5.8125C11.5625 5.9375 11.75 6.20312 11.75 6.5C11.75 9.96875 9.625 11.8906 8.28125 12.4531C8.09375 12.5312 7.89062 12.5312 7.70312 12.4531C6.03125 11.75 4.25 9.60938 4.25 6.5C4.25 6.20312 4.42188 5.9375 4.70312 5.8125L7.70312 4.5625C7.78125 4.53125 7.90625 4.51562 8 4.51562C8.07812 4.51562 8.20312 4.53125 8.28125 4.5625L11.2812 5.8125ZM10.5469 7.59375C10.6406 7.5 10.6406 7.34375 10.5469 7.25L10.1875 6.89062C10.0938 6.79688 9.9375 6.79688 9.84375 6.89062L7.5 9.23438L6.39062 8.14062C6.29688 8.04688 6.14062 8.04688 6.04688 8.14062L5.6875 8.5C5.59375 8.59375 5.59375 8.75 5.6875 8.84375L7.3125 10.4688C7.40625 10.5781 7.57812 10.5781 7.67188 10.4688L10.5469 7.59375Z"
      fill="#1054DE"
    />
  </svg>
);

export default Badge;
