export const fadeIn = (direction) => {
  return {
    hidden: {
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      opacity: 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
      transition: {
        type: 'tween',
        duration: 0.25,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.25,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
