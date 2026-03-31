/* eslint-disable react-refresh/only-export-components */
import { cva, type VariantProps } from "class-variance-authority"
import { createElement, type ComponentProps, type JSX } from "react"

export const cardVariants = cva(
  `
    flex items-center border-gray-600
  `,
  {
    variants: {
      variant: {
        primary: "gap-3 border rounded-t-lg",
        secondary: "gap-3 border-l border-r border-b rounded-b-lg",
        terciary: "gap-5 flex-1"
      },
      size: {
        none: "",
        sm: "px-5 py-3",
        md: "p-5 mb-3"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "sm"
    }
  }
)

interface CardProps extends ComponentProps<"div">,
  VariantProps<typeof cardVariants> {
    as?: keyof JSX.IntrinsicElements
}

export function Card({
  as = "div",
  variant,
  size,
  className,
  children,
  ...props
}: CardProps) {
  return (
    createElement(
      as,
      {
        className: cardVariants({ variant, size, className }),
        ...props
      },
      children
    )
  )
}