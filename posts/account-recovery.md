---
title: Smart Account (Account Abstraction/EIP4337) Recovery using ZK Email
date: 2024-05-06
authors: ["Elo Mukoro"]
type: Post
draft: false
slug: "accountRecovery"
category: "15 minute read"
tags: ["crypto", "zk"]
description: "This document describes how one could build a smart account recovery module using ZK email"
---

*Special thanks to Elo for crafting the post, and to Tyler, Aayush, John, and Kichong for their reviews and feedback*


In crypto, the difficulty of managing seed phrases means account recovery is critical. Conventional methods of recovery, such as seed phrases and centralized recovery mechanisms, not only introduce friction for users but also pose security risks, undermining the decentralization of cryptocurrency. Smart account standards like ERC-4337 present promising new ways to avoid seed phrases like using secure element biometric signatures, but account recovery is still needed in the case of device loss. Currently, users are forced to only choose from crypto-native friends to be recovery signers, making broad adoption more difficult.

Ideally, we would bridge the gap between the security of blockchain technology and the user-friendly recovery methods found in traditional finance.

With the maturation of Acount Abstraction (AA) wallets, we have reached a stage where we can begin to build modules and extensions to support this technology, some of which are enabled by Zero Knowledge (ZK). This inspired us to develop an email-based account recovery tool using ZK Email. This solution simplifies the recovery process so much that even your mom, who is not familiar with crypto, can recover the user’s wallet simply by replying to an email.

## How ZK Email works (in short)

Zk email works by using two mechanisms:
* DKIM - emails are signed by the email service using DKIM (DomainKeys Identified Mail) to verify the email was sent from the domain it claims to be sent from
  * DKIM is a standard that allows a domain to sign an email, and the email service to verify the signature
  * DKIM typically uses RSA signatures, which is how zk email verifies the email signature
  * DKIM is used by most email services, but its not always the case
  * **Emails sent to self aren't signed**; the user has to either:
    * send an email to another email address they control and generate the proof themselves
    * Or use a service that receives their email and generates the proof on their behalf.

* REGEX - regular expressions are used in circom to match some pattern in the email and expose certain information as an output
  * This can be used to set a new wallet owner/manager

Example Email:
  * TO: `recovery@4337wallet.net`
  * FROM: `George@gmail.com`
  * Subject: `Add Manager: 0x123...`


## How Account Abstraction with 4337 works (in short)

Account abstraction is the ability for a smart contract accounts (in contrast to an EOA) to send and verify transactions.  AA wallets have existed for some time (ie. Gnosis Safe), however, not with the ability to originate transactions. ERC-4337 enables things like sponsored transactions, batched transactions, and more.


## Recovery with AA/4337

ERC-4337 defines an interface for bundlers, the Entrypoint contract and smart contract accounts.  This interface enables the deployment of smart contract accounts and sending of transactions without the need for an EOA account. 

This interface requires that a smart contract account implement a `validateUserOp()` function.  This is where logic can be added for validation other than the traditional ECDSA signatures that EOAs use.

 ![](https://hackmd.io/_uploads/rJTrOjHMT.png)

## Enabling Email-Based Recovery for Smart Accounts using ZK Email:
Email-based recovery is a solution for AA wallets to enable a more intuitive recovery method that allows anyone familiar with email the ability to act as a guardian. As the crypto space matures, the need for user interfaces and experiences that resonate with non-technical users becomes crucial for wider adoption. ZK Email's SDKs make this possible by providing developers with the tools needed to create recovery systems that are both user-friendly and uphold the principles of decentralization.



### User Flow
Account recovery has two main parts: `setting a guardian`, and `recovering your wallet`

**Here's a step by step guide to the account recovery process**: 
1. **Set a Guardian**: On the set guardian page, a wallet owner sets a guardian by entering their email address into the system. 
2. **Verification Email**: The relayer receives this request and sends a verification email to the guardian.
3. **Guardian Confirmation**: The guardian confirms their role by simply replying to the verification email.

![accountRecovery1](https://hackmd.io/_uploads/r1fCnAzeA.png)

5. **Recovery Initiation**: If the wallet owner loses access to their wallet, they can initiate the recovery process. On the account recovery page, a wallet owner puts in the email address of the guardian and they can also put the new ethereum signer address. They select "Request recovery", and the relayer sends an email to the guardian.  
5. **Guardian Action**: Upon receiving the recovery request, the guardian replies to the email without modification, which is then processed by the relayer to confirm the recovery action.
6. **Proof Verification and Wallet Recovery**: The relayer generates a ZKP from the guardian's email response and submits it to the smart contract on the blockchain. Upon successful verification, the contract initiates a process to update the ownership of the wallet securely.
![account-recovery2](https://hackmd.io/_uploads/B13pEy7eR.png)


### How it works
**1. Proof Generation and Parsing at the Email Server:**

Upon receipt of a recovery request, the relayer will process the email request using regex. Key details, particularly from the subject line and Message-ID, for action. 

For instance:
  FROM: `recovery@wallet.org`
  TO: `guardian@gmail.com`
  Subject: `Guard the account of 0x123...` (walletAddress)
  Message-ID: `ACCOUNTKEY.0x1ad9839d...` (AccountKey)
  
In this scenario, the relayer (`recovery@wallet.org`) receives a set guardian request and forwards it to the guardian (`guardian@gmail.com`). The relayer parses the subject of the email, which contains the wallet address that will be guarded, and the Message-ID, which contains the account key of the wallet owner. Upon the guardian's response to this email without any modification, the relayer generates a proof of the guardian's email to the wallet contract on-chain.

- **Populating the UserOp:** The transaction details extracted from the subject of the email are used to populate a UserOp. Libraries like Stackup can simplify the process of populating a UserOp with this information.

 - **zk proof:** The UserOp's signature field is utilized to verify UserOps, typically through mechanisms such as ECDSA or WebAuthN. The callData contains the recovery call, which includes the zkemail proof as part of its arguments. This proof serves as evidence of the user's intent to recover and the legitimacy of the email.

**2. Enabling Safe Module for Wallets**


We partnered with the Wax team at PSE to develop an email account recovery demo, accessible here: [Wax Email Recovery Demo](https://getwax.github.io/wax/). For detailed steps on integrating with the demo, please refer to the documentation provided [here](https://github.com/getwax/wax/tree/main/packages/demos/email-recovery).

Here's a concise guide on incorporating the Safe Recovery Module into your wallets:

- **Installation**: Ensure that the recovery module is installed on the account before initiating the recovery process. This can be achieved through the Safe Wallet UI or by utilizing accounts pre-equipped with the recovery module. This step is crucial for testing the email recovery model.
- **Configuration**: Once installed, customize the recovery settings to suit your preferences. Specify the recovery delay duration and add guardians' email addresses.
- **Guardian Confirmation**: After configuring the settings, the relayer automatically dispatches verification emails to designated guardians. Guardians confirm their roles by replying "Confirm" to these emails. This action triggers a `processRecovery` function, incorporating timelocks or other delay mechanisms to ensure adherence to predefined conditions. Once the threshold of guardians is reached and any configured timelocks or delays have elapsed, call the `completeRecovery` function to securely rotate the owner of the account.



## Conclusion
Account recovery using ZK Email is a huge step for seamless web2 <> web3 integrations, creating a trustless environment where users can recover their wallets without compromising security and autonomy. We want to integrate this feature into as many AA wallets as possible! If you're an AA wallet interested in incorporating email-based account recovery into your wallet application, please fill out this form https://forms.gle/3SDkGcU3LnYHpepr7 to be amongst the first beta testers! Also, feel free to reach out to us via [telegram](https.t.me/zkemail) if you have any questions or inquiries!  



## References/Additional Info

* Email-Auth repo- https://github.com/zkemail/ether-email-auth
* Account recovery spec - https://www.notion.so/proofofemail/Email-Sender-Auth-c87063cd6cdc4c5987ea3bc881c68813
* Email Account recovery demo - https://getwax.github.io/wax/
* Zk Email Documentation - https://prove.email/docs
* Operate Safe multisigs through email verified using ZK proofs - https://ethglobal.com/showcase/zkemail-safe-z8dps