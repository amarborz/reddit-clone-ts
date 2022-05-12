import React, { useState } from 'react'
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '../../../atoms/authModalAtoms'

const Login: React.FC = () => {
	const setAuthModalState = useSetRecoilState(authModalState)

	const [loginForm, setLoginForm] = useState({
		email: '',
		password: '',
	})

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLoginForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const submitHandler = () => {}

	return (
		<form onSubmit={submitHandler}>
			<Input
				required
				name="email"
				placeholder="email"
				type="email"
				mb="2"
				onChange={changeHandler}
				fontSize="10pt"
				_placeholder={{ color: 'gray.500' }}
				_hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
				_focus={{
					outline: 'none',
					bg: 'white',
					border: '1px solid',
					borderColor: 'blue.500',
				}}
				bg="gray.50"
			/>
			<Input
				required
				name="password"
				placeholder="password"
				type="password"
				mb="2"
				onChange={changeHandler}
				fontSize="10pt"
				_placeholder={{ color: 'gray.500' }}
				_hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
				_focus={{
					outline: 'none',
					bg: 'white',
					border: '1px solid',
					borderColor: 'blue.500',
				}}
				bg="gray.50"
			/>
			<Button type="submit" mb="2" mt="2" width="100%" height="36px">
				Log In
			</Button>
			<Flex fontSize="10pt" justifyContent="center">
				<Text mr="1">New here?</Text>
				<Text
					fontWeight="700"
					cursor="pointer"
					color="blue.500"
					onClick={() =>
						setAuthModalState((prev) => ({ ...prev, view: 'signup' }))
					}
				>
					SIGN UP
				</Text>
			</Flex>
		</form>
	)
}

export default Login
