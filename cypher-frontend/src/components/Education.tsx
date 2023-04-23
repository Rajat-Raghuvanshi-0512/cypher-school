import SectionWrapper from "./HOC/SectionWrapper";

const Education = () => {
  return <div>Education</div>;
};

const EducationSection = () =>
  SectionWrapper(Education, "PROFESSIONAL INFORMATION", true);

export default EducationSection;
