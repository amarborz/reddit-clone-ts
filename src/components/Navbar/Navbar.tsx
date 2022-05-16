import { Flex, Image } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/clientApp'
import Directory from './Directory/Directory'
import RightContent from './RightContent/RightContent'
import SearchInput from './SearchInput'

const Navbar: React.FC = () => {
	const [user, loading, error] = useAuthState(auth)

	return (
		<Flex bg="white" height="44px" padding="6px 12px">
			<Flex placeItems="center">
				<Image src="/images/redditFace.svg" height="30px" alt="reddit logo" />
				<Image
					src="/images/redditText.svg"
					height="46px"
					alt="reddit logo"
					display={{ base: 'none', md: 'unset' }}
				/>
			</Flex>
			{user && <Directory />}
			<SearchInput />
			<RightContent user={user} />
		</Flex>
	)
}

export default Navbar
