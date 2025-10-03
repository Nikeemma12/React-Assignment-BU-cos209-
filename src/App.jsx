import { AboutUs } from "./Component/About Us";
import { Contact } from "./Component/Contact";
import { Services } from "./Component/Services";
import { Banner } from "./Component/Banner";

export const App = () => {
  return (
    <>
      <h1>Hello world</h1>
      <Banner />
      <AboutUs />
      <Services />
      <Contact />
    </>
  );
};
