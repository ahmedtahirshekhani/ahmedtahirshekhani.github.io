import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { team } from "../constants";

const FeedbackCard = ({
  index,
  team,
  name,
  status,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{team}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
        <p className='text-white font-black text-[48px]'>"</p>
          <p className='text-white font-medium text-[16px]'> {name} </p>
          <p className='text-white font-medium text-[10px]'> {status}
          </p>
        </div>

      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-6 bg-black-100 rounded-[10px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[100px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText} >Introducing Ecomise Tech:<p className={styles.sectionSubText}> Crafting Digital Excellence</p></h2>
          <p>In a world where digital presence is paramount, Ecomise Tech emerges as a beacon of innovation and expertise. We are not just an IT services provider; we are architects of digital transformation, dedicated to propelling your business to the forefront of the digital landscape.</p>
          <p className={styles.sectionSubText}> Our Team of Pioneers:</p>
          <p>At Ecomise Tech, we understand that the heart of any successful venture lies in its people. Our team comprises seasoned professionals, each a master in their domain. Allow us to introduce you to the luminaries who fuel our success:</p>
          <h2 className={styles.sectionHeadText} >Team</h2>
        </motion.div>
      </div>
      <div className={`-mt-10 pb-4 ${styles.paddingX} flex flex-wrap gap-7`}>
        {team.map((team, index) => (
          <FeedbackCard key={team.name} index={index} {...team} />
        ))}
        <div className="m-auto mb-5"><strong>And many more ...</strong></div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "Team");
