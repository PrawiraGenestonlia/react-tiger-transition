import { buildTransitionIn } from './buildTransition';

import { InjectStyle, getEasing } from '../../utils';

export default ({
  duration = 700,
  easing = 'ease',
  opacity = 0,
  replaceBackground = null,
  zIndex = 1,
  delay = 0,
} = {}) => {

  const animationName = 'ReactTigerTransitionFadeIn';

  const style = `
  .react-tiger-transition-fade-in {
    -webkit-animation: ${animationName} ${duration}ms ${getEasing(easing)} both;
    animation: ${animationName} ${duration}ms ${getEasing(easing)} both;
    z-index: ${zIndex};
    -webkit-animation-delay: ${delay}ms;
    animation-delay: ${delay}ms;
    opacity: ${opacity};
  }
  `;

  const animation = `
  @-webkit-keyframes ${animationName} {
    to {
      opacity: 1;
    }
  }
  @keyframes ${animationName} {
    to {
      opacity: 1;
    }
  }
  `;

  const rules = {
    style: new InjectStyle(style),
    animation: new InjectStyle(animation),
  };

  return buildTransitionIn({
    rules,
    replaceBackground,
    className: `react-tiger-transition-fade-in`,
  });
};