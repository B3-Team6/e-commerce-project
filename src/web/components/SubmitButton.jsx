import Button from "@/web/components/Button.jsx"
import { useFormikContext } from "formik"
import { useTranslation } from "react-i18next"


const SubmitButton = (props) => {
  const { t } = useTranslation()
  const { children = t("submitButton"), isSubmitting, isValid } = useFormikContext()

  return (
    <Button {...props} disabled={isSubmitting || !isValid}>
      {children}
    </Button>
  )
}

export default SubmitButton
