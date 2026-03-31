import { cva, type VariantProps } from "class-variance-authority"
import { createElement, type ComponentProps, type JSX } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const containerVariants = cva("rounded-xl", {
  variants: {
    size: {
      md: "lg:max-w-124.5 py-20 sm:px-5 md:px-20",
      lg: "lg:max-w-226.5 py-20 px-5"
    }
  },
  defaultVariants: {
    size: "md"
  }
})

interface ContainerProps extends VariantProps<typeof containerVariants>,
  ComponentProps<"div"> {
  as?: keyof JSX.IntrinsicElements
}

export function Container({
  as = "div",
  children,
  className,
  size,
  ...props
}: ContainerProps) {
  return (
    createElement(
      as,
      {
        className: containerVariants({ size, className }),
        ...props
      },
      children
    )
  )
}