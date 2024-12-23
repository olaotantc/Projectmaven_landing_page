import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Fade-Up Component
export const FadeUp = ({ children, duration = 1, delay = 0, className }) => {
  const [isClient, setIsClient] = useState(false);

  // Ensures client-side rendering by checking for window
  useEffect(() => {
    setIsClient(true);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 60 }, // Initial state: hidden and offset vertically
    visible: { 
      opacity: 1, 
      y: 0, // Final state: visible and reset vertical position
      transition: {
        duration, // Duration of the animation
        delay, // Delay before the animation starts
        ease: [0.22, 1, 0.36, 1], // Easing function for smoothness
        opacity: { duration: duration * 0.75, delay }, // Animation for opacity
        y: { 
          type: "spring", 
          damping: 15, // Spring damping for smooth movement
          stiffness: 100, // Spring stiffness for desired movement
          delay // Delay for vertical movement
        }
      }
    }
  };

  // Return a static div while waiting for client-side rendering
  if (!isClient) {
    return (
      <div 
        className={className} 
        style={{ opacity: 0, transform: 'translateY(60px)', display: 'inline-block', willChange: 'transform', backfaceVisibility: 'hidden' }}
      >
        {children}
      </div>
    );
  }

  // Apply animation using Framer Motion once client-side rendering is done
  return (
    <motion.div
      variants={variants}
      initial="hidden" // Initial state (hidden)
      whileInView="visible" // Animate when in view
      viewport={{ once: true, amount: 0.8 }} // Trigger animation when 80% of the element is in view
      className={className}
      style={{ display: "inline-block", willChange: 'transform', backfaceVisibility: 'hidden' }}
    >
      {children}
    </motion.div>
  );
};

// Zoom-In Component
export const ZoomIn = ({ children, duration = 1, delay = 0, className }) => {
  const [isClient, setIsClient] = useState(false);

  // Ensures client-side rendering by checking for window
  useEffect(() => {
    setIsClient(true);
  }, []);

  const variants = {
    hidden: { opacity: 0, scale: 0.8 }, // Initial state: hidden and scaled down
    visible: { 
      opacity: 1, 
      scale: 1, // Final state: fully visible and at normal scale
      transition: {
        duration, // Duration of the animation
        delay, // Delay before the animation starts
        ease: [0.22, 1, 0.36, 1], // Easing function for smoothness
        opacity: { duration: duration * 0.75, delay }, // Animation for opacity
        scale: { 
          type: "spring", 
          damping: 20, // Spring damping for smooth scaling
          stiffness: 100, // Spring stiffness for desired scaling movement
          delay // Delay for scaling animation
        }
      }
    }
  };

  // Return a static div while waiting for client-side rendering
  if (!isClient) {
    return (
      <div 
        className={className} 
        style={{ opacity: 0, transform: 'scale(0.8)', display: 'inline-block', willChange: 'transform', backfaceVisibility: 'hidden' }}
      >
        {children}
      </div>
    );
  }

  // Apply animation using Framer Motion once client-side rendering is done
  return (
    <motion.div
      variants={variants}
      initial="hidden" // Initial state (hidden)
      whileInView="visible" // Animate when in view
      viewport={{ once: true, amount: 0.8 }} // Trigger animation when 80% of the element is in view
      className={className}
      style={{ display: "inline-block", willChange: 'transform', backfaceVisibility: 'hidden' }}
    >
      {children}
    </motion.div>
  );
};
