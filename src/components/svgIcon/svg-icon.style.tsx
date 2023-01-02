import type { FC } from "react";
import styled from "styled-components";

export type SvgIconContainerProps = Partial<{
  width: string;
  height: string;
  iconColor: string;
  iconStroke: string;
  pathStroke?: string;
  hover?: string;
  className?: string;
}>;

export const SvgIconContainer: FC<SvgIconContainerProps> = styled.svg<SvgIconContainerProps>`
  width: ${(props) => props.width || "2rem"};
  height: ${(props) => props.height || "2rem"};
  fill: ${(props) => props.iconColor || "#ffffff"};
  stroke: ${(props) => props.iconStroke || "#000000"};
  transition-duration: 200ms;
  overflow: visible;
  &:hover {
    stroke: ${(props) => props.hover || "auto"};
  }
`;
