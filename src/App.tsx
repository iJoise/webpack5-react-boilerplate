import React from "react";
import s from "./styles/app.module.scss";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";

const App = () => (
  <div className={s.wrapper}>
    <main className={s.page}>
      <div className={s.container}>
        <About />
      </div>
    </main>
    <Footer />
  </div>
);

export default App;
