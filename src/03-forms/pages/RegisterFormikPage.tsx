import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../components'

import '../styles/styles.css'

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Page</h1>

			<Formik
				initialValues={{
					name: '',
					email: '',
					password: '',
					passwordConfirmation: '',
				}}
				onSubmit={values => {
					console.log(values)
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, 'El nombre debe ser de 3 caracteres a mas')
						.max(15, 'El nombre debe ser de 15 caracteres a menos')
						.required('Este campo es necesario'),
					email: Yup.string().email('Revise el formato del correo'),
					password: Yup.string().min(6, 'Minimo 6 caracteres').required('Este campo es necesario'),
					passwordConfirmation: Yup.string()
						.oneOf([Yup.ref('password')], 'Las contraseñas deben ser iguales')
						.required('Este campo es necesario'),
				})}
			>
				{({ handleReset }) => (
					<Form>
						<MyTextInput type="text" label="Nombre" name="name" placeholder="Paul Ccuno" />

						<MyTextInput type="text" label="Email" name="email" placeholder="paulccuno@gmail.com" />

						<MyTextInput type="password" label="Password" name="password" placeholder="******" />

						<MyTextInput
							type="password"
							label="Confrimacion de Password"
							name="passwordConfirmation"
							placeholder="******"
						/>

						<button type="submit">Create</button>

						<button type="button" onClick={handleReset}>
							Reset Form
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
