import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Fade-Up Component
export const FadeUp = ({ children, duration = 1, delay = 0, className }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: duration * 0.75, delay: delay },
        y: { 
          type: "spring", 
          damping: 15, 
          stiffness: 100,
          delay: delay 
        }
      }
    }
  };

  if (!isClient) {
    return (
      <div 
        className={className} 
        style={{ 
          opacity: 0,
          transform: 'translateY(60px)',
          display: 'inline-block',
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      style={{ 
        display: "inline-block",
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
};

// Zoom-In Component
export const ZoomIn = ({ children, duration = 1, delay = 0, className }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: duration * 0.75, delay: delay },
        scale: { 
          type: "spring", 
          damping: 20, 
          stiffness: 100,
          delay: delay 
        }
      }
    }
  };

  if (!isClient) {
    return (
      <div 
        className={className} 
        style={{ 
          opacity: 0,
          transform: 'scale(0.8)',
          display: 'inline-block',
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      style={{ 
        display: "inline-block",
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
};