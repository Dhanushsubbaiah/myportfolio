const projects = [
  {
    id: 1,
    title: 'Blockchain-based Supply Chain Management',
    description: 'Ethereum DApp simulating supply chain workflows for Manufacturer → Consumer with role-based access.',
    tech: ['Solidity', 'Hardhat', 'React', 'Ethers.js', 'MetaMask'],
    highlights: [
      'Smart contracts with role-based state transitions tracking 20+ product records',
      'Role-specific UI in React + MetaMask integration for 4 user types',
      'Deployed and tested on Ethereum testnet'
    ],
    github: 'https://github.com/Dhanushsubbaiah',
    demo: ''
  },
  {
    id: 2,
    title: 'Decentralized Exchange & NFT Marketplace (PoC)',
    description: 'Proof-of-concept DEX with mock token swaps, NFT trading, and staking rewards.',
    tech: ['Solidity', 'Next.js', 'Ethers.js', 'Wallet'],
    highlights: [
      'Custom staking contracts; validated reward distribution with 50+ tests',
      'Wallet connectivity with a Next.js frontend',
      'Tested with 10 simulated user accounts'
    ],
    github: 'https://github.com/Dhanushsubbaiah',
    demo: ''
  },
  {
    id: 3,
    title: 'Image Generation using GANs (DCGAN & StyleGAN)',
    description: 'Explored AI-based image generation and evaluation techniques over ~1,000 images.',
    tech: ['Python', 'PyTorch', 'DCGAN', 'StyleGAN'],
    highlights: [
      'Analyzed similarity/clarity metrics across 50+ generated images',
      'Optimized hyperparameters and tracked results across 100+ epochs',
      'Compared stability and diversity across architectures'
    ],
    github: 'https://github.com/Dhanushsubbaiah',
    demo: ''
  },
  {
    id: 4,
    title: 'Cloud Service Access Management System',
    description: 'Node.js backend simulating API access control with 3 subscription tiers and RBAC.',
    tech: ['Node.js', 'Express', 'JWT', 'MongoDB'],
    highlights: [
      'Configured RBAC for 3 roles and enforced API quotas over 100+ requests',
      'Verified auth with JWT + MongoDB; 100% success on 30+ Postman tests',
      'Modular services and clear separation of concerns'
    ],
    github: 'https://github.com/Dhanushsubbaiah',
    demo: ''
  }
];

export default projects;
