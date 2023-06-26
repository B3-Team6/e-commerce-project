import clsx from "clsx"
import { useField } from "formik"
import { forwardRef } from "react"

// eslint-disable-next-line react/display-name
const FormField = forwardRef((props, ref) => {
  const { className, label, name, component, ...otherProps } = props
  const [field, { error, touched }] = useField({ name })
  const hasError = error && touched

  const Component = component || "input"

  return (
    <label className={clsx("flex flex-col gap-2", className)}>
      {label ?? <span>{label}</span>}
      {props.type === "textarea" ? (
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
          className={clsx("rounded-lg border-2 px-4 py-2 outline-none", {
            "focus:border-blue-600": !hasError,
            "focus:border-red-600": hasError,
          })}
          {...field}
          {...otherProps}
          ref={ref}
        />
      )}
      {hasError && <span className="text-sm text-red-600">{error}</span>}
    </label>
  )
})

export default FormField
