const addClass = () => {
  if (location.pathname === '/login' || location.pathname === '/registro') {
    document.documentElement.classList.add('isloginpage');
  } else {
    document.documentElement.classList.remove('isloginpage');
  }
};

export default addClass;
