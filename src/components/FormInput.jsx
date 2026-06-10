import { Form } from 'react-bootstrap'

const FormInput = ({
  label,
  type = 'text',
  placeholder,
  name,
  register,
  error,
  validation
}) => {
  return (
    <Form.Group className='mb-3'>
      {label && <Form.Label>{label}</Form.Label>}

      <Form.Control
        type={type}
        placeholder={placeholder}
        isInvalid={!!error}
        {...register(name, validation)}
      />

      <Form.Control.Feedback type='invalid'>
        {error?.message}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default FormInput