export type LoginProps = {
    email: string;
    password: string;
    ipAddress: string;
}

export type RegisterProps = {
    email: string;
    phoneNumber: string;
    password: string;
    referalCode: string | undefined;
}