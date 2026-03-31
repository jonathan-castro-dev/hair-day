/* eslint-disable react-refresh/only-export-components */
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { Text } from "./text"

export const buttonVariants = cva(
  `
    flex items-center justify-center cursor-pointer rounded-lg transition-colors
    uppercase border-2 border-yellow-base
  `,
  {
    variants: {
      variant: {
        primary: "bg-yellow-base hover:border-yellow-light"
      },
      size: {
        md: "h-14 px-4 py-4.5"
      },
      disabled: {
        true: "opacity-30 pointer-events-none"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false
    }
  }
)

export const buttonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-900"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})

interface ButtonProps extends VariantProps<typeof buttonVariants>,
  Omit<ComponentProps<"button">, "size" | "disabled"> {}

export function Button({
  variant,
  size,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({
        variant,
        size,
        disabled,
        className  
      })}
      {...props}
    >
      <Text variant="title-sm" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  )
}