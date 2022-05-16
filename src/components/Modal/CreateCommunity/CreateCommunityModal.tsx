import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Box,
	Divider,
	Text,
	Input,
	Checkbox,
	Flex,
	Icon,
	Stack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsFillPersonFill, BsFillEyeFill } from 'react-icons/bs'
import { HiLockClosed } from 'react-icons/hi'

type CreateCommunityModalProps = {
	open: boolean
	closeHandler: () => void
}

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
	open,
	closeHandler,
}) => {
	const [communityName, setCommunityName] = useState('')
	const [charsRemaining, setcharsRemaining] = useState(21)
	const [communityType, setCommunityType] = useState('public')

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length > 21) return

		setCommunityName(e.target.value)

		setcharsRemaining(21 - e.target.value.length)
	}

	const communityTypeChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const {
			target: { name },
		} = event
		if (name === communityType) return
		setCommunityType(name)
	}

	return (
		<>
			<Modal isOpen={open} onClose={closeHandler} size="lg">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader
						display="flex"
						flexDirection="column"
						fontSize="15"
						padding="3"
					>
						Create a community
					</ModalHeader>

					<Box pl="3" pr="3">
						<Divider />
						<ModalCloseButton />
						<ModalBody display="flex" flexDirection="column" padding="10px 0px">
							<Text fontWeight="600" fontSize="15">
								Name
							</Text>
							<Text fontSize="11" color="gray.500">
								Community names cannot be changed
							</Text>
							<Text
								position="relative"
								top="28px"
								left="10px"
								width="20px"
								color="gray.400"
							>
								r/
							</Text>
							<Input
								position="relative"
								value={communityName}
								size="sm"
								pl="22px"
								onChange={changeHandler}
							/>
							<Text
								color={charsRemaining === 0 ? 'red' : 'gray.500'}
								fontSize="9pt"
							>
								{charsRemaining} Characters Remaining
							</Text>

							<Box mt={4} mb={4}>
								<Text fontWeight={600} fontSize={15}>
									Community Type
								</Text>
								<Stack spacing={2} pt={1}>
									<Checkbox
										colorScheme="blue"
										name="public"
										isChecked={communityType === 'public'}
										onChange={communityTypeChangeHandler}
									>
										<Flex alignItems="center">
											<Icon as={BsFillPersonFill} mr={2} color="gray.500" />
											<Text fontSize="10pt" mr={1}>
												Public
											</Text>
											<Text fontSize="8pt" color="gray.500" pt={1}>
												Anyone can view, post, and comment to this community
											</Text>
										</Flex>
									</Checkbox>
									<Checkbox
										colorScheme="blue"
										name="restricted"
										isChecked={communityType === 'restricted'}
										onChange={communityTypeChangeHandler}
									>
										<Flex alignItems="center">
											<Icon as={BsFillEyeFill} color="gray.500" mr={2} />
											<Text fontSize="10pt" mr={1}>
												Restricted
											</Text>
											<Text fontSize="8pt" color="gray.500" pt={1}>
												Anyone can view this community, but only approved users
												can post
											</Text>
										</Flex>
									</Checkbox>
									<Checkbox
										colorScheme="blue"
										name="private"
										isChecked={communityType === 'private'}
										onChange={communityTypeChangeHandler}
									>
										<Flex alignItems="center">
											<Icon as={HiLockClosed} color="gray.500" mr={2} />
											<Text fontSize="10pt" mr={1}>
												Private
											</Text>
											<Text fontSize="8pt" color="gray.500" pt={1}>
												Only approved users can view and submit to this
												community
											</Text>
										</Flex>
									</Checkbox>
								</Stack>
							</Box>
						</ModalBody>
					</Box>

					<ModalFooter bg="gray.100" borderRadius="0px 0px 10px 10px">
						<Button
							variant="outline"
							height="30px"
							mr={2}
							onClick={closeHandler}
						>
							Cancel
						</Button>
						<Button height="30px">Create Community</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export default CreateCommunityModal
