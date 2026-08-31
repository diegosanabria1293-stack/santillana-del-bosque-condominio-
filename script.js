(() => {
  const oldStylesheet = document.querySelector('link[href="style.css"]');
  if (oldStylesheet) oldStylesheet.remove();
  document.body.innerHTML = '<div id="root"></div>';
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = '/assets/index-BjwF_rMp.css';
  document.head.appendChild(stylesheet);
  const app = document.createElement('script');
  app.type = 'module';
  app.src = '/assets/index-bQlaO-c9.js';
  document.head.appendChild(app);
})();