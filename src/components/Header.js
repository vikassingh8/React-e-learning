import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom'
  import {BiMenuAltLeft} from "react-icons/all"

const Header=()=>{
  const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button zIndex={"overlay"} pos={"fixed"}  top={"4"} colorScheme={"cyan"} p={"0"} w={"10"} h={"10"} borderRadius={"full"} left={"1"} onClick={onOpen}
        ><BiMenuAltLeft size={"20"}/></Button>


        <Drawer isOpen={isOpen} placement={"left"} onClose={onClose} >
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button onClick={onClose} variant={"ghost"} colorScheme={"blue"}>
                <Link to="/">Home</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme={"blue"}>
                <Link to="/videos">Videos</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme={"blue"}>
                <Link to="/Videos?category=free">Free Videos</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme={"blue"}>
                <Link to="/Upload">Upload</Link>
              </Button>
            </VStack>
            <HStack pos={"absolute"} bottom="10" left={"1"} width={"full"} justifyContent={"space-evenly"}>
               <Button onClick={onClose} colorScheme={"blue"}>
                <Link to={"/login"}>Log In</Link>
               </Button>
               <Button  onClick={onClose} colorScheme={"blue"} variant={"outline"}>
                <Link to={"/signup"}>Sign Up</Link>
               </Button>
            </HStack>
          </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default Header
