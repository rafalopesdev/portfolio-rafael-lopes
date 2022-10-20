const menuItens = document.querySelectorAll('nav a[href^="#"]');

menuItens.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick)
});

function getScrollToByHref(element) {  
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollToByHref(event.target);
  scrollToPosition(to);
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

/* function scroolToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to,
    behavior: "smooth",
  });
} */