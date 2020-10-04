export default () => {
  const rules = document.querySelectorAll(`.rules__item`);
  const button = document.querySelector(`.rules__link`);

  rules.forEach((item, index)=> {
    const currentIndex = index + 1;
    if (currentIndex === rules.length) {
      item.onanimationend = () => {
        button.classList.add(`rules__link--active`);
      };
    }
  });
};
