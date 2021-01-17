import React from 'react';
import '../style/LoginPage.css'

const LoginPage = () => {
    return (  
        <div className='entrance'>
            <div className="entrance__border">
        <label htmlFor="login">Podaj login: <input id="login"type="text"/></label>
        <label htmlFor="password">Podaj hasło: <input id="password"type="password"/></label>
        <button>Zatwierdź</button>
        </div>
        </div>
    );
}
 
export default LoginPage;
