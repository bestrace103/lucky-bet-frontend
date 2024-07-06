import { DialogProps } from "@mui/material";

export type LogInConfirmProps = Omit<DialogProps, 'title' | 'content'> & {
    onClose: VoidFunction;
}

export type RegisterConfirmProps = Omit<DialogProps, 'title' | 'content'> & {
    onClose: VoidFunction;
}