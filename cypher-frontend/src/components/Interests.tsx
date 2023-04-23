import SectionWrapper from "./HOC/SectionWrapper";

const Interests = () => {
  return (
    <section className="flex gap-4 ">
      <span className="bg-[#F3E8E3] text-[#F3912E] text-sm px-3 py-2 rounded">
        Web development
      </span>
      <span className="bg-[#F3E8E3] text-[#F3912E] text-sm px-3 py-2 rounded">
        App development
      </span>
      <span className="bg-[#F3E8E3] text-[#F3912E] text-sm px-3 py-2 rounded">
        Programming
      </span>
    </section>
  );
};

const InterestsSection = () => SectionWrapper(Interests, "Interests", true);

export default InterestsSection;
