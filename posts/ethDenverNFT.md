---
title: Claim your ETH Denver NFT using Email wallet
date: 2024-02-20
authors: ["Elo mukoro"]
type: Post
draft: false
slug: "ethDenverNFT"
category: "2-minute read"
tags: ["crypto", "zk"]
description: "How to claim your NFT using Email Wallet"
---

Join the fun at ETH Denver and claim NFTs by interacting with fellow attendees! Here's a simple guide to secure your digital collectibles just by using your email: 

Additionally, for those with an interest in the underlying technology, the second part of this post provides a detailed exploration of the relayer's technical framework.

### Step 1: Interact with NFC Badges
Engage with others by tapping their NFC Badge. Each tap is a unique interaction that can lead to claiming a special NFT.

### Step 2: Choose How to Claim
After the tap, a modal will appear, giving you two options to claim your NFT:

#### Option 1: Use Your Email
Enter your email address to receive your NFT. This will also create your very own Email Wallet if you don't have one yet. Your NFTs will be accessible right from your inbox!

#### Option 2: Withdraw to an EOA
If you're already a crypto enthusiast with your wallet, you can choose to directly withdraw your NFT to your Externally Owned Account (EOA). Just enter your wallet address, and your NFT will be on its way.

### Step 3: Confirm and Receive
Once you've made your choice and entered the necessary information, confirm the action. Your NFT will be minted and either sent to your Email Wallet or your specified EOA.

### Step 4: Transfer from Email Wallet to EOA (Optional)
If you initially chose to receive your NFT in your Email Wallet but later decide to transfer it to your EOA, you can easily do so:

1. In the Cursive app, find the NFT you want to transfer.
2. Enter your email address and the wallet address to which you wish to transfer the NFT.
3. Transfer it. You will then receive an email confirmation that it has been sent.

### Step 5: Enjoy Your NFT
Whether it's in your Email Wallet or personal wallet, your NFT is a token of the great times at ETH Denver. Show it off, trade it, or keep it as a memento—it's yours to enjoy!

We've streamlined the process so that you spend less time on technicalities and more time enjoying the event.


---

This next section is for those interested in learning about the tech behind email wallet and the ETH Denver activation.

## Advanced Technical Breakdown for Developers


The process begins in the Cursive app, where a user can mint an NFT to their Email Wallet by clicking a button labeled "mint to email wallet." This initiates a series of backend operations and smart contract interactions designed to mint the NFT securely and link it to the user's email address in a privacy-preserving manner.

![NFT Flow Diagram](/public/nftFlow.png)


### Detailed Steps

1. **User Interaction**: The user clicks the "mint to email wallet" button in the Cursive app.

2. **Backend Invocation**: The Cursive app's backend sends a request to the NFT Issuer contract. This request includes the necessary information for minting the NFT, such as metadata and the user's email address.

3. **Email Address Commitment**: The NFT Issuer contract interacts with the NFT Relayer, which generates a cryptographic commitment to the user's email address. This commitment serves as a pseudonymous identifier, ensuring the user's privacy while linking the NFT to their email.

4. **NFT Minting and Approval**: The NFT is minted to a special extension contract, the NFT Extension, which is authorized (approved) to transfer the NFT in the future. This step ensures that the NFT can be moved to the user's Email Wallet once it's generated.

5. **Unclaimed State Registration**: Using the email address commitment, the system registers the NFT in an unclaimed state within the Unclaims Handler contract. This state indicates that the NFT is minted but not yet claimed by the user.

6. **User Notification**: An email is sent to the user, notifying them of the minted NFT and asking them to reply if they wish to generate their Email Wallet and claim the NFT.

7. **Email Wallet Generation and NFT Claiming**: Upon the user's response, an Email Wallet is generated for them (if they don't already have one). All unclaimed assets linked to their email address commitment, including the newly minted NFT, are transferred to this newly generated wallet.


### Overview of Relayer API Endpoints

Below is a summary of the API endpoints provided by our Relayer service.

1. **Create Account**
   - **Description**: Creates a new email wallet for a user if an account does not already exist. 
   - **Endpoint**: `POST /API/createAccount`
   - **Body**:
     ```json
     {
       "email_addr": "String"
     }
     ```

2. **Check Account Creation**
   - **Description**: Verifies if the account was successfully created or already exists.
   - **Endpoint**: `POST /API/isAccountCreated`
   - **Body**:
     ```json
     {
       "email_addr": "String"
     }
     ```

3. **Send Tokens**
   - **Description**: Sends tokens from the user's Email Wallet to another address or Email Wallet.
   - **Endpoint**: `POST /API/send`
   - **Body**:
     ```json
     {
       "email_addr": "String",
       "amount": "Number",
       "token_id": "String",
       "recipient_addr": "String",
       "is_recipient_email": "bool"
     }
     ```

4. **Get Wallet Address**
   - **Description**: Retrieves the wallet address of the Email Wallet, necessary for direct transfers or interactions with other smart contracts.
   - **Endpoint**: `POST /API/getWalletAddress`
   - **Body**:
     ```json
     {
       "email_addr": "String",
       "account_key": "String"
     }
     ```

5. **NFT Transfer**
   - **Description**: For transferring NFTs from one Email Wallet to another or an EOA.
   - **Endpoint**: `POST /API/nftTransfer`
   - **Body**:
     ```json
     {
       "email_addr": "String",
       "nft_id": "u64",
       "nft_addr": "String",
       "recipient_addr": "String",
       "is_recipient_email": "bool"
     }
     ```

These APIs make it easy for developers to integrate Email Wallet functionalities into their applications, events, and more.

### Event Recap

ETH Denver 2024 was a big success, highlighting the practical applications of our email wallet technology. Throughout the event, we demonstrated the real-time functionalities of our system, which resulted in the minting of **49 NFTs**. Each of these NFTs, now traceable via the [block explorer](https://sepolia.explorer.zksync.io/address/0x632C10DFd070059c7ED1dAb6C7f384666174d984), represents a unique digital memento of the interactions and experiences shared at ETH Denver. This entire process was facilitated without requiring seed phrases, allowing participation from users regardless of their familiarity with cryptocurrency. We hope to see this being used for multiple events and activations in the future to allow for cleaner UX experiences for end users.

---

### Resources

For further exploration and implementation, check out these resources:

- Email Wallet repo: https://github.com/zkemail/email-wallet
- Email Wallet application: https://emailwallet.org/app
- Email Wallet technical breakdown: https://prove.email/blog/emailwallet


If you have any questions or need assistance, reach out to the team via telegram: https://t.me/zkemail.