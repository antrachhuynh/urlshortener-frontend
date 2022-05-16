import React from 'react';

import {
    Button,
    useClipboard,


} from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons'


export default function Clipboard(props) {

    const { hasCopied, onCopy } = useClipboard(props.value)

    return (
        <>
            <Button variant='outline' size='lg' onClick={onCopy} ml={1}>
                {hasCopied ? 'Copied' : 'Copy'} <CopyIcon ml='1' />
            </Button>

        </>
    )
}