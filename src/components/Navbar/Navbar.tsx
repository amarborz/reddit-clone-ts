import { Flex, Image } from '@chakra-ui/react'
import RightContent from './RightContent/RightContent'
import SearchInput from './SearchInput'

const Navbar: React.FC = () => {
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
			{/* <Directory /> */}
			<SearchInput />
			<RightContent />
		</Flex>
	)
}

export default Navbar
