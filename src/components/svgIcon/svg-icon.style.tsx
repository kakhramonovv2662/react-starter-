import type { FC } from "react";
import styled from "styled-components";

export type SvgIconContainerProps = Partial<{
  width: string;
  height: string;
  iconColor: string;
  iconStroke: string;
  pathStroke?: string;
  hoverStroke?: string;
  hoverColor?: string;
  className?: string;
}>;

export const SvgIconContainer: FC<SvgIconContainerProps> = styled.svg<SvgIconContainerProps>`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
  fill: ${(props) => props.iconColor || "#ffffff"};
  stroke: ${(props) => props.iconStroke || "#000000"};
  transition-duration: 200ms;
  overflow: visible;
  &:hover {
    stroke: ${(props) => {
      return props.hoverStroke || "auto";
    }};
    fill: ${(props) => {
      return props.hoverColor || "auto";
    }};
  }
`;
