import SectionWrapper from "./HOC/SectionWrapper";
import HeatMap from "./HeatMap";

const CipherMap = () => {
  return (
    <div>
      <HeatMap />
    </div>
  );
};

const CipherMapSection = () => SectionWrapper(CipherMap, "Cipher Map", false);

export default CipherMapSection;
