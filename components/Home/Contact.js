import {
  Box,
  Text,
  Stack,
  Input,
  Select,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { database } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    company: "",
    agents: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleOnChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleError = (field, msg) => {
    setSuccess("");
    setErrors((prevState) => ({ ...prevState, [field]: msg }));
  };

  const validate = () => {
    if (inputs.name <= 5) {
      handleError("name", "Name must be more than 5 characters.");
      return false;
    }
    if (inputs.email <= 5) {
      handleError("email", "Email must be more than 5 characters.");
      return false;
    }
    if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("email", "Please enter a valid email.");
      return false;
    }
    if (inputs.company <= 5) {
      handleError("company", "Company Name must be more than 5 characters.");
      return false;
    }
    if (inputs.agents === "" || undefined || null) {
      handleError("agents", "Number of agents must be selected.");
      return false;
    }
    return true;
  };

  const submit = async () => {
    const estimates = collection(database, "estimates");

    if (validate()) {
      await addDoc(estimates, { ...inputs })
        .then(() => {
          setSuccess("Form submitted. We'll be in touch soon!");
        })
        .catch((err) => {
          handleError("server", "Error submitting the form.");
        });
      setInputs({ name: "", email: "", company: "", agents: "" });
    }
  };

  useEffect(() => {
    setErrors({});
  }, [inputs]);

  return (
    <Box
      width={"100%"}
      bgImage={"/bg.png"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"center"}
      id={"contact"}
    >
      <Stack
        pt={20}
        alignItems={"center"}
        flexDirection={"column"}
        color={"white"}
        spacing={4}
        mx={{ base: 5 }}
        py={20}
      >
        <Text fontWeight={600} fontSize={"5xl"} align={"center"}>
          Request a Demo
        </Text>
        <Text align={"center"} fontSize={"xl"} maxWidth={600}>
          Find out why we maintain a high NetPromoter Score and retain clients
          longer than other solutions.
        </Text>

        <SimpleGrid
          width={{ base: "90%", md: 600, xl: 800 }}
          rowGap={5}
          columnGap={10}
          templateColumns={{ base: "repeat(1, 100%)", md: "repeat(2, 1fr)" }}
        >
          <Stack>
            <Text fontSize={"sm"}>Name</Text>
            <Input
              size="lg"
              placeholder="Name"
              bg={"white"}
              color={"black"}
              name="name"
              value={inputs.name}
              onChange={(e) => handleOnChange(e)}
              isInvalid={errors.name}
            />
          </Stack>
          <Stack>
            <Text fontSize={"sm"}>Email</Text>
            <Input
              size="lg"
              placeholder="Email"
              bg={"white"}
              color={"black"}
              name="email"
              value={inputs.email}
              onChange={(e) => handleOnChange(e)}
              isInvalid={errors.email}
            />
          </Stack>

          <Stack>
            <Text fontSize={"sm"}>Company</Text>
            <Input
              size="lg"
              placeholder="Company Name"
              bg={"white"}
              color={"black"}
              name="company"
              value={inputs.company}
              onChange={(e) => handleOnChange(e)}
              isInvalid={errors.company}
            />
          </Stack>
          <Stack pb={2}>
            <Text fontSize={"sm"}>Number of Agents</Text>
            <Select
              size="lg"
              placeholder="Number of Agents"
              bg={"white"}
              color={"black"}
              name="agents"
              value={inputs.agents}
              onChange={(e) => handleOnChange(e)}
              isInvalid={errors.agents}
            >
              <option value="1-10">1-10</option>
              <option value="10-25">10-25</option>
              <option value="25-50">25-50</option>
              <option value="100+">100+</option>
            </Select>
          </Stack>
        </SimpleGrid>
        <Button
          fontWeight={600}
          _hover={{
            bg: "#5E6A7F",
            transition: "all 0.5s cubic-bezier(.08,.52,.52,1)",
          }}
          size={"lg"}
          bg={"#899EC3"}
          onClick={submit}
          width={{ base: "90%", md: 600, xl: 800 }}
        >
          Submit
        </Button>
        <Text align={"center"} color={success ? "green.300" : "red.300"}>
          {Object.values(errors)[0]}
          {success}
        </Text>
      </Stack>
    </Box>
  );
}
