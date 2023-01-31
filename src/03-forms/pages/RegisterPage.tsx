import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

interface RegisterData {
	name: string
	email: string
	password1: string
	password2: string
}

export const RegisterPage = () => {
	const { name, email, password1, password2, formData, onChange, isValidEmail, resetForm } = useForm(
		{
			name: '',
			email: '',
			password1: '',
			password2: '',
		}
	)

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		console.log(formData)
	}

	return (
		<div>
			<h1>Register Page</h1>

			<form noValidate onSubmit={onSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={name}
					onChange={onChange}
					className={`${name.trim().length <= 0 && 'has-error'}`}
				/>
				{name.trim().length <= 0 && <span>Este campo es necesario</span>}

				<input
					type="email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={onChange}
					className={`${!isValidEmail(email) && 'has-error'}`}
				/>
				{!isValidEmail(email) && <span>Email no es valido</span>}

				<input
					type="password"
					name="password1"
					placeholder="Password"
					value={password1}
					onChange={onChange}
					className={`${(password1.trim().length <= 0 || password1.trim().length < 6) && 'has-error'}`}
				/>
				{password1.trim().length <= 0 && <span>Este campo es necesario</span>}
				{password1.trim().length < 6 && <span>La contraseña debe tener 6 letras</span>}

				<input
					type="password"
					name="password2"
					placeholder="Repeat Password"
					value={password2}
					onChange={onChange}
					className={`${
						(password2.trim().length <= 0 || (password2.trim().length > 0 && password2 !== password1)) &&
						'has-error'
					}`}
				/>
				{password2.trim().length <= 0 && <span>Este campo es necesario</span>}
				{password2.trim().length > 0 && password2 !== password1 && (
					<span>Las contraseñas deben ser iguales</span>
				)}

				<button type="submit">Create</button>
				<button type="button" onClick={resetForm}>
					Reset Form
				</button>
			</form>
		</div>
	)
}
