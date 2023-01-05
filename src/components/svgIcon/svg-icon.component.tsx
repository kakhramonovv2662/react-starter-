import type { FC } from "react";
import type { SvgIconContainerProps } from "./svg-icon.style";
import { SvgIconContainer } from "./svg-icon.style";
import sprite from "./sprite.svg";

export type SvgIconProps = {
  iconName: "logo" | "github" | "instagram" | "telegram";
};

/**
 * <SvgIcon />
 */
export const SvgIcon: FC<SvgIconContainerProps & SvgIconProps> = ({
  iconName,
  pathStroke,
  ...props
}) => (
  <SvgIconContainer {...props}>
    <use
      xlinkHref={`${sprite}#${iconName}`}
      width="100%"
      height="100%"
      stroke={pathStroke}
    />
  </SvgIconContainer>
);
