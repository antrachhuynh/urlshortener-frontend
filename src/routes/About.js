
import {
    Button,
    Stack,
    Heading,
    Text,
    Flex

} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'


function openGithub() {
    window.open("https://github.com/antrachhuynh/", "_blank");
}

export default function Extensions() {

    return (
        <>
            <Heading
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='4xl'
                fontWeight='extrabold'
            >
                What are we?
            </Heading>
            <Text>Find out who we are? 💎</Text>
            <Flex>
                <Stack mt={10} spacing={4}>

                    <Text>We provide a service that helps users shorten their URL in the fastest way</Text>
                    <Text><StarIcon /> Everything is free and open-source</Text>
                    <Button onClick={openGithub}>View source</Button>

                </Stack>
            </Flex>
        </>


    );
}