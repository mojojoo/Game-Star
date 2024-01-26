/** @format */

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const revealVariants = {
    hidden: {
      opacity: 0,
      y: 175,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      //Fire the animation
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} className="relative z-[90]">
      <motion.div
        variants={revealVariants}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
