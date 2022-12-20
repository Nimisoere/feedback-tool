import React from 'react'
import { range } from '../../utils/common';
import { InputVariants, RenderInputProps } from './RenderInput';

const Input: React.FC<Omit<RenderInputProps, "label">> = React.forwardRef<HTMLInputElement & HTMLTextAreaElement, Omit<RenderInputProps, "label">>(
  function getInput({ id, error, inputType, variant, textareaProps, rangeInputProps, ...props }, ref) {
    const inputclassname = `${error ? "border-red-300 focus:outline-red-300" : "border-slate-300 focus:outline-cyan-400"} bg-slate-50 border-2 rounded-md py-2 px-4 `
    switch (variant) {
      case InputVariants.INPUT:
        return (
          <input id={id} ref={ref} type={inputType || "text"} className={inputclassname} {...props} />
        )
      case InputVariants.TEXT_AREA:
        return (
          <textarea id={id} ref={ref} className={inputclassname} {...textareaProps} {...props} />
        )
      case InputVariants.STAR_RATING: {
        const min = rangeInputProps?.min || 1;
        const max = rangeInputProps?.max || 5
        const step = rangeInputProps?.step || 1

        return (
          <div className='flex flex-wrap sm:flex-col'>
            {
              range(min, max, step)?.map((count) => (
                <div className='text-slate-400 w-full' key={`range-${count}-${id}`}>
                  <input ref={ref} id={`range-${count}-${id}`} className="hidden peer" type="radio" {...props} value={count} />
                  <label className='cursor-pointer text-sm peer peer-checked:text-yellow-400' htmlFor={`range-${count}-${id}`}>
                    <span className='text-2xl'>&#11089;</span> ({count} {count === 1 ? "star" : "stars"})
                  </label>
                </div>
              ))
            }
          </div>
        )
      }
      default:
        return (
          <input id={id} ref={ref} type={inputType || "text"} className={inputclassname} {...props} />
        )
    }
  })

export default Input;