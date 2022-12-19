import { yupResolver } from "@hookform/resolvers/yup";

import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import RenderInput, { InputVariants } from './RenderInput';

const schema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup.string().email().required("Please enter your email"),
  comment: yup.string().required("Please enter a comment"),
  rating: yup.number()
    .min(1, "Give a minimum rating of 1")
    .max(5, "Give a maximum rating of 5")
    .integer()
    .required("Please give a rating")
    .typeError("Rating must be a valid number")
});

interface FEEDBACK_INPUT {
  name: string;
  email: string;
  comment: string;
  rating: number
}

const FeedbackForm: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<FEEDBACK_INPUT>({
    resolver: yupResolver(schema),
  });

  const submit = (data: FEEDBACK_INPUT) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className='flex flex-row gap-8 flex-wrap sm:flex-nowrap'>
        <div className='w-1/3'>
          <div className='flex flex-col'>
            <RenderInput
              id="name"
              label="Name"
              variant={InputVariants.INPUT}
              placeholder="Enter your name"
              error={formState.errors?.name}
              {...register("name")}
            />
            <RenderInput
              id="email"
              label="Email"
              variant={InputVariants.INPUT}
              placeholder="Enter your email"
              inputType="email"
              error={formState.errors?.email}
              {...register("email")}
            />
            <RenderInput
              id="rating"
              label="Rating"
              variant={InputVariants.STAR_RATING}
              placeholder="Enter your rating"
              error={formState.errors?.rating}
              {...register("rating")}
            />
          </div>
        </div>
        <div className='w-2/3'>
          <RenderInput
            id="comment"
            label="Comment"
            variant={InputVariants.TEXT_AREA}
            placeholder="Enter your comment"
            error={formState.errors?.comment}
            textareaProps={{
              rows: 10
            }}
            {...register("comment")}
          />
        </div>
      </div>
      <div className='flex justify-end'>
        <button className='bg-cyan-400 active:bg-cyan-600 focus:outline-none focus:ring focus:ring-cyan-300 hover:bg-cyan-500 py-2 px-8 rounded-lg font-semibold' type='submit'>
          Submit
        </button>
      </div>
    </form>
  )
}

export default FeedbackForm