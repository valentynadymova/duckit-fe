/* eslint-disable prettier/prettier */
import { ISVG } from '../../../types';
import styles from './TechnologiesMedia.module.css';

const Node: React.FC<ISVG> = ({
    width = 32,
    height = 32,
    fill = 'none',
    viewBox = '-3.8 -1.5 40.921 40.921',
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            fill={fill}
            className={styles.technologies_svg}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <defs>
                    <linearGradient
                        id="b"
                        x1="271.97"
                        x2="211.104"
                        y1="217.606"
                        y2="341.772"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset=".3" stopColor="#3e863d"></stop>
                        <stop offset=".5" stopColor="#55934f"></stop>
                        <stop offset=".8" stopColor="#5aad45"></stop>
                    </linearGradient>
                    <linearGradient
                        id="d"
                        x1="186.484"
                        x2="297.349"
                        y1="321.381"
                        y2="239.465"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset=".57" stopColor="#3e863d"></stop>
                        <stop offset=".72" stopColor="#619857"></stop>
                        <stop offset="1" stopColor="#76ac64"></stop>
                    </linearGradient>
                    <linearGradient
                        id="f"
                        x1="197.051"
                        x2="288.72"
                        y1="279.652"
                        y2="279.652"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset=".16" stopColor="#6bbf47"></stop>
                        <stop offset=".38" stopColor="#79b461"></stop>
                        <stop offset=".47" stopColor="#75ac64"></stop>
                        <stop offset=".7" stopColor="#659e5a"></stop>
                        <stop offset=".9" stopColor="#3e863d"></stop>
                    </linearGradient>
                    <clipPath id="a">
                        <path d="m239.03 226.605-42.13 24.317a5.085 5.085 0 0 0-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336a5.1 5.1 0 0 0 5.09 0l42.126-24.336a5.096 5.096 0 0 0 2.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317a5.123 5.123 0 0 0-5.1 0"></path>
                    </clipPath>
                    <clipPath id="c">
                        <path d="M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39a5.318 5.318 0 0 0-1.32-.53zm0 0"></path>
                    </clipPath>
                    <clipPath id="e">
                        <path d="M241.066 225.953a5.14 5.14 0 0 0-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336a5.105 5.105 0 0 0 2.46-3.476l-46.18-78.89a5.29 5.29 0 0 0-1.03-.102l-.42.02"></path>
                    </clipPath>
                </defs>
                <g
                    clipPath="url(#a)"
                    transform="translate(-68.564 -79.701) scale(.35278)"
                >
                    <path
                        fill="url(#b)"
                        d="m331.363 246.793-118.715-58.19-60.87 124.174L270.49 370.97zm0 0"
                    ></path>
                </g>
                <g
                    clipPath="url(#c)"
                    transform="translate(-68.564 -79.701) scale(.35278)"
                >
                    <path
                        fill="url(#d)"
                        d="m144.07 264.004 83.825 113.453 110.86-81.906-83.83-113.45zm0 0"
                    ></path>
                </g>
                <g
                    clipPath="url(#e)"
                    transform="translate(-68.564 -79.701) scale(.35278)"
                >
                    <path
                        fill="url(#f)"
                        d="M197.02 225.934v107.43h91.683v-107.43zm0 0"
                    ></path>
                </g>
            </g>
        </svg>
    );
};

export default Node;
