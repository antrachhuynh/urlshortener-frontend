
import {
    Button,
    Stack,
    Heading,
    Text,
    Flex,
    FormControl,
    FormLabel,
    Input,


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
                Register
            </Heading>
            <Text>Join with us ❤️</Text>

            <Flex>
                <Stack spacing={4}>

                    <FormControl mt={6}>
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input placeholder='Enter your email' id='email' type='email' />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='username'>Username</FormLabel>
                        <Input placeholder='Enter your first name' id='username' type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input placeholder='Enter your password' id='password' type='password' />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor='reqpassword'>Confirm Password</FormLabel>
                        <Input placeholder='Confirm your password' id='reqpassword' type='password' />
                    </FormControl>


                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                        Confirm
                    </Button>
                </Stack>
            </Flex>
        </>


    );
}