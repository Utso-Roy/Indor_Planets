const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgb(167, 243, 208)" },
};

export default cardVariants