import React from "react";

export default function SideMenuTitle(props) {
  return <h6 className={`text-start ${props.className}`}>{props.children}</h6>;
}
