import { ErrorMessage, useField } from 'formik'

interface MyTextInputProps {
	label: string
	name: string
	type?: 'text' | 'email' | 'password'
	placeholder?: string
	[x: string]: any
}

export const MyTextInput = ({ label, ...props }: MyTextInputProps) => {
	const [field] = useField(props)

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="text-input" {...field} {...props} />
			<ErrorMessage name={props.name} component="span" />
		</>
	)
}
