"use client";
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const Contact = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => (value.trim().length < 3 ? "Name is too short" : null),
      email: (value) => (value.trim().length < 3 ? "Email is too short" : null),
      subject: (value) =>
        value.trim().length < 3 ? "Subject is too short" : null,
      message: (value) =>
        value.trim().length < 3 ? "Message is too short" : null,
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    console.log(values);
  }
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          {...form.getInputProps("email")}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        {...form.getInputProps("subject")}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        {...form.getInputProps("message")}
      />

      <Button type="submit" color="rgba(0, 0, 0, 1)" size="md" mt={"lg"}>
        Send message
      </Button>
    </form>
  );
};

export default Contact;
