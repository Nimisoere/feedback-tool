import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import usePostFeedback from "../../hooks/api/usePostFeedback";
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

interface FEEDBACK_REQUEST {
  name: string;
  email: string;
  comment: string;
  rating: number;
  createdAt: Date;
}

const FeedbackForm: React.FC = () => {
  const router = useRouter()

  const { register, handleSubmit, formState } = useForm<FEEDBACK_INPUT>({
    resolver: yupResolver(schema),
  });
  const { loading, error, postFeedback } = usePostFeedback()

  const submit = (data: FEEDBACK_INPUT) => {
    postFeedback<FEEDBACK_REQUEST>({
      ...data,
      createdAt: new Date(),
    }, () => router.push("/view-feedback"))
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      {
        error && (
          <div className="alert-danger">
            {error?.message || "Unable to submit your feedback"}
          </div>
        )
      }
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
        <button disabled={loading} className='btn-primary' type='submit'>
          Submit{!!loading && "ing ..."}
        </button>
      </div>
    </form>
  )
}

export default FeedbackForm