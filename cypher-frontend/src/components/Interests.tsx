import SectionWrapper from "./HOC/SectionWrapper";

const Interests = () => {
  return <div>Interests</div>;
};

const InterestsSection = () => SectionWrapper(Interests, "Interests", true);

export default InterestsSection;
