import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Input } from "../../../Input";

export const Address = () => {
  return (
    <Box marginY={10}>
      <Typography variant="h6">Dados de Endereço</Typography>

      <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
        <Input name="street" label="Rua" />
        <Input name="streetNumber" label="Número da rua" />
        <Input name="city" label="Cidade" />
      </Box>
    </Box>
  );
};