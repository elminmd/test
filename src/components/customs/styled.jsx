import { styled, TextField } from '@mui/material';

export const CustomTextField = styled(TextField)(({ theme }) => ({
    color: theme.palette.primary,
}));