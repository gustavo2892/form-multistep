import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Input } from "../../../Input";

export const Contact = () => {
  return (
    <Box marginY={10}>
      <Typography variant="h6">Dados de Contato</Typography>

      <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
        <Input name="mobileNumber" label="Celular" />
        <Input name="telNumber" label="Telefone" />
      </Box>
    </Box>
  );
};