const buttons = document.querySelectorAll('button');
const box = document.getElementById('animatedBox');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    animateBox(button);
  });
});

function animateBox(button) {
  const buttonColor = window.getComputedStyle(button).backgroundColor;
  box.style.borderColor = buttonColor;


  box.style.transition = 'top 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55), transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)';


  box.style.top = '0';
  box.style.left = '50%';
  box.style.transform = 'translate(-50%, 0)';

  box.classList.add('going-down');


  const transitionEndHandler = () => {
    box.style.transition = 'none';
    box.style.top = '50%';
    box.style.left = '50%';
    box.style.transform = 'translate(-50%, -50%)';

    if (box.offsetTop === window.innerHeight / 2) {
      box.classList.add('bounce');
    }

    box.removeEventListener('transitionend', transitionEndHandler);
    box.classList.remove('going-down', 'bounce');
  };

  box.addEventListener('transitionend', transitionEndHandler);
}
