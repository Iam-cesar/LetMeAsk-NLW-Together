import { Link } from 'react-router-dom'

import illustration from '../assets/images/illustration.svg'
import logoApp from '../assets/images/logo.svg'
import '../styles/auth.scss'

import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'


export function NewRoom(){

	const {user} = useAuth()

	return(
		<div id='page-auth'>

			<aside>
				<img src={illustration} alt="simbolizando perguntas e respostas" />
				<h1>{user?.name}</h1>
				<strong>Toda pergunta tem uma resposta.</strong>
				<p>Aprenda e compartilhe conhecimento com outras pessoas</p>
			</aside>

			<main>
				<div className="main-content">
					<img src={logoApp} alt="letmeask" />
					<h2>Criar uma nova sala</h2>

					<form>
						<input
							type="text"
							placeholder="Nome da sala"
						/>

						<Button type="submit">
							Criar sala
						</Button>

						<p>Quer entrar em uma sala existente <Link to="/">Clique aqui</Link></p>
					</form>
				</div>
			</main>
		</div>
	)
}