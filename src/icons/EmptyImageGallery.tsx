import React from 'react';

export default (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16.125 20C17.9531 20 19.5 18.5234 19.5 16.625C19.5 14.7969 17.9531 13.25 16.125 13.25C14.2266 13.25 12.75 14.7969 12.75 16.625C12.75 18.5234 14.2266 20 16.125 20ZM16.125 15.5C16.6875 15.5 17.25 16.0625 17.25 16.625C17.25 17.2578 16.6875 17.75 16.125 17.75C15.4922 17.75 15 17.2578 15 16.625C15 16.0625 15.4922 15.5 16.125 15.5ZM37.5 8.75H10.5C9.23438 8.75 8.25 9.80469 8.25 11V38C8.25 39.2656 9.23438 40.25 10.5 40.25H37.5C38.6953 40.25 39.75 39.2656 39.75 38V11C39.75 9.80469 38.6953 8.75 37.5 8.75ZM37.5 38H10.5V32.375H37.5V38ZM14.2266 30.125L17.8828 25.2734L20.6953 29L19.8516 30.125H14.2266ZM22.6641 30.125L28.0078 23.0234L33.3516 30.125H22.6641ZM37.5 30.125H36.1641L28.9219 20.4922C28.4297 19.9297 27.5156 19.9297 27.0938 20.4922L22.1016 27.1719L18.7969 22.7422C18.3047 22.1797 17.3906 22.1797 16.9688 22.7422L11.4141 30.125H10.5V11H37.5V30.125Z" />
    </svg>
  );
};
