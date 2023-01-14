import { userState, useState } from 'react';
import Logo from '../components/Logo';
import addClass from '../utils/addClass';
import Slider from './login/Slider';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Registro = (e) => {
  addClass();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password_validator: '',
  });
  const submit = (e) => {
    e.preventDefault();
    const target = e.target;
    const formData = new FormData(target);
    setUser({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      password_validator: formData.get('password_validator'),
    });
    if (user.password_validator !== user.password) {
      alert('Las contraseñs debe ser iguales');
      return;
    }
    const button = e.target.querySelector('button');
    button.innerHTML = '<img src="/img/load.svg" alt="">';
    // console.log(ajax('/login', dataForm, 'post'))
    const options = {
      method: 'POST',
      data: JSON.stringify(user),
      headers: {
        'content-type': 'application/json',
      },
    };
    axios('https://ceacademy-auth-production.up.railway.app/users', options)
      // axios('http://localhost:5000/login', options)
      .then((res) => {
        button.innerHTML = 'correcto';
        if (res.status >= 200 && res.status < 300) {
          navigate('/login');
        }
        // const { decodedToken, isExpired, reEvaluateToken } = useJwt(res.data.token);
        // console.log(decodedToken)
        // navigate('/media');
      })
      .catch((err) => {
        // e.target.querySelector('button').innerHTML='error'
        console.log(err);
      });
    console.log(user);
  };
  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <section className="login form-section">
      <div className="form-section__img">
        <div className="img-logo">
          <Logo />
          <Slider />
        </div>
        <img
          src="/img/login-bg.jpg"
          className="img-fondo"
          alt="fondo registro"
          onSubmit={submit}
        />
      </div>
      <div className="form-section__container">
        <div className="form-section__header">
          <a className="form-section__logo1" href="/">
            <img src="/img/logo.svg" alt="" />
            <Slider />
          </a>
          <NavLink to="/login" className="ini-sesion">
            Inicia Sesión
          </NavLink>
        </div>
        <h1>Registrate con Nosotros</h1>
        <form
          action=""
          className="form-section__form"
          autoComplete="off"
          onSubmit={submit}
        >
          <div className="group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" "
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <label htmlFor="email1">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              id="email1"
              placeholder=" "
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <label htmlFor="password_validator">Repetir Contraseña</label>
            <input
              type="password"
              name="password_validator"
              id="password_validator"
              placeholder=" "
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="form-registro__footer">
            <div className="notes show"></div>
            <button className="register-btn">Registrar</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registro;
