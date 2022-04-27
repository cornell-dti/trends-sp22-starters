import React, { ReactNode } from "react"
import NextLink from "next/link"
import {
  Box,
  Button,
  Container,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { useAuth } from "../auth/AuthUserProvider"
import { signInWithGoogle } from "../../util/firebase"
import { useRouter } from "next/router"

type NavLinkData = {
  name: string
  path: string
}

const navData: NavLinkData[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Frodo",
    path: "/frodo",
  },
]

type NavLinkProps = {
  navData: NavLinkData
}

const NavLink = ({ navData: { name, path } }: NavLinkProps) => {
  const { pathname: currentPath } = useRouter()
  return (
    <NextLink key={path} href={path} passHref>
      <Link
        _hover={{
          textDecoration: "none",
        }}
      >
        <Button
          _focusVisible={{ shadow: "outline" }}
          _focus={{ shadow: "none" }}
          colorScheme={"facebook"}
          variant={currentPath === path ? "solid" : "ghost"}
        >
          {name}
        </Button>
      </Link>
    </NextLink>
  )
}

const Navbar = () => {
  const { user, signOut } = useAuth()
  return (
    <Box px={4} shadow="base">
      <HStack justifyContent="space-between">
        <HStack h={14} as="nav" spacing={4} alignItems="center">
          {navData.map((data) => (
            <NavLink key={data.path} navData={data} />
          ))}
        </HStack>
        <Button
          _focusVisible={{ shadow: "outline" }}
          _focus={{ shadow: "none" }}
          colorScheme={"facebook"}
          onClick={user ? signOut : signInWithGoogle}
        >
          {user ? "Sign Out" : "Sign In"}
        </Button>
      </HStack>
    </Box>
  )
}

export default Navbar
