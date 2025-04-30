"use client";

import * as React from "react";
import Image from "public";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

// Define the image sources
const lightLogoSrc = "/logo-light.png"; // Replace with actual path if different
const darkLogoSrc = "/logo-dark.png";   // Replace with actual path if different

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement> & { className?: string }) {
  const { resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = React.useState(lightLogoSrc); // Default to light logo
  const [mounted, setMounted] = React.useState(false); // Track mount status

  React.useEffect(() => {
      setMounted(true); // Component is mounted
  }, []);

  React.useEffect(() => {
      if(mounted) { // Only update logo after mount
          // Update logo source based on the resolved theme
          setLogoSrc(resolvedTheme === 'dark' ? darkLogoSrc : lightLogoSrc);
      }
  }, [resolvedTheme, mounted]);

  // Using Image component for optimization and better handling
  // Prevent rendering image until theme is resolved client-side
  if (!mounted) {
      // Render a placeholder or null during SSR / initial client render
      return <div className={cn("relative", className)} style={{ width: props.width || 32, height: props.height || 32 }} />;
  }

  return (
     <div className={cn("relative", className)} style={{ width: props.width || 32, height: props.height || 32 }}> {/* Use div container */}
      <Image
        src={logoSrc}
        alt="Mrityunjay Srivastava Logo"
        fill // Fill the container - replaces layout="fill"
        style={{ objectFit: "contain" }} // Ensure the logo fits within the bounds - replaces objectFit="contain"
        priority // Prioritize loading the logo
      />
    </div>
  );
}
