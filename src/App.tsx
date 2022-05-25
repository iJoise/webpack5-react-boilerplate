import React from "react";
import s from "./styles/app.module.scss";
import { About } from "./pages/About";

const App = () => (
  <div className={s.wrapper}>
    <main className={s.page}>
      <div className={s.container}>
        <About />
      </div>
    </main>
  </div>
);

export default App;
