import { FormEvent, useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { database } from '../services/firebase'

import illustration from '../assets/images/illustration.svg'
import logoApp from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'
import '../styles/auth.scss'

import { Button } from '../components/Button'
import { AuthContext } from '../contexts/Authcontext'

export function Home(){

	const history = useHistory()
	const { signInWithGoogle, user } = useContext(AuthContext);
	const [roomCode, setRoomCode] = useState('')

	async function handleCreateRoom(){

		user || await signInWithGoogle() // caso nao haja usuario logado dispara a funcao

		history.push('/rooms/new')
	}

	async function handleJoinRoom(event: FormEvent){
		event.preventDefault()

		if (roomCode.trim() === ''){
			return
		}

		const roomRef = await database.ref(`rooms/${roomCode}`).get()

		if (!roomRef.exists()){
			alert('Room does not exists.')
			return
		}

		history.push(`/rooms/${roomCode}`)
	}

	return (
		<div id='page-auth'>

			<aside>
				<img src={illustration} alt="simbolizando perguntas e respostas" />
				<strong>Toda pergunta tem uma resposta.</strong>
				<p>Aprenda e compartilhe conhecimento com outras pessoas</p>
			</aside>

			<main>
				<div className="main-content">

					<img src={logoApp} alt="letmeask" />

					<button className="create-room" onClick={handleCreateRoom}>
						<img src={googleIcon} alt="logo do google" />
						Crie sua sala com o Google
					</button>

					<div className="separator">Ou entre em uma sala</div>

					<form onSubmit={handleJoinRoom}>
						<input
							type="text"
							placeholder="Digite o codigo da sala"
							onChange={event => setRoomCode(event.target.value)}				
						/>

						<Button type="submit">
							Entrar na sala
						</Button>

					</form>
				</div>
			</main>
		</div>
	)
}