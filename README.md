# SkillPilot AI

A blockchain-based platform for project management and skill evaluation using AI.

## Project Overview

SkillPilot AI combines blockchain technology with AI-powered evaluation to create a transparent and efficient project management system. The platform allows users to manage projects, track assignments, and receive AI-based evaluations of their work.

## Key Features

- **User Management**
  - Blockchain wallet integration
  - Secure user authentication
  - Individual profile management

- **Project Management**
  - Project creation and assignment
  - Feature tracking
  - Status monitoring
  - Multi-user collaboration

- **AI Evaluation System**
  - Automated code evaluation
  - Performance scoring
  - Detailed feedback
  - Improvement suggestions

## Technical Stack

- **Frontend**: Next.js 15.1.3, React 19
- **Database**: PostgreSQL with Prisma ORM
- **Blockchain**: Ethereum (ethers.js)
- **Styling**: TailwindCSS

## Connecting with MetaMask

### Prerequisites
1. Install the [MetaMask extension](https://metamask.io/download/) for your browser
2. Create or import a wallet in MetaMask

### Connection Steps
1. **Wallet Setup**
   - Ensure MetaMask is installed and unlocked
   - Switch to the appropriate network (Ethereum Mainnet or specified testnet)

2. **Application Login**
   - Click the "Connect Wallet" button on the application
   - Select MetaMask from the wallet options
   - Approve the connection request in the MetaMask popup
   - Sign the authentication message to verify your identity

3. **Post-Connection**
   - Your wallet address will be displayed in the navigation bar
   - You can now access all blockchain-enabled features
   - Your wallet hash will be securely stored in the application

### Security Notes
- Never share your private keys or seed phrase
- Always verify the transaction details before signing
- Disconnect your wallet when not in use
- Ensure you're on the correct network

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
