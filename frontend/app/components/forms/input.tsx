import { Input as BaseInput } from '@base-ui-components/react/input'
import * as React from 'react'

export type InputProps = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  disabled?: boolean
  required?: boolean
}

function Input({
  value,
  onChange,
  placeholder,
  disabled,
  required,
}: Readonly<InputProps>) {
  return (
    <BaseInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      className={'p-3 text-sm'}
    />
  )
}

export default Input
