# Kittos NFT Marketplace 😺

<img width="1600" alt="credit" src="https://user-images.githubusercontent.com/67114280/194313285-d2c41add-84ab-43e3-bc4e-4ed62ed215c1.png">

### Functionalities

- [x] New Listed Assets
- [x] Mint NFT
- [x] Buy NFT
- [x] Resell NFT
- [x] Purchased NFT

### Stack

- Language : [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Frontend : [Next Js](https://nextjs.org/)
- Smart Contract Lang : [Solidity](https://docs.soliditylang.org/en/v0.8.17/)
- Dev Environment for ETH Software: [Hardhat](https://hardhat.org/)
- Testing: [ChaiJs](https://www.chaijs.com/)
- File Storage : [Arweave](https://www.arweave.org/)
- Scaling Permenant Storage - [Bundlr](https://bundlr.network/)
- Network : [Polygon  Mumbai](https://polygon.technology/)
- Fonts - [Google Fonts](https://fonts.google.com/)
- Style : [Tailwind CSS](https://tailwindcss.com/)
- Toast: [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
- Design : [Figma](https://www.figma.com/)

### Installation

####  Fork The Repo 

Click on the Right Side of the Top Bar to After the Watch button. <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png" width="120px" />

Now It will be available in GitHub Account.

#### OR

#### Clone

- Clone this repo with url

```shell
git clone https://github.com/Aakrut/kittos-nft-marketplace
```

##### Setup

> Install npm dependencies using npm install

```shell
cd kittos-nft-marketplace && npm install
```

> Set up environment Variables I already Provided .env.example file.

> Create a .env file in the root directory.

> Set up required environment variables.

```.env
URL="POLYGON_TESTNET_URI"
PRIVATE_KEY="METAMASK_PRIVATE_KEY"
NEXT_PUBLIC_RPC_URL="POLYGON_TESTNET_URI"
NEXT_PUBLIC_CONTRACT_ADDRESS="CONTRACT_ADDRESS"
```

> In the Root Directory First Compile Your Smart Contract with This Following Command.

```shell
npx hardhat compile
```

> After Deploy Smart Contract to the Polygon Mumbai Testnet with this command.

```shell
npx hardhat run scripts/deploy.js --network mumbai
```

> Copy Smart Contract Address and replace it in with your "CONTRACT_ADDRESS"

```
NEXT_PUBLIC_CONTRACT_ADDRESS="CONTRACT_ADDRESS"
```

Let's Run this command for dev

```shell
npm run dev
--or--
yarn dev
```

### Screenshots

<img width="1600" alt="kittos" src="https://user-images.githubusercontent.com/67114280/194313063-adf1ebf3-d897-468c-b8bb-32e8a8adb764.png">

<img width="1600" alt="dashboard" src="https://user-images.githubusercontent.com/67114280/194313035-c0ac5b51-4bd2-47e6-ae1b-6928cd95a7e7.png">

<img width="1600" alt="create" src="https://user-images.githubusercontent.com/67114280/194313266-7ed08825-c359-4c57-a7d0-68f1be087469.png">

<img width="1600" alt="profile" src="https://user-images.githubusercontent.com/67114280/194313068-1a5e6aed-9803-47ec-b2ea-a8ce54425b06.png">

<img width="1600" alt="resell-1" src="https://user-images.githubusercontent.com/67114280/194313101-41fd3e27-aa83-44a0-97a0-1a1ba0ce8dfe.png">

<img width="1600" alt="resell" src="https://user-images.githubusercontent.com/67114280/194313081-148f2c76-b6ab-48c2-88ae-eba7dbceda35.png">

<img width="1600" alt="responsive" src="https://user-images.githubusercontent.com/67114280/194313135-5a3eb53a-6f25-4f46-bc0b-a2dddb68b510.png">

<img width="1600" alt="responsive 3" src="https://user-images.githubusercontent.com/67114280/194313115-ba097809-5748-4dbf-ac5d-e4965acfeea9.png">
