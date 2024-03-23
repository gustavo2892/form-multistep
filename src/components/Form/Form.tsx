import { FormProvider, useForm } from "react-hook-form";
import { Steps } from "../Stepper";
import { schema } from './Form.schema';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { PersonalInfo } from "./components/PersonalInfo";
import { Address } from "./components/Address";
import { Contact } from "./components/Contact";

const sourceSteps = [
  {
    label: "Dados Pessoais",
    Component: <PersonalInfo />,
    fields: ["name", "age"],
    hasError: false,
  },
  {
    label: "Dados de Endereço",
    fields: ["street", "streetNumber", "city"],
    Component: <Address />,
    hasError: false,
  },
  {
    label: "Dados de Contato",
    fields: ["mobileNumber", "telNumber"],
    Component: <Contact />,
    hasError: false,
  },
];

type FormValues = z.infer<typeof schema>;

const getSteps = (errors: string[]) => {
  return sourceSteps.map((step) => {
    return {
      ...step,
      hasError: errors.some((error) => step.fields.includes(error)),
    };
  });
};

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

  const steps = getSteps(Object.keys(methods.formState.errors));

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data: FormValues) => console.log(data))}>
        <Steps items={steps} />
      </form>
    </FormProvider>
  );
}
