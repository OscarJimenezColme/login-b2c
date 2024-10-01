import React, { useState } from 'react';

export function CompanyRegisterForm() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className="grid grid-cols-1 w-10/12 pr-20">
      <div className="mb-4">
        <div className="right-section">
          <h2><strong>Iniciar Sesión</strong></h2>

          <p>Si no tienes cuenta <strong><a href="https://cs-portal-clientes-qa-cxcydsbyf3f7b0dy.a03.azurefd.net/registro-empresa">Regístrate acá</a></strong> </p>

          {/* <!-- Login Form --> */}
          <div className='p-[25px] bg-[#f9fafb] rounded-[20px]'>
            <div id="api"></div>
            {/* <form action="#" method="post">
                <div className="form-group cm-text-gray--100">
                    <strong><label id="username">Nombre de usuario</label></strong>
                    <input onChange={(e)=> setUserName(e.target.value)} type="text" id="username" name="username" placeholder="Escribe tu usuario" required />
                </div>

                <div className="form-group cm-text-gray--100">
                    <strong><label id="password">Contraseña</label></strong>
                    <input onChange={(e)=> setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Introduce tu contraseña" required />
                </div>

                <div className="form-group cm-text-gray--100">
                    <button className='disabled:bg-[#bdc2c7] disabled:hover:bg-[#bdc2c7] font-bold py-2 px-4 rounded' 
                    disabled={!userName || !password} type="submit">Ingresar</button>
                </div>

                <div className="forgot-password">
                    <a href="#">Olvide mi contraseña</a>
                </div>
            </form> */}
          </div>

          {/* <!-- Social Login --> */}
          {/* <div className="social-login">
              <p>También puedes continuar a través de:</p>
              <div className='grid grid-cols-2 gap-4 text-center'>
                <div className="flex justify-center items-center">
                  <a href="#" className="flex items-center gap-x-2">
                    <img src="https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png" alt="Google" className="w-6 h-6" />
                    <strong>Google</strong>
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a href="#" className="flex items-center gap-x-2">
                    <img src="https://cdn.pixabay.com/photo/2021/08/10/15/36/microsoft-6536268_1280.png" alt="Microsoft" className="w-6 h-6" />
                    <strong>Microsoft</strong>
                  </a>
                </div>
              </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
