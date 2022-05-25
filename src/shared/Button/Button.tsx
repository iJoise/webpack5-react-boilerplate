import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./style/Button.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  rounded?: boolean;
  width?: string | number | undefined;
};

export const Button: React.FC<SuperButtonPropsType> = React.memo(
  ({ children, className, rounded = false, width, ...restProps }) => {
    const widthBtn = {
      width,
    };

    const finalClassName = `${className} ${s.button} ${
      rounded ? s.button__rounded : s.button__default
    }`;

    return (
      <button type="button" className={finalClassName} style={widthBtn} {...restProps}>
        {children}
      </button>
    );
  },
);
