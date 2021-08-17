import { Magic } from '@magic-sdk/react-native';
import Web3 from 'web3';

export const magic = new Magic('YOUR_MAGIC_API_KEY', {
  network: {
    rpcUrl: 'https://alfajores-forno.celo-testnet.org'
  }
});

export const web3 = new Web3(magic.rpcProvider);