import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  // Check if the project is in the third row (assuming 3 projects per row)
  const isThirdRow = index >= 6;
  const thirdRowWidth = "w-[260px]"; // Adjusted width for correct aspect ratio
  const thirdRowHeight = "h-[445px]"; // Adjusted height for correct aspect ratio

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ scale: 1.1 }} // add this line
      transition={{ duration: 0.3 }} // add this line
    >
      {" "}
      <div
        className={`bg-tertiary ${
          isThirdRow
            ? "p-4 sm:w-[250px] mx-auto rounded-xl"
            : "p-5 sm:w-[360px] rounded-2xl"
        } w-full`}
        options={{ max: 45, scale: 1, speed: 450 }}
      >
        <div
          className={`relative w-full ${
            isThirdRow ? "h-[430px]" : "h-[230px]"
          }`}
        >
          <img
            src={image}
            alt={name}
            className={`w-full h-full rounded-2xl ${
              isThirdRow ? "rounded-x1" : "rounded-2x1"
            } object-cover`}
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          Here are some projects that I've been working on, from iOS apps to
          data analysis via machine learning.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.slice(0, 6).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}

        {/* Wrap the third row in a flex container to keep it in one row */}
        <div className="w-full flex justify-center gap-7">
          {projects.slice(6).map((project, i) => (
            <ProjectCard key={`project-${6 + i}`} index={6 + i} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};
const WrappedWorks = SectionWrapper(Works, "works");
export default WrappedWorks;
