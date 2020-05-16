
const setRem = (baseWidth = 1920) => {
  const dpr = window.devicePixelRatio;
  const currentWidth = document.documentElement.clientWidth;
  let remSize = 0;
  let scale = 0;
  scale = currentWidth / baseWidth;
  remSize = 100;
  remSize = remSize * scale;
  document.documentElement.style.fontSize = remSize + 'px';
  document.documentElement.setAttribute('data-dpr', `${dpr}`);
};

const resizeWindow = (callback) => {
  let reSetRem = true;
  window.addEventListener('resize', () => {
      if (reSetRem) {
          reSetRem = false;
          setTimeout(() => {
              reSetRem = true;
              callback();
          }, 66);
      }
  });
};

resizeWindow(() => { setRem(1920); });

setRem(1920);