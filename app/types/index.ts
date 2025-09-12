import type { ReactNode } from "react";

export interface Section {
  id: string;
  title?: string;
  subtitle?: ReactNode;
  titleBelow?: ReactNode;
  content?: ReactNode;
  image?: ReactNode;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

export interface SectionProps extends Section {
  isActive: boolean;
}
