import { Container ,VStack,Heading, Input,Button,Text, Avatar, Center} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

        <form >
            <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'
            } my={'16'}>
                <Heading> Video hub </Heading>
                <Avatar alignSelf={'center'} boxSize={'32'}/>
                <Input placeholder={'Name'} type={'text'} required focusBorderColor='purple.500' />
                <Input placeholder={'Email'} type={'email'} required focusBorderColor='purple.500' />
                <Input placeholder={'Passwod'} type={'password'} required focusBorderColor='purple.500' />

               

                <Button colorScheme='purple' type='submit'>Sign up</Button>

                <Text textAlign={'right'}>Already Signed Up{' '}
                <Button variant={'link'} colorScheme='purple'>
                    <Link to={"/login"}>Login</Link>
                </Button>
                </Text>
                
            </VStack>
        </form>
    </Container>
  )
}


export default Signup
