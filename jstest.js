// Create a variable to hold your NFTs
let nftCollection = [];

// This function will take in some values as parameters, create an NFT object using the parameters passed to it for its metadata, and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling) {
    // Create an NFT object
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    
    // Add the NFT object to the collection
    nftCollection.push(nft);
}

// Create a "loop" that will go through an "array" of NFT's and print their metadata with console.log()
function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`Name: ${nft.name}`);
        console.log(`Eye Color: ${nft.eyeColor}`);
        console.log(`Shirt Type: ${nft.shirtType}`);
        console.log(`Bling: ${nft.bling}`);
        console.log('---');
    });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// Call your functions below this line

// Minting some NFTs
mintNFT("NFT 1", "Blue", "T-Shirt", "Gold Chain");
mintNFT("NFT 2", "Green", "Hoodie", "Silver Ring");
mintNFT("NFT 3", "Brown", "Jacket", "Diamond Necklace");

// Listing all NFTs
listNFTs();

// Printing the total supply of NFTs
console.log(`Total Supply: ${getTotalSupply()}`);
