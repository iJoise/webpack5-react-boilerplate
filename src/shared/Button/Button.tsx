import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./style/Button.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  color: "dark_blue" | "light_blue" | "pink";
  rounded?: boolean;
  width?: string | number | undefined;
};

const colorClass = {
  dark_blue: s.button__blue,
  light_blue: s.button__light_blue,
  pink: s.button__pink,
};

export const Button: React.FC<SuperButtonPropsType> = React.memo(
  ({ color, children, rounded = false, width, ...restProps }) => {
    const widthBtn = {
      width,
    };

    const finalClassName = ` ${s.button} ${
      rounded ? s.button__rounded : s.button__default
    } 
    ${colorClass[color]}`;

    return (
      <button type="button" className={finalClassName} style={widthBtn} {...restProps}>
        <span>{children}</span>
      </button>
    );
  },
);
