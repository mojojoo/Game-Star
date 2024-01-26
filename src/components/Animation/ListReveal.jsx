/** @format */

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const ListReveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const listVariants = {
    hidden: {
      opacity: 0,
      x: -175,
    },
    visible: {
      opacity: 1,
      x: 0,
      staggerChildren: 0.5,
    },
  };

  useEffect(() => {
    if (isInView) {
      //Fire the animation
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.li className="list-none" variants={listVariants}>
      {children}
    </motion.li>
  );
};

export default ListReveal;
