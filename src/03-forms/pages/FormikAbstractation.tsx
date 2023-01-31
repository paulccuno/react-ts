import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyCheckbox, MySelect, MyTextInput } from '../components'
import '../styles/styles.css'

export const FormikAbstractation = () => {
	return (
		<div>
			<h1>Formik Abstractation</h1>

			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					terms: false,
					jobType: '',
				}}
				onSubmit={values => {
					console.log(values)
				}}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
					lastName: Yup.string().max(10, 'Debe de tener 10 caracteres o menos').required('Requerido'),
					email: Yup.string().email('El correo no tiene un formato valido').required('Requerido'),
					terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
					jobType: Yup.string()
						.notOneOf(['it-junior'], 'Esta opcion no es permitida')
						.required('Requerido'),
				})}
			>
				{formik => (
					<Form>
						<MyTextInput label="First Name" name="firstName" placeholder="Paul" />

						<MyTextInput label="Last Name" name="lastName" placeholder="Ccuno" />

						<MyTextInput label="Email" type="email" name="email" placeholder="paul@gmail.com" />

						<MySelect label="Job Type" name="jobType">
							<option value="">Pick something</option>
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-senior">IT-Senior</option>
							<option value="it-junior">IT-Junior</option>
						</MySelect>

						<MyCheckbox label="Terms and Conditions" name="terms" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
