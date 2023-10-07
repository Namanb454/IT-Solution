import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = () => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="gradient-border relative text-lg w-40 h-10 bg-black/[0.8] tracking-widest font-semibold hover:bg-neutral"
        >
            Hire Me
        </motion.button>
    );
};

export default AnimatedButton;
