import { motion } from 'framer-motion'
import { useForm, SubmitHandler } from 'react-hook-form'

type LoginData = {
	email: string
	password: string
}

export const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginData>()

	const onSubmit: SubmitHandler<LoginData> = data => {
		localStorage.setItem('user', JSON.stringify({ email: data.email }))
		console.log('Вход выполнен! (данные сохранены в localStorage)')
	}

	return (
		<section className='min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-20'>
			<motion.div
				className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
			>
				<h1 className='text-3xl font-bold text-blue-700 mb-6 text-center'>
					Войти
				</h1>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
					<div>
						<label className='block text-gray-700 mb-2 font-medium'>
							Email
						</label>
						<input
							type='email'
							className={`w-full p-3 rounded-lg border ${
								errors.email ? 'border-red-500' : 'border-gray-300'
							} focus:outline-none focus:ring-2 focus:ring-blue-500`}
							{...register('email', {
								required: 'Email обязателен',
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: 'Некорректный email',
								},
							})}
						/>
						{errors.email && (
							<p className='text-red-500 text-sm mt-1'>
								{errors.email.message}
							</p>
						)}
					</div>

					<div>
						<label className='block text-gray-700 mb-2 font-medium'>
							Пароль
						</label>
						<input
							type='password'
							className={`w-full p-3 rounded-lg border ${
								errors.password ? 'border-red-500' : 'border-gray-300'
							} focus:outline-none focus:ring-2 focus:ring-blue-500`}
							{...register('password', {
								required: 'Пароль обязателен',
								minLength: { value: 6, message: 'Минимум 6 символов' },
							})}
						/>
						{errors.password && (
							<p className='text-red-500 text-sm mt-1'>
								{errors.password.message}
							</p>
						)}
					</div>

					<button
						type='submit'
						className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all w-full'
					>
						Войти
					</button>
				</form>
			</motion.div>
		</section>
	)
}
