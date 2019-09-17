import React, { useState } from 'react';
import logo from '../../img/logo.svg';
import './login.css';
import Api from '../../services/api';

function Login(props) {
	const { history } = props;

	const [textLogin, setTextLogin] = useState('');

	async function tryAuthentication(event) {
		event.preventDefault();

		const res = await Api.post('/dev', {
			userName: textLogin
		});

		const { _id } = res.data.result;

		history.push(`/dev/${_id}`);
	}

	return (
		<div className='container-login'>
			<form onSubmit={tryAuthentication}>
				<img src={logo} alt='Logo' />
				<input
					type='text'
					placeholder='Digite seu usuário do GitHub.'
					value={textLogin}
					onChange={event => setTextLogin(event.target.value)}
				/>
				<button type='submit'>Enviar</button>
			</form>
		</div>
	);
}

export default Login;
