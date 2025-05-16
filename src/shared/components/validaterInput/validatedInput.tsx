type ValidatedInputProps = {
  errors: any,
  name: string,
}

export function ValidatedInput({errors, name}: ValidatedInputProps) {
  return (
    <span data-testid={name} className={`required-span ${errors[name] && "span--actived"}`}>
                    {errors[name]?.message}
    </span>
  )
}

