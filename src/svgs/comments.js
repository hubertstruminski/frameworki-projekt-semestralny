import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      // width={23}
      // height={21}
      width={props.width ? props.width : 20}
      height={props.height ? props.height : 20}
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.25 8.75V2.5c0-1.379-1.121-2.5-2.5-2.5H2.5A2.502 2.502 0 000 2.5v6.25c0 1.379 1.121 2.5 2.5 2.5v2.117c0 .313.355.492.605.305l3.235-2.426h7.41a2.496 2.496 0 002.5-2.496zM20 6.25h-2.5v2.5a3.756 3.756 0 01-3.75 3.75H7.5V15c0 1.379 1.121 2.5 2.5 2.5h4.91l3.235 2.426c.25.187.605.008.605-.305V17.5H20c1.379 0 2.5-1.121 2.5-2.5V8.75c0-1.379-1.121-2.5-2.5-2.5z"
        fill={props.fill}
      />
    </svg>
  )
}

export default SvgComponent