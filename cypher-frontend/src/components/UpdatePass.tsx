import SectionWrapper from "./HOC/SectionWrapper";

const UpdatePass = () => {
  return (
    <div>
      <div className="mb-3">Password</div>
      <input
        type="password"
        className="w-full px-2 py-2 my-2 outline-none rounded-lg"
        placeholder="********"
      />
    </div>
  );
};

const UpdatePassSection = () =>
  SectionWrapper(UpdatePass, "PASSWORD & SECURITY", true);

export default UpdatePassSection;
