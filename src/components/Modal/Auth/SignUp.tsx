import React, { useState } from 'react'
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '../../../atoms/authModalAtoms'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebase/clientApp'
import { FIREBASE_ERRORS } from '../../../firebase/errors'

const SignUp: React.FC = () => {
	const setAuthModalState = useSetRecoilState(authModalState)
	const [error, setError] = useState('')

	const [signUpForm, setsignUpForm] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	})

	const [createUserWithEmailAndPassword, user, loading, userError] =
		useCreateUserWithEmailAndPassword(auth)

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setsignUpForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (signUpForm.password !== signUpForm.confirmPassword) {
			setError('Passwords do not match!')
			return
		}

		setError('')

		createUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
		console.log('succes')
	}

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
			<Input
				required
				name="confirmPassword"
				placeholder="confirm password"
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

			<Text textAlign="center" color="red" fontSize="10pt">
				{error ||
					FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
			</Text>

			<Button
				type="submit"
				mb="2"
				mt="2"
				width="100%"
				height="36px"
				isLoading={loading}
			>
				Sign Up
			</Button>
			<Flex fontSize="10pt" justifyContent="center">
				<Text mr="1">Already a redditor?</Text>
				<Text
					fontWeight="700"
					cursor="pointer"
					color="blue.500"
					onClick={() =>
						setAuthModalState((prev) => ({ ...prev, view: 'login' }))
					}
				>
					LOG IN
				</Text>
			</Flex>
		</form>
	)
}

export default SignUp
