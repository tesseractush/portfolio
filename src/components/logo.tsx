import * as React from "react";
import { cn } from "@/lib/utils";

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none" // Use none initially, specify fill later
      className={cn(className)} // Apply className passed via props
      {...props}
    >
      {/* Darker background/side part */}
      <path
        d="M10 10 H 90 V 90 H 10 L 10 10 M 10 10 L 0 20 V 100 H 90 V 90 H 10 V 20 L 0 20"
        fill="hsl(var(--primary))" // Use primary color for the dark part
      />
      {/* White foreground part */}
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        fill="hsl(var(--background))" // Use background color (white in light, black in dark)
      />
      {/* Stylized 't' - Approximated with path */}
      <path
        d="M35 35 H 55 V 45 H 48 V 75 H 42 V 45 H 35 V 35 Z"
        fill="hsl(var(--foreground))" // Use foreground color (black in light, white in dark)
        style={{ filter: 'url(#distress)' }} // Optional: Add filter for distressed look if needed
      />
      {/* Underscore */}
      <rect
        x="60"
        y="65"
        width="25"
        height="8"
        rx="2" // Slightly rounded corners
        fill="hsl(var(--foreground))" // Use foreground color
      />

      {/* Optional: Filter for distressed effect (basic example) */}
      <defs>
        <filter id="distress">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
    </svg>
  );
}
