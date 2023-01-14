export const SelectParent = (el) => {
  while (!el.classList.contains('player')) {
    el = el.parentElement;
  }
  return el;
};
export const SelectButton = (el) => {
  while (el.nodeName !== 'I') {
    el = el.firstChild;
  }
  return el;
};

export const getElement = (el, cName) => {
  while (!el.classList.contains(cName)) {
    el = el.parentElement;
  }
  return el;
};

export const videoTimer = (current, total) => {};
