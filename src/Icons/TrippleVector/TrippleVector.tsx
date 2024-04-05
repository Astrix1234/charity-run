function TrippleVector({ color = '#2E2530', size = 52 }) {
    return (
        <svg
        width={size}
        height={(165 / 52) * size}
        viewBox="0 0 52 165"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <g id="Ornament_61">
            <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.0192 165L52 120L0.0384711 120L26.0192 165ZM26.0192 157L45.0718 124L6.96668 124L26.0192 157Z"
            fill={color}
            />
            <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.0192 105L52 60L0.0384659 60L26.0192 105ZM26.0192 97L45.0718 64L6.96667 64L26.0192 97Z"
            fill={color}
            />
            <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.0192 45L0.0384606 4.54262e-06L52 0L26.0192 45ZM45.0718 4L26.0192 37L6.96666 4L45.0718 4Z"
            fill={color}
            />
        </g>
        </svg>
    );
}

export default TrippleVector;
