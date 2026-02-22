const refs = {
  loader: document.querySelector('.main-loader'),
  main: document.querySelector('.outer'),
};

setTimeout(() => {
  refs.loader.remove();
}, 1000);

setTimeout(() => {
  refs.main.classList.add('animate-in');
}, 600);
