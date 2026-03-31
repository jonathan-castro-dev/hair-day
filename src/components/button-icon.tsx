/* eslint-disable react-refresh/only-export-components */
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { Icon } from "./icon"

export const buttonIconVariants = cva("cursor-pointer transition-colors")

export const buttonIconIconVariants = cva("", {
  variants: {
    variant: {
      primary: "fill-yellow-base hover:fill-yellow-dark"
    },
    size: {
      sm: "w-4 h-4"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "sm"
  }
})

interface ButtonIconProps extends ComponentProps<"button">,
  VariantProps<typeof buttonIconVariants> {
    icon: ComponentProps<typeof Icon>["svg"]
  }

export function ButtonIcon({
  className,
  icon,
  ...props
}: ButtonIconProps) {
  return (
    <button className={buttonIconVariants({ className })} {...props}>
      <Icon
        svg={icon}
        className={buttonIconIconVariants({ variant: "primary", size: "sm" })}
      />
    </button>
  )
}