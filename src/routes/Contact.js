
import {
    Button,
    Stack,
    Heading,
    Text,
    Flex,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Textarea

} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'



export default function Extensions() {

    return (
        <>
            <Heading
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='4xl'
                fontWeight='extrabold'
            >
                Contact
            </Heading>
            <Text>Keep in touch with us ✌️</Text>

            <Flex>
                <Stack spacing={4}>

                    <FormControl mt={10}>
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input placeholder='Enter your email' id='email' type='email' />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='name'>Name</FormLabel>
                        <Input placeholder='Enter your first name' id='name' type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='name'>Message</FormLabel>
                        <Textarea

                            placeholder='Enter your message'
                            size='sm'
                        />
                    </FormControl>
                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                        Contact
                    </Button>
                </Stack>
            </Flex>
        </>


    );
}