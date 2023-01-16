import { userState, useState } from 'react';
import Logo from '../components/Logo';
import addClass from '../utils/addClass';
import Slider from './login/Slider';
import { NavLink, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';

const resDrow = (name) => {
  console.log('llega');
  const modalRes = document.createElement('div');
  modalRes.className = 'modal-res';
  modalRes.innerHTML = `
    <div class="modal-res__container">
      <img src="/img/logo.svg" alt="" />
      <h2>
        !Gracias por tu registro ${name}!
      </h2>
      <p>
        Estamos validado tus datos, si está todo eb orden racibiráns un correo con tu usuario y contraseña directo en tu email.
      </p>
      <a href="/">Cerrar</a>
    </div>
  `;
  document.body.appendChild(modalRes);
};

const Registro = (e) => {
  addClass();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    lastName: '',
    email: '',
    address: '',
    discordId: '',
    telegramId: '',
    phone: '',
    codeMember: '',
  });
  const submit = (e) => {
    e.preventDefault();
    const target = e.target;
    const formData = new FormData(target);
    setUser({
      name: formData.get('name'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      address: formData.get('address'),
      discordId: formData.get('discordId'),
      telegramId: formData.get('telegramId'),
      phone: formData.get('name'),
      codeMember: formData.get('codeMember'),
    });
    // if (user.password_validator !== user.password) {
    //   alert('Las contraseñs debe ser iguales');
    //   return;
    // }
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
      // axios('http://localhost:5000/users', options)
      .then((res) => {
        console.log(res);
        button.innerHTML = 'correcto';
        if (res.status >= 200 && res.status < 300) {
          // navigate('/login');
          resDrow(user.name);
        }
        // const { decodedToken, isExpired, reEvaluateToken } = useJwt(res.data.token);
        // console.log(decodedToken)
        // navigate('/media');
      })
      .catch((err) => {
        e.target.querySelector('button').innerHTML = 'error';
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
        <form
          action=""
          className="form-section__form"
          autoComplete="off"
          onSubmit={submit}
        >
          <h1>Registrate con Nosotros</h1>
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
            <label htmlFor="lastName">Apellido</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
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
            <label htmlFor="address">Domicilio</label>
            <textarea
              name="address"
              id="address"
              placeholder=" "
              autoComplete="off"
              onChange={handleChange}
              rows="4"
            ></textarea>
            {/* <input
              type="text"
              name="address"
              id="address"
              placeholder=" "
              autoComplete="off"
              onChange={handleChange}
            /> */}
          </div>

          <div className="group">
            <label htmlFor="discordId">Usuario de discord</label>
            <input
              type="text"
              name="discordId"
              id="discordId"
              placeholder=" "
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <div className="group">
            <label htmlFor="telegramId">Usuario de telegram</label>
            <input
              type="text"
              name="telegramId"
              id="telegramId"
              placeholder=" "
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <div className="group">
            <label htmlFor="phone">Numero de contacto</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder=" "
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <div className="group">
            <label htmlFor="codeMember">Código de miembro</label>
            <input
              type="text"
              name="codeMember"
              id="codeMember"
              placeholder=" "
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          {/* <div className="group">
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
          </div> */}
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
