import { FormProvider, useForm } from "react-hook-form";
import { Steps } from "../Stepper";
import { schema } from './Form.schema';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const sourceSteps = [
  {
    label: "Dados Pessoais",
    Component: <p>Passo 1</p>,
    hasError: false,
  },
  {
    label: "Dados de Endereço",
    Component: <p>Passo 2</p>,
    hasError: false,
  },
  {
    label: "Dados de Contato",
    Component: <p>Passo 3</p>,
    hasError: false,
  },
];

type FormValues = z.infer<typeof schema>;

export function Form() {
  const methods = useForm({
    resolver: zodResolver(schema),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      name: "",
      age: "",
      street: "",
      city: "",
      streetNumber: "",
      mobileNumber: "",
      telNumber: "",
    },
  });

  if (methods.formState.isSubmitSuccessful) {
    return (
      <Box>
        <Typography variant="h2">Formulário enviado com sucesso!</Typography>
        <Button onClick={() => methods.reset()}>
          Clique aqui para enviar um novo cadastro
        </Button>
      </Box>
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Steps items={sourceSteps} />
      </form>
    </FormProvider>
  );
}
