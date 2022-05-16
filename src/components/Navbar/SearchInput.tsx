import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

const SearchInput: React.FC = () => {
	return (
		<Flex flexGrow={1} align="center" mr="2">
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<SearchIcon color="gray.400" />
				</InputLeftElement>
				<Input
					placeholder="Search Reddit"
					fontSize="10pt"
					_placeholder={{ color: 'gray.500' }}
					_hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
					_focus={{
						outline: 'none',
						border: '1px solid',
						borderColor: 'blue.500',
					}}
					bg="gray.50"
					height="34px"
				/>
			</InputGroup>
		</Flex>
	)
}

export default SearchInput
