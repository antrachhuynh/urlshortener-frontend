
import {
    Stack,
    Heading,
    Text,
    Flex,
    FormControl,
    Code,
    Input,


} from '@chakra-ui/react';



export default function Extensions() {

    return (
        <>
            <Heading
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='4xl'
                fontWeight='extrabold'
            >
                API
            </Heading>
            <Text>Use our free API ❤️</Text>

            <Flex>
                <Stack spacing={4}>


                    <FormControl>
                        <Input value="https://zmb.ee/api/url/short" type='text' />
                    </FormControl>
                    <Text>Send a <Code>POST</Code> request with <Code>JSON</Code> data <Code>longURL</Code> and get a <Code>shortURL</Code> return</Text>

                </Stack>
            </Flex>
        </>


    );
}