import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {
  className?: string;
};

const Button: React.FC<Props> = ({ children, className }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={className}
      onMouseDown={(e) => e.preventDefault()}
    >
      {children}
    </motion.button>
  );
};

export default styled(Button)`
  padding: 0.8em 4em;
  font-size: 16px;
  background-color: #065dd3;
  border-radius: 32px;
`;
