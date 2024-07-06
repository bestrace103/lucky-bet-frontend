import Box from '@mui/material/Box';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  .custom-connect-button {
    height: 50px;
    width: 145px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #007bff;
    color: white;
    border-radius: 16px;
    font-size: 16px;
    cursor: pointer;
  }
`;

export default function CustomStyledConnectButton() {
  return (
    <ButtonWrapper>
      <ConnectButton.Custom>
        {({ account, chain, openAccountModal, openConnectModal, mounted }) => {
          const ready = mounted && account && chain;
          return (
            <Box
              className="custom-connect-button"
              onClick={!ready ? openConnectModal : openAccountModal}
            >
              {ready ? account.displayName : 'Connect Wallet'}
            </Box>
          );
        }}
      </ConnectButton.Custom>
    </ButtonWrapper>
  );
}
