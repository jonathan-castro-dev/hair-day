/* eslint-disable react-refresh/only-export-components */
import { cva, cx, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { Icon } from "./icon"
import { textVariants } from "./text"

export const textInputWrapperVariants = cva(
  `
    flex items-center border border-gray-500 rounded-lg
    focus-within:border-yellow-dark
  `,
  {
    variants: {
      size: {
        sm: "pl-3 pr-4 h-12"
      }
    },
    defaultVariants: {
      size: "sm"
    }
  }
)

export const textInputVariants = cva(
  `
    outline-none border-none placeholder:text-gray-400 w-full text-gray-200
  `,
  {
    variants: {
      size: {
        sm: "px-2 py-3"
      }
    },
    defaultVariants: {
      size: "sm"
    }
  }
)

export const textInputIconVariants = cva("", {
  variants: {
    variant: {
      primary: "fill-yellow-base"
    },
    size: {
      sm: "w-5 h-5"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "sm"
  }
})

interface TextInputProps extends Omit<ComponentProps<"input">, "size">,
  VariantProps<typeof textInputWrapperVariants> {
    icon: ComponentProps<typeof Icon>["svg"]
  }

export function TextInput({
  size,
  className,
  icon,
  ...props
}: TextInputProps) {
  return (
    <div className={textInputWrapperVariants({ size })}>
      <Icon
        svg={icon}
        className={textInputIconVariants({ variant: "primary", size })}
      />
      <input
        className={cx(
          textInputVariants({ size }),
          textVariants(),
          className
        )}
        {...props}
      />
    </div>
  )
}