import React from "react";
import s from "./style/About.module.scss";
import logo from "../../assets/icons/logo.svg";
import { ReactComponent as Logo } from "../../assets/icons/logo2.svg";
import { useGenerateColor } from "../../hooks/useGenerateColor";
import { Button } from "../../shared/Button";

export const About = () => {
  const { randomColor, generateColor } = useGenerateColor();

  return (
    <div className={s.about}>
      <h1 className={s.about__title}>React Boilerplate</h1>
      <h2 className={s.about__subtitle}>Happy coding!</h2>
      <div className={s.about__body}>
        <div className={s.about__column}>
          <pre>{"<img src={logo} />"}</pre>
          <img src={logo} className={s.about__image} alt="logo" />
        </div>

        <div className={s.about__column}>
          <pre>ReactComponent</pre>
          <Logo
            data-testid="react-svg"
            width={200}
            height={200}
            fill={randomColor}
            className={s.about__image}
          />
          <Button className={s.about__btn} rounded type="button" onClick={generateColor}>
            Set color
          </Button>
        </div>

        <div className={s.about__column}>
          <pre>background-image</pre>
          <div className={s.about__background} />
        </div>
      </div>
    </div>
  );
};
