/* eslint-disable react-refresh/only-export-components */
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

export const timeSelectInputVariants = cva(
  `
    w-19.5 h-10 after:w-19.5 after:h-10 after:border after:border-gray-500
    after:bg-gray-600 not-checked:not-disabled:hover:after:bg-gray-500
    after:rounded-lg after:transition-colors after:cursor-pointer after:block
    after:text-base/6 after:font-normal after:content-[attr(content)]
    after:text-center after:py-2 after:text-gray-200
    checked:after:border-yellow-base checked:after:text-yellow-base
    disabled:after:bg-gray-700 disabled:after:border-gray-500
    disabled:after:text-gray-500 disabled:after:pointer-events-none
  `
)

interface TimeSelectProps extends VariantProps<typeof timeSelectInputVariants>,
  ComponentProps<"input"> {}

export function TimeSelect({ className, ...props }: TimeSelectProps) {
  return (
    <input
      type="radio"
      name="hour"
      className={timeSelectInputVariants({ className })}
      {...props}
    />
  )
}