// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import s from "./App.module.scss";
import { About } from "../widgets/About";
import { Banner } from "../widgets/Banner";
import { Contacts } from "../widgets/Contacts";
import { Footer } from "../widgets/Footer";
import { Header } from "../widgets/Header";
import { Projects } from "../widgets/Projects";
import { Stack } from "../widgets/Stack";

function App() {
  return (
    <div className={`${s.app} app_light_theme`}>
      <Header />
      <Banner />
      {/* <About /> */}
      {/* <Stack /> */}
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
