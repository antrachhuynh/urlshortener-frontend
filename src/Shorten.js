import React from 'react';
import {
 
    Input,
    Button,
    FormControl,
    FormErrorMessage
    
  


} from '@chakra-ui/react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
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
            msg: ''
        };
    }




    validateName(value) {
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');    
        
        
        let error;
        if (!value) {
            error = 'URL is required'
        } else if (!regex.test(value)) {
            error = "It's not an valid URL 😱"
        }

        return error
    }
    
    

    async shortenUrl (longURL) {
        
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: longURL
        };
        const response = await fetch('https://zmb.ee/api/url/short', requestOptions);
        const data = await response.json();
        const result = data.shortUrl;

        this.setState({ shortUrl: result, msg: "Success" });
        console.log(result);


    }

    

    render() {
        const handleClick = (e) => {
            e.target.select();
          };
        return (
        



            
            <Formik
           
                enableReinitialize={true}
                initialValues={{ longUrl: this.state.shortUrl}}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        this.shortenUrl(JSON.stringify(values, null, 2))
                        actions.setSubmitting(false)
                        
                    }, 1000)

                }}
            >
                {(props) => (
                    <Form>
                        <Field name='longUrl' validate={this.validateName}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.longUrl && form.touched.longUrl}>
                                    <Input onClick={handleClick} width="100%" size='lg' {...field} id='longUrl' placeholder='Input your URL' />
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
                    </Form>
                )}
            </Formik>
        )
    }
}
export default Shorten;