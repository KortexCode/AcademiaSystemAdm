type ValidatedInputProps = {
  errors: any,
  name: string,
}

export function ValidatedInput({errors, name}: ValidatedInputProps) {
  return (
    <span className={`required-span ${errors[name] && "span--actived"}`}>
                    {errors[name]?.message}
    </span>
  )
}

