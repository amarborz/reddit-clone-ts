import { Flex, Icon, MenuItem } from '@chakra-ui/react'
import CreateCommunityModal from '../../Modal/CreateCommunity/CreateCommunityModal'
import { GrAdd } from 'react-icons/gr'
import { useState } from 'react'

type Props = {}

const Communities = () => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<CreateCommunityModal open={open} closeHandler={() => setOpen(false)} />
			<MenuItem
				width="100%"
				fontSize="10pt"
				_hover={{ bg: 'gray.100' }}
				onClick={() => setOpen(true)}
			>
				<Flex align="center">
					<Icon as={GrAdd} mr="2" fontSize="20" />
					Create Community
				</Flex>
			</MenuItem>
		</>
	)
}

export default Communities
