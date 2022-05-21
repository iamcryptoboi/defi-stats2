import Metamask from "./WalletIcons/metamaskWallet.png";
import WalletConnect from "./WalletIcons/wallet-connect.svg";
import CoinbaseWallet from "./WalletIcons/coinbase-wallet.png";

export const connectors = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: "injected",
    priority: 1,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: "walletconnect",
    priority: 2,
  },
  {
    title: "CoinbaseWallet",
    icon: CoinbaseWallet,
    connectorId: "walletlink",
    priority: 3,
  },
];
