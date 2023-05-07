import clsx from "clsx"

const variants = {
  primary: "bg-blue-600 active:bg-blue-700 text-white",
  secondary: "active:bg-slate-100",
}

const Button = (props) => {
  const { className, variant = "primary", ...otherProps } = props

  return (
    <div className="flex justify-center">
      <button
        className={clsx(
          "rounded-lg px-24 py-2 text-lg font-medium disabled:bg-slate-400 disabled:text-slate-700",
          variants[variant],
          className
        )}
        {...otherProps}
      />
    </div>
  )
}

export default Button
