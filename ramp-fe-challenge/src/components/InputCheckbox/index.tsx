import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label className="RampInputCheckbox--label" />
      <input
        id={inputId}
        type="checkbox"
        className={classNames("RampInputCheckbox--input", {
          "RampInputCheckbox--input-checked": checked,
          "RampInputCheckbox--input-disabled": disabled,
        })}
        data-hello={"hello"}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
    </div>
  )
}
