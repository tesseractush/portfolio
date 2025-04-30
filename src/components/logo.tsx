import * as React from "react";

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="currentColor"
      {...props}
    >
      {/* Simple Placeholder Logo - Replace with actual logo design */}
      <rect width="100" height="100" rx="15" fill="hsl(var(--primary))" />
      <text
        x="50"
        y="60"
        fontFamily="Arial, sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill="hsl(var(--primary-foreground))"
        textAnchor="middle"
      >
        MS
      </text>
    </svg>
  );
}
