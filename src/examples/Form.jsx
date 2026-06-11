import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
const {register, handleSubmit, formState:{errors}}= useForm()
 const purchase = (data)=> {
    // e.preventDefault()
 }
  return (
 
        <form onSubmit={handleSubmit(purchase)}>
                <input name='name' placeholder='Ingrese su nombre' type='text' {...register("name", {required:true, minLength:3, maxLength:20,})}/>
                {errors?.name?.type === "required" && <small>Por favor ingrese su nombre</small>}
                {errors?.name?.type === "minLength" && <small>Por favor ingrese su nombre completo</small>}
                 {errors?.name?.type === "maxLength" && <small>Su nombre es demasiado largo</small>}
                <button type='submit'>Enviar</button>
        </form>
   
  )
}

export default Form