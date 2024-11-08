'use client';

import { usePrivy } from '@privy-io/react-auth';
import { useWallets } from '@privy-io/react-auth';

export default function Home() {
  const { login, sendTransaction } = usePrivy();
  const { wallets } = useWallets();
  console.log(wallets);

  const handleTransaction = async () => {
    if (wallets && wallets.length > 0) {
      try {
        await sendTransaction({
          to: '0x0000000000000000000000000000000000000000', // Replace with actual address
          data: '0x',
        });
      } catch (error) {
        console.error('Transaction failed:', error);
      }
    }
  };

  return (
    <main className="flex flex-col items-center gap-4 p-8">
      {!wallets?.length ? (
        <button
          onClick={login}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Login with Privy
        </button>
      ) : (
        <button
          onClick={handleTransaction}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Send Transaction
        </button>
      )}
    </main>
  );
}
