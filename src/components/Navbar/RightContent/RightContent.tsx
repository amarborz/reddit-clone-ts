import { Flex } from '@chakra-ui/react'
import AuthModal from '../../Modal/Auth/AuthModal'
import AuthButtons from './AuthButtons'

type RightContentProps = {}

const RightContent: React.FC<RightContentProps> = () => {
	return (
		<>
			<AuthModal />
			<Flex placeItems="center">
				<AuthButtons />
			</Flex>
		</>
	)
}

export default RightContent