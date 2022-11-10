// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icon-tabler-3d-cube-sphere"
      )}
      strokeWidth={"2"}
      stroke={"currentColor"}
      fill={"none"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h24v24H0z"} fill={"none"} stroke={"none"}></path>

      <path
        d={
          "M6 17.6l-2-1.1V14m0-4V7.5l2-1.1m4-2.3L12 3l2 1.1m4 2.3l2 1.1V10m0 4v2.5l-2 1.12m-4 2.28L12 21l-2-1.1m2-7.9l2-1.1m4-2.3l2-1.1M12 12v2.5m0 4V21m0-9l-2-1.12M6 8.6L4 7.5"
        }
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
