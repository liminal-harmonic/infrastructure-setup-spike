import type { Meta, StoryObj } from '@storybook/react'
import Input, { type InputProps } from './input'

import { useState } from 'react'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Forms/Input',
  argTypes: {
    onChange: { action: 'onChange' },
  },
}

export default meta
type Story = StoryObj<typeof Input>

function InputWrapper(args: Readonly<InputProps>) {
  const [value, setValue] = useState(args.value)

  return (
    <Input
      {...args}
      value={value}
      onChange={(event) => {
        setValue(event.target.value)
        args.onChange(event)
      }}
    />
  )
}

export const Default: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    value: '',
    placeholder: 'Enter text...',
    disabled: false,
    required: false,
  },
}

export const Disabled: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    value: '',
    placeholder: 'Enter text...',
    disabled: true,
    required: false,
  },
}

export const Required: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    value: '',
    placeholder: 'Enter text...',
    disabled: false,
    required: true,
  },
}

export const WithValue: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    value: 'Sample text',
    placeholder: 'Enter text...',
    disabled: false,
    required: false,
  },
}
