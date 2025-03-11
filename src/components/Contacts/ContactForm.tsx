import { motion } from 'framer-motion'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormData = {
	name: string
	email: string
	message: string
	file?: FileList
}

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>()

	const onSubmit: SubmitHandler<FormData> = data => {
		console.log(data) // Дописать логику отправки формы
		alert('Форма отправлена! (заглушка)')
	}

	return (
		<motion.div
			className='bg-white p-8 rounded-xl shadow-lg'
			initial={{ opacity: 0, x: -50 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<h2 className='text-2xl font-semibold text-blue-600 mb-6'>
				Форма обратной связи
			</h2>
			<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
				<div>
					<label className='block text-gray-700 mb-2 font-medium'>Имя</label>
					<input
						type='text'
						className={`w-full p-3 rounded-lg border ${
							errors.name ? 'border-red-500' : 'border-gray-300'
						} focus:outline-none focus:ring-2 focus:ring-blue-500`}
						{...register('name', { required: 'Имя обязательно' })}
					/>
					{errors.name && (
						<p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>
					)}
				</div>

				<div>
					<label className='block text-gray-700 mb-2 font-medium'>Email</label>
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
						<p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
					)}
				</div>

				<div>
					<label className='block text-gray-700 mb-2 font-medium'>
						Сообщение
					</label>
					<textarea
						className={`w-full p-3 rounded-lg border ${
							errors.message ? 'border-red-500' : 'border-gray-300'
						} focus:outline-none focus:ring-2 focus:ring-blue-500`}
						rows={4}
						{...register('message', { required: 'Сообщение обязательно' })}
					/>
					{errors.message && (
						<p className='text-red-500 text-sm mt-1'>
							{errors.message.message}
						</p>
					)}
				</div>

				<div>
					<label className='block text-gray-700 mb-2 font-medium'>
						Прикрепить файл
					</label>
					<input
						type='file'
						className='w-full p-3 rounded-lg border border-gray-300'
						{...register('file')}
					/>
				</div>

				<button
					type='submit'
					className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all w-full'
				>
					Отправить
				</button>
			</form>
		</motion.div>
	)
}
