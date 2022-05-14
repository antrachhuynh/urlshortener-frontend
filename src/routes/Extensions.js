
import {
    Button,
    Stack,
    Heading,
    Text,
    Flex

} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons'


function openStore() {
    window.open("https://chrome.google.com/webstore/detail/fast-url-shortener/lkebahnehpgcnnobpdggljgjjjjlbjnf", "_blank");
}
function openFirefox() {
    alert("We are updating...");
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
                Install the browser extensions
            </Heading>
            <Text>Let's install our extensions and get a better experience 💎</Text>
            <Flex></Flex>
            <Stack spacing={4}>


                <Button onClick={openStore} leftIcon={<DownloadIcon />} colorScheme='orange' variant='solid'>
                    Chrome Extension
                </Button>

                <Button onClick={openFirefox} leftIcon={<DownloadIcon />} colorScheme='pink' variant='solid'>
                    Firefox Extension
                </Button>

            </Stack>
        </>


    );
}