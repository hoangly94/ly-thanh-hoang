
#### blockchain: 'Osmosis' | 'Ethereum' | 'Arbitrum' | 'Zilliqa' | 'Neo';
should make ` type Blockchain = 'Osmosis' | 'Ethereum' | 'Arbitrum' | 'Zilliqa' | 'Neo';` for better reusability:
#### blackchain:any
should use correct type, avoid any
#### getPriority function
Use an object to create a blockchain dictionary with the blockchain name as the key and the priority as the value for  O(1) lookup time. 
### getPriority
should be splited into utils for better reusability:
#### sortedBalances
should be splited into useSortedBalances for better reusability:
#### sortedBalances prices condition in useMemo
prices condition is unnecessary, this leads many wasted comparing.
#### balance.amount <= 0
wrong logic, should > 0
#### sortedBalances sort HOF
logic is so complex
#### row map
Place the row map inside `useMemo` to avoid re-computation when the component re-renders. 
#### formattedBalances map 
This logic is redundant with the rows map and does not affect the result. 
#### className={classes.row} 
Move  this logic into `WalletRow`  as the class  is immutable and does not need customization by `WalletPage`. 
#### key={index} 
Avoid using the array index as a key because it is fixed by the array's position. This can cause the component to not repaint even if the blockchain's position changes. 
#### formattedAmount={balance.formatted} 
There is no need to pass `formattedAmount` to `WalletRow`. Format the value within `WalletRow` to release memory from storing the formatted value in  `WalletPage`. 
#### <div {...rest}> {rows} </div> 
Since  `WalletPage`'s props extend from `BoxProps`, use `Box` instead of `div`. Using `div` may not be effective if `Box` does not return a `div` or uses many custom props.
#### WalletRow props
should reveice balance instead of each value