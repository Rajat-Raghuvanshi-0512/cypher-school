import {
  AboutMe,
  CipherMap,
  Education,
  Interests,
  Navbar,
  SocialMedia,
  UpdatePass,
  HeroSection,
} from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <CipherMap />
      <SocialMedia />
      <Education />
      <UpdatePass />
      <Interests />
    </>
  );
};

export default App;
