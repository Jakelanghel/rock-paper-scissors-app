import React from "react";
import { motion } from "framer-motion";

const Ring = (props) => {
  return (
    <motion.div
      variants={props.ringVariant}
      initial="hidden"
      animate="visible"
      className="ring"
    >
      <div className={`ring ${props.class}`}></div>
    </motion.div>
  );
};

export default Ring;
