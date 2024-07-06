import * as Yup from 'yup';
import styled from 'styled-components';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Button, useTheme } from '@mui/material';
// mui icons
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GoogleIcon from '@mui/icons-material/Google';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { useSearchParams, useRouter } from 'src/routes/hooks';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
// auth
import { useAuthContext } from 'src/auth/hooks';
// icons
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
// types
import { RegisterConfirmProps } from './types';
//
import Logo from '../logo';

// ----------------------------------------------------------------------

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #686973;
`;

export function LogInDialog({ open, onClose }: RegisterConfirmProps) {
  const { register } = useAuthContext();

  const theme = useTheme();

  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState('');

  const searchParams = useSearchParams();

  const returnTo = searchParams.get('returnTo');

  const password = useBoolean();

  const [isEmail, setIsEmail] = useState<boolean>(true);

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    phoneNumber: Yup.string().required('Fulfill the phone number'),
    password: Yup.string().min(6, 'Password must be more than 6 letters').required(),
    referalCode: Yup.string().optional(),
  });

  const defaultValues = useMemo(
    () => ({
      email: '',
      phoneNumber: '',
      password: '',
      referalCode: '',
    }),
    []
  );

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data: any) => {
    try {
      await register?.(data.email, data.phoneNumber, data.password, data.referalCode);
      router.push(returnTo || PATH_AFTER_LOGIN);
    } catch (error) {
      console.error(error);
      reset();
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });

  const renderHead = (
    <Stack spacing={1.5} sx={{ mb: 3, position: 'relative' }}>
      <Typography variant="h4">Sign In</Typography>

      <Stack
        direction="row"
        spacing={0.5}
        p={0.5}
        bgcolor={theme.palette.secondary.dark}
        borderRadius={1.5}
      >
        <Button
          onClick={() => setIsEmail(true)}
          sx={{
            width: 1,
            height: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            py: 1,
            borderRadius: 1,
            color: isEmail ? 'white' : theme.palette.secondary.contrastText,
            bgcolor: isEmail ? theme.palette.primary.main : theme.palette.secondary.main,
            ':hover': {
              bgcolor: isEmail ? 'primary.dark' : `${theme.palette.secondary.main}80`,
            },
          }}
        >
          <Typography variant="body1">Email</Typography>
          <EmailIcon />
        </Button>

        <Button
          onClick={() => setIsEmail(false)}
          sx={{
            width: 1,
            height: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            py: 1,
            borderRadius: 1,
            color: !isEmail ? 'white' : theme.palette.secondary.contrastText,
            bgcolor: !isEmail ? theme.palette.primary.main : theme.palette.secondary.main,
            ':hover': {
              bgcolor: !isEmail ? 'primary.dark' : `${theme.palette.secondary.main}80`,
            },
          }}
        >
          <Typography variant="body1">Phone</Typography>
          <PhoneInTalkIcon />
        </Button>
      </Stack>
    </Stack>
  );

  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2}>
        {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

        {isEmail ? (
          <RHFTextField
            name="email"
            placeholder="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width={30}
                    height={30}
                    bgcolor={theme.palette.secondary.dark}
                    borderRadius={1}
                  >
                    <EmailIcon />
                  </Box>
                </InputAdornment>
              ),
            }}
            sx={{ bgcolor: theme.palette.secondary.main, borderRadius: 1 }}
          />
        ) : (
          <RHFTextField
            name="phoneNumber"
            placeholder="Phone Number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width={30}
                    height={30}
                    bgcolor={theme.palette.secondary.dark}
                    borderRadius={1}
                  >
                    <PhoneInTalkIcon />
                  </Box>
                </InputAdornment>
              ),
            }}
            sx={{ bgcolor: theme.palette.secondary.main, borderRadius: 1 }}
          />
        )}

        <RHFTextField
          name="password"
          placeholder="Password"
          type={password.value ? 'text' : 'password'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width={30}
                  height={30}
                  bgcolor={theme.palette.secondary.dark}
                  borderRadius={1}
                >
                  <VpnKeyIcon />
                </Box>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ bgcolor: theme.palette.secondary.main, borderRadius: 1 }}
        />

        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: 'white',
            ':hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          Sign In
        </LoadingButton>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2"> Already have an account? </Typography>

          <Link href={paths.auth.jwt.login} component={RouterLink} variant="subtitle2">
            Sign Up
          </Link>
        </Stack>
      </Stack>
    </FormProvider>
  );

  const renderFooter = (
    <Stack alignItems="center" spacing={0.5}>
      <Stack flexDirection="row" alignItems="center" width={1} spacing={1} mt={2}>
        <Line />
        <Typography
          variant="body1"
          color={theme.palette.secondary.contrastText}
          sx={{ whiteSpace: 'nowrap' }}
        >
          Log in directly with
        </Typography>
        <Line />
      </Stack>

      <Stack flexDirection="row" alignItems="center" spacing={2}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={30}
          height={30}
          borderRadius={1}
          color="#6C7AF5"
          bgcolor={theme.palette.secondary.dark}
        >
          <GoogleIcon />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={30}
          height={30}
          borderRadius={1}
          color="#6C7AF5"
          bgcolor={theme.palette.secondary.dark}
        >
          <PhoneInTalkIcon />
        </Box>
      </Stack>
    </Stack>
  );

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 4,
        },
      }}
    >
      <Box sx={{ border: '8px solid #3F4CC4', borderRadius: 4 }}>
        <Grid container>
          <Grid md={6}>
            <Stack
              width={1}
              height={1}
              justifyContent="center"
              alignItems="center"
              borderRadius="24px 0 0 24px"
              bgcolor={theme.palette.secondary.main}
              position="relative"
            >
              <Typography variant="h3">Welcome to</Typography>
              <Box>
                <Logo />
              </Box>
              <Box py={6}>
                <Box
                  component="img"
                  src="https://placehold.co/200x150"
                  borderRadius={4}
                  alt="placeholder"
                />
              </Box>
              <Typography variant="h5" color={theme.palette.secondary.contrastText}>
                Start your game
              </Typography>
              <Typography variant="h5" color={theme.palette.secondary.contrastText}>
                journey now!
              </Typography>
            </Stack>
          </Grid>

          <Grid md={6}>
            <Box p={5} bgcolor={theme.palette.background.default} borderRadius="0 24px 24px 0">
              {renderHead}
              {renderForm}
              {renderFooter}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
}
