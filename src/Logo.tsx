import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <img src="./assistants/boku-no-hero"></img>
  )
}

