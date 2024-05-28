// models.ts
type Blockchain = 'Osmosis' | 'Ethereum' | 'Arbitrum' | 'Zilliqa' | 'Neo';

interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: Blockchain;
}

//contanst.ts
const blockchainPriority: Record<Blockchain, number> = {
  Osmosis: 100,
  Ethereum: 50,
  Arbitrum: 30,
  Zilliqa: 20,
  Neo: 20,
};

//utils.ts
const getPriority = (blockchain: Blockchain): number => {
  return blockchainPriority[blockchain] ?? -99;
};

//useSortedBalances.ts
const useSortedBalances = () => {
  const balances = useWalletBalances();

  const sortedBalances = useMemo(() => {
    return balances
      .filter((balance: WalletBalance) => getPriority(balance.blockchain) > -99 && balance.amount)
      .sort((lhs: WalletBalance, rhs: WalletBalance) => getPriority(rhs.blockchain) - getPriority(lhs.blockchain));
  }, [balances]);

  return sortedBalances
}

//WalletPage.tsx
interface Props extends BoxProps { }

const WalletPage = (props: Props) => {
  const { children, ...rest } = props;
  const sortedBalances = useSortedBalances();
  const prices = usePrices();

  const rows = useMemo(() => {
    return sortedBalances.map((balance: WalletBalance) => (
      <WalletRow 
        key= { `${balance.currency}-${balance.blockchain}` }
        balance = { balance }
      />
    ));
}, [sortedBalances, prices]);

return (
  <Box { ...rest } >
  { rows }
  < /Box>
);
};

//WalletRow.tsx
interface WalletRowProps {
  balance: WalletBalance;
}

const WalletRow = ({ balance }: WalletRowProps) => {
  const { amount, currency } = balance
  const usdValue = prices[balance.currency] * balance.amount;

  return (
    <div className= "wallet-row" >
    <span>{ currency } < /span>
    < span > { amount } < /span>
    < span > { usdValue.toFixed(2) } < /span>
    < /div>
  );
};
