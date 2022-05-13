
import {
    Button,
    Stack
  
  } from '@chakra-ui/react';
import {DownloadIcon} from '@chakra-ui/icons'


function openStore(){
    window.open("https://google.com", "_blank");
}
function openFirefox(){
    alert("We are updating...");
}
export default function Extensions() {
  
    return (
        <Stack direction='row' spacing={4}>

        <Button onClick={openStore} leftIcon={<DownloadIcon />} colorScheme='orange' variant='solid'>
            Chrome Extension
        </Button>

        <Button onClick={openFirefox} leftIcon={<DownloadIcon />} colorScheme='pink' variant='solid'>
            Firefox Extension
        </Button>

        </Stack>
    );
}