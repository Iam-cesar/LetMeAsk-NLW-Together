import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import illustration from '../../assets/images/illustration.svg'
import logoApp from '../../assets/images/logo.svg'
import '../../styles/auth.scss'

import { Button } from '../../components/Button'
import { database } from '../../services/firebase'

import { useAuth } from '../../hooks/useAuth'

export function NewRoom(){

	const {user} = useAuth()

	const [newRoom, setNewRoom] = useState('')
	
	const history = useHistory()

	async function handleCreateRoom(e: FormEvent){
		e.preventDefault()

		if (newRoom.trim() === ''){
			return
		}

		const roomRef = database.ref('rooms')

		const firebaseRoom = await roomRef.push({
			title: newRoom,
			authorId: user?.id,
		})

		history.push(`/rooms/${firebaseRoom.key}`)
	}

	return(
		<div id='page-auth'>

			<aside>
				<img src={illustration} alt="simbolizando perguntas e respostas" />
				<strong>Toda pergunta tem uma resposta.</strong>
				<p>Aprenda e compartilhe conhecimento com outras pessoas</p>
			</aside>

			<main>
				<div className="main-content">
					<img src={logoApp} alt="letmeask" />
					<h2>Criar uma nova sala</h2>

					<form onSubmit={handleCreateRoom}>
						<input
							type="text"
							placeholder="Nome da sala"
							onChange={event => setNewRoom(event.target.value)}
							value={newRoom}
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