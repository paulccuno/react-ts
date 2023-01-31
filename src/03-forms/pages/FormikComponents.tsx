import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikComponents = () => {
	return (
		<div>
			<h1>Formik Components</h1>

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
						<label htmlFor="firstName">First Name</label>
						<Field type="text" name="firstName" />
						<ErrorMessage name="firstName" component="span" />

						<label htmlFor="lastName">Last Name</label>
						<Field type="text" name="lastName" />
						<ErrorMessage name="lastName" component="span" />

						<label htmlFor="email">Email Address</label>
						<Field type="email" name="email" />
						<ErrorMessage name="email" component="span" />

						<label>
							<Field type="checkbox" name="terms" />
							Terms and Conditions
						</label>
						<ErrorMessage name="terms" component="span" />

						<label htmlFor="jobType">Job Type</label>
						<Field name="jobType" as="select">
							<option value="">Pick something</option>
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-senior">IT-Senior</option>
							<option value="it-junior">IT-Junior</option>
						</Field>
						<ErrorMessage name="jobType" component="span" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>

			{/* <form noValidate onSubmit={handleSubmit}>
				<label htmlFor="firstName">First Name</label>
				<input type="text" {...getFieldProps('firstName')} />
				{touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

				<label htmlFor="firstName">Last Name</label>
				<input type="text" {...getFieldProps('lastName')} />
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor="email">Email Address</label>
				<input type="email" {...getFieldProps('email')} />
				{touched.email && errors.email && <span>{errors.email}</span>}

				<button type="submit">Submit</button>
			</form> */}
		</div>
	)
}
