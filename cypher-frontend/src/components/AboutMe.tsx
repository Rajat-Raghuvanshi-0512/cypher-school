import SectionWrapper from "./HOC/SectionWrapper";

const AboutMe = () => {
  return (
    <div>
      <textarea
        name="about"
        id="about"
        className="w-full h-32 resize-none rounded-lg outline-none px-4 text-sm py-5"
      ></textarea>
    </div>
  );
};

const AboutSection = () => SectionWrapper(AboutMe, "About", true);

export default AboutSection;
