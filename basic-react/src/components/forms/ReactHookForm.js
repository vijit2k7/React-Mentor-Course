import React from 'react'
import { useForm } from 'react-hook-form';

function ReactHookForm() {

  const { register, handleSubmit, formState: { errors }} = useForm();

  function onSubmit(data)
  {
      console.log('register is',data,errors);
  }
  console.log('errors is',errors);
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
            <label>Email</label>
            <input type="text" name="email" {...register('email',{required:'Email is a required field'})} />
            </div>
            <div className="form-control">
            <label>Password</label>
            <input type="password" name="password"  {...register('password',{ required: 'Email is a required field', minLength: 6,minLengthMessage:''})} />
            </div>
            {errors?.password&&<span style={{color:'red'}}>{errors.email.message}</span>}
            <div className="form-control">
            <label></label>
            <button type="submit">Login</button>
            </div>
        </form>
    </div>
  )
}

export default ReactHookForm
