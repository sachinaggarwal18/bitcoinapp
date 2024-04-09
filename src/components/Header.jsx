import { Button, HStack } from '@chakra-ui/react'
import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <HStack borderBottom={"5px solid black"} p={"4"} shadow={"dark-lg"} bgColor={"tan"} >

          <Button  variant={"unstyled"} color={"facebook.900"} >
            <Link to="/">Home</Link>
          </Button>

          <Button  variant={"unstyled"} color={"facebook.900"} >
            <Link to="/exchanges">Exchanges</Link>
          </Button>

          <Button variant={"unstyled"} color={"facebook.900"} >
            <Link to="/coins">Coins</Link>
          </Button>

      </HStack>
    </div>
  )
}

export default Header
