import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={props.width ? props.width : 14}
      height={props.height ? props.height : 14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.708 6.125H7.875V.292A.292.292 0 007.583 0H6.417a.292.292 0 00-.292.292v5.833H.292A.292.292 0 000 6.417v1.166c0 .161.13.292.292.292h5.833v5.833c0 .162.13.292.292.292h1.166c.161 0 .292-.13.292-.292V7.875h5.833c.162 0 .292-.13.292-.292V6.417a.292.292 0 00-.292-.292z"
        fill={props.fill ? props.fill : "#4B5268"}
      />
    </svg>
  )
}

export default SvgComponent