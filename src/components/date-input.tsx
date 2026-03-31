/* eslint-disable react-refresh/only-export-components */
import { cva, cx, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { Icon } from "./icon"
import { textVariants } from "./text"
import { getCurrentDate } from "../utils/get-current-date"

const formattedCurrentDate = getCurrentDate()

export const dateInputLabelVariants = cva(
  `
    flex items-center gap-2 border border-gray-500 rounded-lg
    focus-within:border-yellow-dark cursor-pointer relative max-w-84
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

export const dateInputVariants = cva(
  `
    outline-none border-none placeholder:text-gray-400 cursor-pointer
    scheme-dark [&::-webkit-calendar-picker-indicator]:absolute
    [&::-webkit-calendar-picker-indicator]:inset-0
    [&::-webkit-calendar-picker-indicator]:w-auto
    [&::-webkit-calendar-picker-indicator]:h-auto
    [&::-webkit-calendar-picker-indicator]:cursor-pointer
    [&::-webkit-calendar-picker-indicator]:invert-100
    [&::-webkit-calendar-picker-indicator]:opacity-0
  `,
  {
    variants: {
      size: {
        sm: "py-3"
      }
    },
    defaultVariants: {
      size: "sm"
    }
  }
)

export const dateInputLeftIconVariants = cva("", {
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

export const dateInputRightIconVariants = cva("ml-auto", {
  variants: {
    variant: {
      primary: "fill-gray-300"
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

interface DateInputProps extends Omit<ComponentProps<"input">, "size">,
  VariantProps<typeof dateInputLabelVariants> {
    leftIcon: ComponentProps<typeof Icon>["svg"]
    rightIcon?: ComponentProps<typeof Icon>["svg"]
  }

export function DateInput({
  size,
  className,
  leftIcon,
  rightIcon,
  ...props
}: DateInputProps) {
  return (
    <label className={dateInputLabelVariants({ size })}>
      <Icon
        svg={leftIcon}
        className={dateInputLeftIconVariants({ variant: "primary", size })}
      />
      <input
        type="date"
        min={formattedCurrentDate}
        className={cx(
          dateInputVariants({ size }),
          textVariants(),
          className
        )}
        {...props}
      />
      {rightIcon && (
        <Icon
          svg={rightIcon}
          className={dateInputRightIconVariants({ variant: "primary", size })}
        />
      )}
    </label>
  )
}