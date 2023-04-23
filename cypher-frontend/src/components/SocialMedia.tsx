import SectionWrapper from "./HOC/SectionWrapper";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <section>
      <div className="flex gap-5">
        <div className="flex-1 pr-5">
          <div className="mt-2">Linked In</div>
          <div className="relative">
            <input
              type="text"
              className="w-full px-2 py-2 my-2 outline-none rounded-lg placeholder:font-light pl-12"
              placeholder="LinkedIn"
            />
            <TiSocialLinkedinCircular className="absolute left-3 top-3 w-8 h-8" />
          </div>
          <div className="mt-2">Facebook</div>
          <div className="relative">
            <input
              type="text"
              className="w-full px-2 py-2 my-2 outline-none rounded-lg placeholder:font-light pl-12"
              placeholder="Facebook"
            />
            <FaFacebook className="absolute left-3 top-4 w-6 h-6" />
          </div>
          <div className="mt-2">Instagram</div>
          <div className="relative">
            <input
              type="text"
              className="w-full px-2 py-2 my-2 outline-none rounded-lg placeholder:font-light pl-12"
              placeholder="Instagram"
            />
            <AiFillInstagram className="absolute left-3 top-4 w-6 h-6" />
          </div>
        </div>
        <div className="flex-1 pl-5">
          <div className="mt-2">Github</div>
          <div className="relative">
            <input
              type="text"
              className="w-full px-2 py-2 my-2 outline-none rounded-lg placeholder:font-light pl-12"
              placeholder="Github"
            />
            <FaGithub className="absolute left-3 top-4 w-6 h-6" />
          </div>

          <div className="mt-2">Twitter</div>
          <div className="relative">
            <input
              type="text"
              className="w-full px-2 py-2 my-2 outline-none rounded-lg placeholder:font-light pl-12"
              placeholder="Twitter"
            />
            <AiFillTwitterCircle className="absolute left-3 top-4 w-6 h-6" />
          </div>

          <div className="mt-2">Website</div>
          <div className="relative">
            <input
              type="text"
              className="w-full px-2 py-2 my-2 outline-none rounded-lg placeholder:font-light pl-12"
              placeholder="Website"
            />
            <BsGlobe2 className="absolute left-3 top-4 w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialMediaSection = () =>
  SectionWrapper(SocialMedia, "On the web", true);

export default SocialMediaSection;
