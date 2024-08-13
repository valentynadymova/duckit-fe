import { ISVG } from '../../../types';

const Instagram: React.FC<ISVG> = ({
  width = 32,
  height = 32,
  fill = 'none',
  viewBox = '0 0 32 32',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#191A1D"
        d="M27 0H5a5 5 0 00-5 5v22a5 5 0 005 5h22a5 5 0 005-5V5a5 5 0 00-5-5z"
      ></path>
      <path
        fill="#fff"
        d="M16 9.2h3.4c.8 0 1.2.2 1.5.3.4.2.7.3 1 .6.3.3.5.6.6 1 .1.3.2.7.3 1.5v6.8c0 .8-.2 1.2-.3 1.5-.2.4-.3.7-.6 1-.3.3-.6.5-1 .6-.3.1-.7.2-1.5.3h-6.8c-.8 0-1.2-.2-1.5-.3-.4-.2-.7-.3-1-.6-.3-.3-.5-.6-.6-1-.1-.3-.2-.7-.3-1.5V16v-3.4c0-.8.2-1.2.3-1.5.2-.4.3-.7.6-1 .3-.3.6-.5 1-.6.3-.1.7-.2 1.5-.3H16zm0-1.5h-3.4c-.9 0-1.5.2-2 .4s-1 .5-1.5 1-.7.9-1 1.5c-.2.5-.3 1.1-.4 2v6.8c0 .9.2 1.5.4 2s.5 1 1 1.5.9.7 1.5 1c.5.2 1.1.3 2 .4h6.8c.9 0 1.5-.2 2-.4s1-.5 1.5-1 .7-.9 1-1.5c.2-.5.3-1.1.4-2V16v-3.4c0-.9-.2-1.5-.4-2s-.5-1-1-1.5-.9-.7-1.5-1c-.5-.2-1.1-.3-2-.4H16z"
      ></path>
      <path
        fill="#fff"
        d="M16 11.7c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3zm0 7.1c-1.5 0-2.8-1.2-2.8-2.8 0-1.5 1.2-2.8 2.8-2.8 1.5 0 2.8 1.2 2.8 2.8 0 1.5-1.3 2.8-2.8 2.8zM20.4 12.6a1 1 0 100-2 1 1 0 000 2z"
      ></path>
    </svg>
  );
};
export default Instagram;
