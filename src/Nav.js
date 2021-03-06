import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, AtSignIcon, DownloadIcon } from '@chakra-ui/icons';



export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box m={3}>
            <Stack direction={'row'} spacing={6}>
              <Link href={'/'}><AtSignIcon /> Home</Link>
              <Link href={'extensions'}><DownloadIcon /> Extension</Link>
            </Stack>

          </Box>

          <Flex alignItems={'center'}>

            <Stack direction={'row'} spacing={7}>

              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>

                  <a href="/login"><MenuItem>Login</MenuItem></a>
                  <a href="/register"><MenuItem>Register</MenuItem></a>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}