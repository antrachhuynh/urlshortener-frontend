import React from 'react';
import {

    Input,
    Button,
    FormControl,
    FormErrorMessage,
    InputGroup,
    InputLeftElement,
    Heading,
    Flex,
    Text,
    Center,
    Tooltip,
    ScaleFade


} from '@chakra-ui/react';


import QRCode from "react-qr-code";


import { ArrowForwardIcon, LinkIcon } from '@chakra-ui/icons';
import {
    Formik,
    Field,
    Form,

} from 'formik';

class Shorten extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shortUrl: '',
            msg: '',
            isDone: false
        };
    }




    validateName(value) {
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        let domainName = 'zmb.ee';

        let error;
        if (!value) {
            error = 'URL is required ⛔'
        }
        else if (value.includes("https://" + domainName) || value.includes("http://" + domainName)) {
            error = "That's already a short URL ❌"
        }
        else if (!regex.test(value)) {
            error = "That's not a valid URL 😱"
        }

        return error
    }



    async shortenUrl(longURL, actions) {
        //clear last qr code
        this.setState({ isDone: false });

        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: longURL
        };
        const response = await fetch('https://zmb.ee/api/url/short', requestOptions);
        const data = await response.json();
        const result = data.shortUrl;
        if (data) {
            actions.setSubmitting(false);


        }
        this.setState({ shortUrl: result, msg: "Success", isDone: true });
        //console.log(result);


    }



    render() {
        const handleClick = (e) => {
            e.target.select();
        };


        return (
            <>
                <Heading
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='4xl'
                    fontWeight='extrabold'
                >
                    Fast URL Shortener
                </Heading>
                <Text>Input your looooong URL and let we do the rest ✌️</Text>
                <Flex>

                    <Formik

                        enableReinitialize={true}
                        initialValues={{ longUrl: this.state.shortUrl }}
                        onSubmit={(values, actions) => {
                            this.shortenUrl(JSON.stringify(values, null, 2), actions)

                        }}
                    >
                        {(props) => (
                            <Form>
                                <Field name='longUrl' validate={this.validateName}>
                                    {({ field, form }) => (


                                        <FormControl isInvalid={form.errors.longUrl && form.touched.longUrl}>
                                            <InputGroup>

                                                <InputLeftElement
                                                    pointerEvents='none'
                                                    top='3px'
                                                    children={<LinkIcon color='gray.300' />}
                                                />
                                                <Input
                                                    onClick={handleClick}
                                                    width="100%"
                                                    size='lg' {...field}
                                                    id='longUrl'
                                                    placeholder='Input your URL'

                                                />
                                            </InputGroup>

                                            <FormErrorMessage>{form.errors.longUrl} </FormErrorMessage>

                                        </FormControl>

                                    )}
                                </Field>
                                <Button
                                    mt={2}
                                    rightIcon={<ArrowForwardIcon />}
                                    colorScheme='teal'
                                    variant='outline'
                                    color='#FF0080'
                                    isLoading={props.isSubmitting}
                                    type='submit'
                                >
                                    Shorten
                                </Button>




                                {this.state.isDone !== false ? <><ScaleFade id='qrcode' initialScale={0.9} in={true}><Tooltip label='Scan me!' ><Center mt={3}><QRCode size="80" value={this.state.shortUrl} /></Center></Tooltip><Text mt={3} color='green' fontSize="sm">Successfully shorten ✅</Text></ScaleFade></> : null}




                            </Form>
                        )
                        }
                    </Formik>

                </Flex>
            </>
        )
    }
}
export default Shorten;
