interface StarOfLifeProps {
  className?: string;
  size?: number;
}

export function StarOfLife({ className, size = 24 }: StarOfLifeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <g fill="currentColor">
        {[0, 60, 120].map((rot) => (
          <rect
            key={rot}
            x="42"
            y="8"
            width="16"
            height="84"
            rx="3"
            transform={`rotate(${rot} 50 50)`}
          />
        ))}
      </g>
      <g fill="white" transform="translate(50 50)">
        <path d="M -8 -4 L -4 -4 L -4 -8 L 4 -8 L 4 -4 L 8 -4 L 8 4 L 4 4 L 4 8 L -4 8 L -4 4 L -8 4 Z" />
      </g>
    </svg>
  );
}
