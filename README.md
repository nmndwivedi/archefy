# Archefy - The Web3.0 Online Shopping Experience
###Online shopping website for physical products, where every <u>product listing</u> is an NFT.

<i>Note: The product listing is an NFT, **not** the actual physical items, which are simply physical instances of the idea of the product</i>

---

Q: But why do we need this?

Well, depends on who you ask.

###For Creators:
Reputed sellers(called 'Creators' in Archefy parlance) can
- List products early & raise money to fund its production/marketing
- Gauge the demand for a product based on cash amount it raises
- Get valuable partners/influencers to have a stake in their product
- Tokenize their products & create hype around them(launch events)

###For Investors:
As an Investor in an Archefy NFT you get:
- A share of sales revenue of the product for a period of time
- A long list of products to choose from giving stable RoIs
- For a (future) revolutionary product, own its NFT as a collectible

###For Buyers
Users of the website who purchase physical items from archefy.com are called 'Buyers'. They get:
- A modern buying experience compared Ecom sites like Amazon
- Product pages with **livestreams** to show features + realtime Q&As
- Chance to become Investor in products that they themselves use

*Note: The Buyers do not need to know anything about crypto; for them it will be a login and payment flow like on any other E-Commerce website (like Etsy or Amazon)*

---

###Tech Stack
- NextJS: Client
- TailwindCSS, Tailwind Components: UI
- Neo4J: Private graph database
- GraphQL/ApolloServer: Server side tech
- Wagmi.sh (Coinbase Wallet, Wallet Connect, MetaMask): Auth
- Livepeer: Product Livestreams/gated Investor Livestreams
- The Graph: Indexing data
- IPFS: Metadata storage

---
###Features
- Creators can list the items they want to sell as NFTs
- The Creator gives 3 inputs at the time of listing a new product:
  - Product metadata (name, images, variant information)
  - Number of NFT divisions (think of these like company stocks)
  - Target Deprecation Date (when the Investor royalties will stop)
- Product page contains Creator arranged product livestreams with realtime Q&A for a Twitch like experience, powered by **Livepeer**
- Metadata is stored on **IPFS** and the Uris are stored in the Contract
- Product Data and NFT sales data is indexed using **The Graph**
- Web3 login for Investors and Creators using **Coinbase Wallet, Wallet Connect, or MetaMask**
- ExitTo1155: If a user wants to convert their token into a collectible NFT, they can do so, provided the token is marked as deprecated

*Note: Wallet based login and KYC/AML is needed for Creators and Investors, but none of this is required for a Buyer*

*Note: On the Smart Contract level, each NFT (of a product) is identified by a unique token id under a unified ERC1155 contract called ArchefyPath, deployed at the address \<TBD\>*

*Note: Depending on the cultural impact of the product, the buyers might want to convert the token into a collectible.
Therefore, ONLY AFTER the token has been marked deprecated by the Creator(i.e. the sales royalties have been stopped), the Buyers will have the option to convert the contract into a standalone ERC1155 token with the same metadata and the same balance amount that they had in the ArchefyPath contract for that tokenId. If they choose to do this, the old(ArchefyPath) tokens are irreversibly burned and the newly deployed contract contains the same number of tokens.*