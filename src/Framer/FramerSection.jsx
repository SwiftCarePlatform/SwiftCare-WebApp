import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section = ({ children, initial, animate, transition, refProp }) => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={refProp || sectionRef}
      initial={initial}
      animate={inView ? animate : {}}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Section;
