type Props = {
  value?: string
  onChange?: (v: string) => void
  className?: string
  placeholder?: string
}

export const DateInput: React.FC<Props> = (props) => {
  const { value, onChange, className, placeholder } = props
  return (
    <input className={className} c-input-text type="text" readOnly data-xxxx
      placeholder={placeholder} value={value} />
  )
}
