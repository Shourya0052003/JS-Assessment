# NFT Collection Project

## Overview

This project demonstrates a simple implementation of minting and managing a collection of NFTs (Non-Fungible Tokens) using JavaScript. It includes functions to create (mint) new NFTs, list all the NFTs with their metadata, and get the total supply of minted NFTs.

## Code Explanation

### Variables

- `nftCollection`: An array that holds the NFT objects.

### Functions

1. **mintNFT(name, eyeColor, shirtType, bling)**
    - This function creates an NFT object using the provided metadata (name, eyeColor, shirtType, bling) and adds it to the `nftCollection` array.
    - **Parameters**:
        - `name` (string): The name of the NFT.
        - `eyeColor` (string): The eye color attribute of the NFT.
        - `shirtType` (string): The shirt type attribute of the NFT.
        - `bling` (string): The bling attribute of the NFT.
    - **Example**:
        ```javascript
        mintNFT("NFT 1", "Blue", "T-Shirt", "Gold Chain");
        ```

2. **listNFTs()**
    - This function iterates through the `nftCollection` array and logs the metadata of each NFT to the console.
    - **Example**:
        ```javascript
        listNFTs();
        ```

3. **getTotalSupply()**
    - This function returns the total number of NFTs in the `nftCollection` array.
    - **Example**:
        ```javascript
        console.log(`Total Supply: ${getTotalSupply()}`);
        ```

### Usage

Below is an example of how to use the functions in this project:

```javascript
// Minting some NFTs
mintNFT("NFT 1", "Blue", "T-Shirt", "Gold Chain");
mintNFT("NFT 2", "Green", "Hoodie", "Silver Ring");
mintNFT("NFT 3", "Brown", "Jacket", "Diamond Necklace");

// Listing all NFTs
listNFTs();

// Printing the total supply of NFTs
console.log(`Total Supply: ${getTotalSupply()}`);
```

### Output

Running the above code will produce the following output in the console:

```
NFT 1:
Name: NFT 1
Eye Color: Blue
Shirt Type: T-Shirt
Bling: Gold Chain
---
NFT 2:
Name: NFT 2
Eye Color: Green
Shirt Type: Hoodie
Bling: Silver Ring
---
NFT 3:
Name: NFT 3
Eye Color: Brown
Shirt Type: Jacket
Bling: Diamond Necklace
---
Total Supply: 3
```

## How to Run

1. Copy the code into a JavaScript file (as `jstest.js`).
2. Open your terminal or command prompt.
3. Navigate to the directory where your JavaScript file is located.
4. Run the file using Node.js:
    ```bash
    node jstest.js
    ```

## Conclusion

This project provides a basic template for creating and managing an NFT collection. You can expand upon this foundation by adding more features such as metadata validation, unique ID generation, or integration with a blockchain platform for real-world applications.
