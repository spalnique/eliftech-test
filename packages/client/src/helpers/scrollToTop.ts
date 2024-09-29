const scrollToTop = () => {
  const tId = setTimeout(() => {
    window.scrollTo({ top: 70, behavior: 'smooth' });
    clearTimeout(tId);
  }, 500);
};

export default scrollToTop;
