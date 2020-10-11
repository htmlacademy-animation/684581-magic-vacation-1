// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import animate from './modules/animate';
import rules from './modules/rules';
import LetterAnimate from "./modules/letter-animate";
// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
animate();
rules();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const animationSloag = new LetterAnimate(`.intro__title`, 1000, `active`, `transform`);
const animationDate = new LetterAnimate(`.intro__date`, 1000, `active`, `transform`);
setTimeout(()=>{
  animationSloag.runAnimation();
}, 500);
setTimeout(()=>{
  animationDate.runAnimation();
}, 1000);
