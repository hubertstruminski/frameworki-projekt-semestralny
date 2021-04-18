import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={props.width ? props.width : 18}
      height={props.height ? props.height : 20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.75 20a2.5 2.5 0 002.499-2.5H6.25A2.5 2.5 0 008.75 20zm8.414-5.848c-.755-.811-2.167-2.03-2.167-6.027 0-3.035-2.128-5.465-4.998-6.06V1.25a1.25 1.25 0 10-2.498 0v.814C4.63 2.66 2.503 5.09 2.503 8.125c0 3.996-1.412 5.216-2.167 6.027A1.22 1.22 0 000 15c.004.64.507 1.25 1.254 1.25h14.992c.747 0 1.25-.61 1.254-1.25a1.22 1.22 0 00-.336-.848z"
        fill="#878B91"
      />
    </svg>
  )
}

export default SvgComponent