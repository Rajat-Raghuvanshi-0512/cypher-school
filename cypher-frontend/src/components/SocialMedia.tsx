import SectionWrapper from "./HOC/SectionWrapper";

const SocialMedia = () => {
  return <div>SocialMedia</div>;
};

const SocialMediaSection = () =>
  SectionWrapper(SocialMedia, "On the web", true);

export default SocialMediaSection;
