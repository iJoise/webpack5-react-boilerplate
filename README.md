# Бойлерплейт webpack 5 + react + typescript

[![codecov](https://codecov.io/gh/iJoise/webpack5-react-boilerplate/branch/main/graph/badge.svg?token=93NZC7OGWC)](https://codecov.io/gh/iJoise/webpack5-react-boilerplate)

## Возможности:

1. ___CSS module / Preprocessor___
    * Sass/Scss
    * PostCss
    * autoprefixer
    * Для модулей реализованы имена классов как appName_componentName_hash

```html

<div class="app_app__SzUM+"></div>
```

***

2. ___SVG___
    * Возможность использовать svg как инлайн в css, как путь к картике в теге `<img src=path>` и как ReactComponent
    * Что бы использовать props `fill="#FA614A"` замените в svg `fill="current"`

```jsx
import React from 'react';
import logo, { ReactComponent as Logo } from '../assets/icons/logo.svg';

const App = () => (
  <div>
    <img src={logo} alt="logo" />
    <Logo height={100} width={100} fill="#FA614A" />
  </div>
);

export default App;
```

***

3. ___Поддеживаемые форматы___
    * Картинки
        * `ico, gif, png, jpg, jpeg, webp, avif`
    * Шрифты
        * `woff, woff2, eot, ttf, otf`
    * Документы
        * `pdf`

***

4. ___pre-commit + ESLint + Prettier___
    * При коммите запускается ESLint --fix
    * Форматирование кода с помощью Prettier

***

5. React.lazy

***

6. Тестирование React Testing Library + coverage
    * Примеры тестирования компонент и хуков
    * Выполните команду `npm run coveralls`
    * Запустите `serve coverage/lcov-report ` ( [serve](https://github.com/vercel/serve) ) что бы получить подробный
      отчёт в виде html

![coverage report](https://i.ibb.co/58cMPB2/2022-05-27-19-37-51.png)

***

7. GitHub Actions
    * Запускает ESLint
    * Запускает тесты
    * Для того что бы была возможность выгрузить результаты на [https://app.codecov.io/](https://app.codecov.io/),
      зарегестрируйтесь на сайте, создайте файл `.env` и вставте ключ который будет доступен после
      регистрации `CODECOV_TOKEN=token` 
