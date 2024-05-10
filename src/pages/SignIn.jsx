import { Container, VStack, Input, Button, useColorMode, IconButton, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Input placeholder="Username" />
        <Input placeholder="Telegram ID" />
        <InputGroup>
          <Input type={showPassword ? "text" : "password"} placeholder="Password" />
          <InputRightElement>
            <IconButton
              aria-label={showPassword ? "Hide password" : "Show password"}
              icon={showPassword ? <FaEyeSlash /> : <FaEye />}
              onClick={handlePasswordVisibility}
            />
          </InputRightElement>
        </InputGroup>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
        <Button colorScheme="blue" onClick={() => navigate("/signup")}>Sign Up</Button>
      </VStack>
    </Container>
  );
};

export default SignIn;