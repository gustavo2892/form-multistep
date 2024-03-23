import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Input } from "../../../Input";

export const PersonalInfo = () => {
  return (
    <Box marginY={10}>
      <Typography variant="h6">Dados Pessoais</Typography>

      <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
        <Input name="name" label="Nome" />
        <Input name="age" label="Idade" />
      </Box>
    </Box>
  );
};