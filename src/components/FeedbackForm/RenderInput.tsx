import React from 'react'
import { FieldError, Merge } from 'react-hook-form';
import Input from './Input';

export enum InputVariants {
  INPUT = "input",
  TEXT_AREA = "text-area",
  STAR_RATING = "star-rating"
}

type RangeInputProps = {
  min: number
  max: number
  step: number
}

export type RenderInputProps = {
  id: string;
  label: string | React.ReactNode;
  variant: InputVariants
  inputType?: React.HTMLInputTypeAttribute
  placeholder?: string;
  error?: Merge<FieldError, (FieldError | undefined)[]>
  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>
  rangeInputProps?: RangeInputProps
  ref?: React.ForwardedRef<HTMLInputElement & HTMLTextAreaElement>
}

const RenderInput: React.FC<RenderInputProps> = React.forwardRef(function InputRenderer({ label, error, ...props }, ref) {
  return (
    <div className='flex flex-col mb-8'>
      <label className='font-medium text-sm'>{label}</label>
      <Input error={error} ref={ref} {...props} />
      {error && <span className="text-red-900 text-sm font-medium">{error?.message}</span>}
    </div>
  )
})

export default RenderInput

