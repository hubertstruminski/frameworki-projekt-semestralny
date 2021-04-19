import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={9}
      height={6}
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.757.667h7.486c.673 0 1.01.775.535 1.227L5.035 5.456a.779.779 0 01-1.067 0L.222 1.894C-.253 1.442.084.667.757.667z"
        fill={props.fill}
      />
    </svg>
  )
}

export default SvgComponent