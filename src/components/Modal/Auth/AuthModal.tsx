import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Flex,
	Text,
} from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { authModalState } from '../../../atoms/authModalAtoms'
import AuthInputs from './AuthInputs'
import OAuthButtons from './OAuthButtons'
import ResetPassword from './ResetPassword'

const AuthModal: React.FC = () => {
	const [modalState, setModalState] = useRecoilState(authModalState)

	const closeModalHandler = () => {
		setModalState((prev) => ({
			...prev,
			open: false,
		}))
	}

	const header =
		modalState.view === 'login'
			? 'Log In'
			: modalState.view === 'signup'
			? 'Sign Up'
			: 'Reset Password'

	return (
		<>
			<Modal isOpen={modalState.open} onClose={closeModalHandler}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader textAlign="center">{header}</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						pb="6"
					>
						<Flex
							direction="column"
							align="center"
							justify="center"
							width="70%"
						>
							{(modalState.view === 'login' ||
								modalState.view === 'signup') && (
								<>
									<OAuthButtons />
									<Text color="gray.500" fontWeight="700" mb="4">
										OR
									</Text>
									<AuthInputs />{' '}
								</>
							)}
							{modalState.view === 'resetPassword' && <ResetPassword />}
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default AuthModal
