import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import EmptyCart from './EmptyCart'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import FormInput from './FormInput'
import { db } from '../firebaseConfig'

const Checkout = () => {
  const [orderId, setOrderId] = useState('')
  const [loading, setLoading] = useState(null)

  const { cart, total, clear } = useContext(CartContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm()

  const terminarCompra = data => {
    const { name, lastname, address, email } = data

    setLoading(true)

    let orden = {
      comprador: { name, lastname, address, email },
      carrito: cart,
      total: total(),
      fecha: serverTimestamp()
    }

    const orderColl = collection(db, 'orders')

    addDoc(orderColl, orden)
      .then(res => {
        setOrderId(res.id)
        clear()
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }

  if (!cart.length && !orderId) {
    return <EmptyCart />
  }

  return (
    <>
      {orderId ? (
        <div>
          <h1>Muchas gracias por tu compra!</h1>
          <h2>Te dejamos el código de tu orden: {orderId}</h2>
          <Link to='/' className='btn btn-dark'>
            Volver a Home
          </Link>
        </div>
      ) : (
        <div>
          <h1>Complete con sus datos</h1>

          <form
            className='p-4 border rounded shadow-sm bg-light'
            onSubmit={handleSubmit(terminarCompra)}
          >
            <FormInput
              label='Nombre'
              name='name'
              placeholder='Ingresa tu nombre'
              register={register}
              error={errors.name}
              validation={{
                required: 'Por favor complete este campo',
                minLength: {
                  value: 3,
                  message: 'El nombre es muy corto'
                }
              }}
            />

            <FormInput
              label='Apellido'
              name='lastname'
              placeholder='Ingresa tu apellido'
              register={register}
              error={errors.lastname}
              validation={{
                required: 'Por favor complete este campo',
                minLength: {
                  value: 2,
                  message: 'El apellido es muy corto'
                }
              }}
            />

            <FormInput
              label='Dirección'
              name='address'
              placeholder='Ingresa su direccion'
              register={register}
              error={errors.address}
              validation={{
                required: 'Por favor complete este campo',
                minLength: {
                  value: 10,
                  message: 'Ingrese la dirección completa'
                },
                maxLength: {
                  value: 35,
                  message: 'La dirección es demasiado extensa'
                }
              }}
            />

            <FormInput
              label='Correo'
              type='email'
              name='email'
              placeholder='Ingresa tu correo'
              register={register}
              error={errors.email}
              validation={{
                required: 'Por favor complete este campo'
              }}
            />

            <FormInput
              label='Repetir correo'
              type='email'
              name='secondemail'
              placeholder='Repetí tu correo'
              register={register}
              error={errors.secondemail}
              validation={{
                required: 'Por favor complete este campo',
                validate: {
                  equalsMails: mail2 =>
                    mail2 === getValues().email || 'Los correos no coinciden'
                }
              }}
            />

            <button type='submit' className='btn btn-success' disabled={loading}>
              {loading ? 'Procesando Compra...' : 'Terminar Compra'}
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default Checkout