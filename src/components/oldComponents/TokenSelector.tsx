import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FaAngleDown, FaCheck } from 'react-icons/fa';

type Token = {
    id: number;
    name: string;
    symbol: string;
  };
  
const tokens: Token[] = [
  {
    id: 1, 
    name: 'Ether',
    symbol: 'ETH'
  },
  {
    id: 2, 
    name: 'Wrapped Ether',
    symbol: 'WETH'
  },
  {
    id: 3,
    name: '1inch',
    symbol: '1INCH'
  }
];

export default function TokenSelector() {
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleTokenSelect(token: Token) {
    setSelectedToken(token);
    setIsOpen(false);
  }

  return (
    <>
      <button 
        className="flex items-center rounded-full px-3 py-2 bg-gray-200 text-gray-900"
        onClick={() => setIsOpen(true)}
      >
        {selectedToken ? (
          <>
            <div className="mr-2 w-5 h-5 bg-gray-500 rounded-full" />
            {selectedToken.symbol}
          </>
        ) : 'Select Token'}
        <FaAngleDown className="ml-2" />
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Overlay />
        
        <Dialog.Title>Select a Token</Dialog.Title>
        
        <div className="flex flex-col mt-2">
          {tokens.map((token: Token) => (
            <button 
              key={token.id}
              onClick={() => handleTokenSelect(token)}
              className="flex justify-between items-center p-2 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <div className="mr-2 w-5 h-5 bg-gray-500 rounded-full" />
                <div>
                  <div className="text-sm">{token.name}</div>
                  <div className="text-xs text-gray-500">{token.symbol}</div>
                </div>
              </div>
              {selectedToken?.id === token.id && (
                <FaCheck className="text-green-500" />
              )}
            </button>
          ))}
        </div>
      </Dialog>
    </>
  )
}
