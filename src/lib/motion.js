export const childrenVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const container = {
  show: (i = 4) => ({
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: i * 0.1 },
  }),
};
