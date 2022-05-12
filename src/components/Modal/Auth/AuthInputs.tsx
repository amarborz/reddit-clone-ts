import { Flex } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { authModalState } from '../../../atoms/authModalAtoms'
import Login from './Login'
import SignUp from './SignUp'

type AuthInputsProps = {}

const AuthInputs: React.FC<AuthInputsProps> = () => {
	const modalState = useRecoilValue(authModalState)

	return (
		<Flex>
			{modalState.view === 'login' && <Login />}
			{modalState.view === 'signup' && <SignUp />}
		</Flex>
	)
}

export default AuthInputs
