import { createElement, type JSX, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

// eslint-disable-next-line react-refresh/only-export-components
export const textVariants = cva("font-sans", {
  variants: {
    variant: {
      "title-lg": "text-2xl/8 font-bold",
      "title-md": "text-base/6 font-bold",
      "title-sm": "text-sm/5 font-bold",
      "text-md": "text-base/6 font-normal",
      "text-sm": "text-sm/5 font-normal"
    }
  },
  defaultVariants: {
    variant: "text-md"
  }
})

interface TextProps extends VariantProps<typeof textVariants> {
  className?: string
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
}

export function Text({
  className,
  children,
  as = "span",
  variant,
  ...props
}: TextProps) {
  return (
    createElement(
      as,
      {
        className: textVariants({ variant, className }),
        ...props
      },
      children
    )
  )
}