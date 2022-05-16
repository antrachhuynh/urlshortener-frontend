
import {
    Button,
    Stack,
    Heading,
    Text,
    Flex

} from '@chakra-ui/react';

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
                Who we are?
            </Heading>
            <Text>Find out about us 💎</Text>
            <Flex textAlign="left">
                <Stack mt={10} spacing={4}>

                    <Text>We provide a service that helps users shorten their URL in the fastest way</Text>
                    <Text> Everything is free and open-source✌️</Text>
                    <Button onClick={openGithub}>View source</Button>

                </Stack>
            </Flex>
        </>


    );
}