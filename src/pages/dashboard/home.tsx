import { Helmet } from 'react-helmet-async';
// sections
import Home from 'src/sections/home/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>WinX100 Dashboard</title>
      </Helmet>

      <Home />
    </>
  );
}
