# Бойлерплейт webpack 5 + react + typescript

## Возможности:

1. ___CSS module / Preprocessor___
    * Sass/Scss
    * PostCss
    * autoprefixer
    * Для модулей реализованы имена классов как appName_componentName_hash

```html

<div class='app_app__SzUM+'></div>
```
***
2. ___SVG___
    * Возможность использовать svg как инлайн в css, как путь к картике в теге `<img src=path>` и как ReactComponent
    * Что бы использовать props `fill="#FA614A"` замените в самом svg на `fill="current"`

```jsx
import React from 'react';
import logo, { ReactComponent as Logo } from '../assets/icons/logo.svg';
import s from '../styles/app.module.scss';

const App = () => (
        <div>
           <img src={logo} alt="logo" />
           <Logo height={100} width={100} fill="#FA614A"/>
        </div>
);

export default App;
```
***
3. Поддеживаемые форматы
   * Картинки
     * `ico, gif, png, jpg, jpeg, webp, avif`
   * Шрифты
     * `woff,woff2, eot. ttf, otf`
   * Документы
     * `pdf`
***
4. ___pre-commit + ESLint + Prettier___
   * При коммите запускается ESLint --fix
   * Форматирование кода с помощью Prettier
***
   
## ToDo

      настроить среду тестирования
