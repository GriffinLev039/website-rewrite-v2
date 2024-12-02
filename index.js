window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    console.log(document.body.style.getPropertyValue("--scroll"));
  }, false);
  console.log("Done!");
