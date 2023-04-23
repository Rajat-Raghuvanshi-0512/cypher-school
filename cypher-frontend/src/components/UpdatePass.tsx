import SectionWrapper from "./HOC/SectionWrapper";

const UpdatePass = () => {
  return <div>UpdatePass</div>;
};

const UpdatePassSection = () =>
  SectionWrapper(UpdatePass, "PASSWORD & SECURITY", true);

export default UpdatePassSection;
