import clsx from "clsx"
import { useField } from "formik"
import { forwardRef } from "react"

// eslint-disable-next-line react/display-name
const FormField = forwardRef((props, ref) => {
  const {
    className,
    label,
    name,
    type,
    handleChange,
    children,
    ...otherProps
  } = props
  const [field, meta] = useField({ name })
  const hasError = meta.error && meta.touched

  return (
    <label className={clsx("flex flex-col gap-2", className)}>
      {label ?? <span>{label}</span>}
      {type === "select" ? (
        <select
          className={clsx("rounded-lg border-2 px-4 py-2 outline-none", {
            "focus:border-blue-600": !hasError,
            "focus:border-red-600": hasError,
          })}
          {...field}
          {...otherProps}
          ref={ref}
          onChange={(e) => {
            field.onChange(e)

            if (handleChange) {
              handleChange(e)
            }
          }}
        >
          {children}
        </select>
      ) : type === "textarea" ? (
        <textarea
          className={clsx(
            "h-48 resize-none rounded-lg border-2 px-4 py-2 outline-none",
            {
              "focus:border-blue-600": !hasError,
              "focus:border-red-600": hasError,
            }
          )}
          {...field}
          {...otherProps}
          ref={ref}
        />
      ) : (
        <input
          type={type || "text"}
          className={clsx("rounded-lg border-2 px-4 py-2 outline-none", {
            "focus:border-blue-600": !hasError,
            "focus:border-red-600": hasError,
          })}
          {...field}
          {...otherProps}
          ref={ref}
          onChange={(e) => {
            field.onChange(e)

            if (handleChange) {
              handleChange(e)
            }
          }}
        />
      )}
      {hasError && <span className="text-sm text-red-600">{meta.error}</span>}
    </label>
  )
})

export default FormField
