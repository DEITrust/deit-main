export const brokerABI = () => {
  return abi
}

export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'buyer_',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'amountTotal_',
        type: 'uint256',
      },
    ],
    name: 'Bought',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'buyer_',
        type: 'address',
      },
    ],
    name: 'bought',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256',
      },
    ],
    name: 'buy',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'price',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'remaining',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
