import { Helmet } from 'react-helmet-async';
// sections
import { JwtRegisterView } from 'src/sections/auth/jwt';

// ----------------------------------------------------------------------

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title> WinX100: Register</title>
      </Helmet>

      <JwtRegisterView />
    </>
  );
}
