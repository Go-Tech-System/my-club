import React from 'react';
import './login.css'
import '../../App.css'
import { useSelector } from 'react-redux';
import { selectSettings } from '../../Redux/reducers/configSlice';
import { useNavigate } from "react-router-dom";
import LogoApp from '../../assets/img/logo200x200.png'

function Login() {
  const { version, warnings, promotions } = useSelector(selectSettings);

  const navigate = useNavigate();
  return (
    <section className='container_login'>
      <div className='container_warnings'>
        <div className='container_title_warning'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img className='logo_warning' src={LogoApp} alt="logo" />
            <h2>Avisos:</h2>
          </div>
          <p className='version'>Versão: {version}</p>
        </div>
        <div className='box_warning'>
          <textarea className={`warnings border_light box_ligth`} disabled name='warnings' value={warnings} />
          <h3>Planos:</h3>
          <div className={`box_promotions`}>
            {promotions.map((e) => {
              return (
                <div className={`box_promo border_light box_ligth`}>
                  <h3>{e.name}</h3>
                  <p>R$ {e.value}</p>
                  <p>R$ {e.describe}</p>
                  <button>Assinar</button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div>
        <img src={LogoApp} alt="" />
        <form>
          <label>
            Usuário:
            <input type="text" />
          </label>
          <label>
            Senha:
            <input type="password" />
          </label>
          <button type='button' onClick={() => navigate("/cliente")}>
            LOGIN
          </button>
        </form>
      </div>
    </section>
  )
}

export default Login