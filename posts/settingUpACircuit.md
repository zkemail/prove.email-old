---
title: "Setting up your own ZK Email Circuit"
date: 2023-08-18T22:12:03.284Z
type: Post
draft: false
recommanded: false
slug: "tutorial"
category: "10 min read"
tags: ["intro"]
description: "This tutorial guides you through the process of creating circom circuits using our SDK packages. You'll learn how to verify DKIM headers in your emails, ensuring the authenticity of the information locatedd in your email."
---

# Setting up your ZK Email circuit: Twitter Example

## Introduction

Emails are integral to our digital lives, serving as our gateway to various online services and platforms. ZK Email leverages ZK proofs to authenticate these interactions while preserving privacy.

 This guide will walk you through setting up a circuit that enables you to verify your Twitter username on-chain, without disclosing any information beyond the username itself.

## ZK Email Library

The ZK Email library contains 3 packages. 

- zk-email/helpers - helper functions to help generate and verify the inputs of the circuit

- zk-email/contracts - contains the DKIM Registry for public domains (google, yahoo, etc)

- zk-email/circuits - circuit templates that are used in creating your circuit

## Setting up the Repository

Create a new folder and initiate your repository:

```
npm init -y
```

Install all three packages by running:

```bash
npm install @zk-email/circuits @zk-email/helpers @zk-email/contracts
```


## Preparing the Email

We are trying to get is the "Forgot your password" email from Twitter. This email contains a unique link that allows the user to reset their password. By verifying this email, we can ensure that the user has access to the associated Twitter account.


You need to add the original raw email file to an .eml file in your repository. To do this click the three dots in your email to view the raw email.

## Generating the Input for ZKRegex

Now, let's generate the input for a zkregex using zkregex.com. This tool will help us create a regular expression (regex) that matches the pattern of a Twitter username.

1. Go to [zkregex.com](https://zkregex-ui.pages.dev/).

2. Enter the regex for a Twitter username in the "Regex Pattern" field. We'll use `@([a-zA-Z0-9_]+)`.

3. Input example Twitter usernames in the "Input 1", "Input 2", and "Input 3" fields, like `@zkemail`, `@zkregex`, and `@zk_circuit`.

4. Click "Test" to generate and test the Circom and Halo2 circuits.

![ZkRegex Tool](/public/zkTool.png)

5. In the "Select which states to be revealed" step, choose the states that correspond to the Twitter username.

6. Click "Generate" to get the Circom code for your circuit.

This circuit verifies a Twitter username without revealing any other information. Use it in your zkEmail application to authenticate Twitter usernames on-chain.

## Generating Inputs for Your Circuit

Next, we generate inputs for your circuit using the ZK Email SDK. This example uses a Twitter verification circuit, but the principles can be applied to any circuit you're working with.
Code Example

You can create a `inputs.ts` file and place this code inside:
``` typescript
import { bytesToBigInt, fromHex } from "@zk-email/helpers";
import { generateCircuitInputs } from "@zk-email/helpers";
import { verifyDKIMSignature } from "@zk-email/helpers"
import fs from "fs"
import path from "path"

export const STRING_PRESELECTOR = "email was meant for @";
export const MAX_HEADER_PADDED_BYTES = 1024;
export const MAX_BODY_PADDED_BYTES = 1536;

export async function generateTwitterVerifierCircuitInputs() {
    const rawEmail = fs.readFileSync(
        path.join(__dirname, "./emls/rawEmail.eml"),
        "utf8"
      );
    const dkimResult = await verifyDKIMSignature(Buffer.from(rawEmail));
    const emailVerifierInputs = generateCircuitInputs({
        rsaSignature: dkimResult.signature,
        rsaPublicKey: dkimResult.publicKey,
        body: dkimResult.body,
        bodyHash:dkimResult.bodyHash,
        message: dkimResult.message,
        shaPrecomputeSelector: STRING_PRESELECTOR,
        maxMessageLength: MAX_HEADER_PADDED_BYTES,
        maxBodyLength: MAX_BODY_PADDED_BYTES
    });

    const bodyRemaining = emailVerifierInputs.in_body_padded!.map(c => Number(c));
    const selectorBuffer = Buffer.from(STRING_PRESELECTOR);
    const usernameIndex = Buffer.from(bodyRemaining).indexOf(selectorBuffer) + selectorBuffer.length;

    const address = bytesToBigInt(fromHex("0x71C7656EC7ab88b098defB751B7401B5f6d897")).toString();

    const inputJson = {
        ...emailVerifierInputs,
        twitter_username_idx: usernameIndex.toString(),
        address,
    };
    fs.writeFileSync("./input.json", JSON.stringify(inputJson))
}

(async () => {
    await generateTwitterVerifierCircuitInputs();
}) ();

```

This script reads your raw email file, verifies the DKIM signature, generates the circuit inputs, and writes them to an input.json file.

The generateTwitterVerifierCircuitInputs function is the main function that does all the work. It uses helper functions from the @zk-email/helpers package to generate the inputs and write them to a file.

Remember to replace the address and the path to the raw email file with your own values.


## Implementing the Twitter Circuit

To set up your Twitter circuit, follow these steps:

1. Refer to the `twitter.circom` file in the `zk-email/packages/twitter-verifier-circuits` package.
2. Understand the circuit logic and modify it according to your requirements.
3. Test your circuit to ensure it's working as expected.

For more details, refer to the following resources:

- [Twitter Circuit Code](https://github.com/zkemail/zk-email-verify/blob/main/packages/twitter-verifier-circuits/twitter.circom)
- [zk-email verifier usage guide](https://zkemail.gitbook.io/zk-email/zk-email-verifier/usage-guide)


## Compiling and Computing the Witness

After setting up your Twitter circuit, the next step is to compile it and compute the witness. This process involves generating the verification key (vkey) and the zk-SNARK keys (zkeys).

The detailed steps for this process are covered in the [zk-email verifier usage guide](https://zkemail.gitbook.io/zk-email/zk-email-verifier/usage-guide). It is recommended to follow the guide to ensure the correct setup and operation of your circuit.

## Conclusion

This tutorial provided just one example of a circuit you can build. For more examples and resources, you can check out the [zk-email verifier usage guide](https://zkemail.gitbook.io/zk-email/zk-email-verifier/usage-guide) and the [Twitter Circuit Code](https://github.com/zkemail/zk-email-verify/blob/main/packages/twitter-verifier-circuits/twitter.circom).

This is just the beginning of verifiable provenance data. As you continue to explore and build, you'll discover the vast potential of this technology. The power of zk-SNARKs allows for the creation of systems where data can be verified without revealing any additional information. This opens up a world of possibilities for privacy-preserving applications.













