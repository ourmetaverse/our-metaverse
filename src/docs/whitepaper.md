# 白皮书

通过以太坊智能合约，科幻小说《我们的元宇宙·开端》(`our-metaverse.md` SHA256 Hash `C73F914CBFD8E9BF6CF3FE3E9A3488E1524CC777779035E01975778BAD1D971C`) 被铸造为 NFT。合约地址为 `0xEcd0D12E21805803f70de03B72B1C162dB0898d9`，由地址 `0x9C3C27d5bADb93fC2468f4cb12056b8C0C228ad8` (后面使用 `our-metaverse.eth` 替代) 发布。本项目 NFT 一共发行 3000 份。其中 2998 份为基础 NFT，铸造需要 0.01ETH，每个地址最多铸造 10 个 NFT，拥有它代表拥有如下权益和义务：

1. 获得 OurMetaverseDAO 成员的身份。
2. 参与收益分成，每一份 NFT 对应一份收入分成的权益。
3. 拥有 OurMetaverse NFT 对应的数字图片艺术品，该系列图片将在未来基于小说背景创作。
4. OurMetaverseDAO 成员拥有 OurMetaverseDAO 作品集中包含的所有作品的数字化形式的修改权和翻译权，可以进行二次创作。
5. 对 OurMetaverseDAO 作品集的商业性质的二次创作需要调用合约接口 `grant` 授权，将二次创作的作品信息写入合约存证，比如合约地址或者内容哈希。首次存证不需要费用（Gas 费除外），从第二次开始需要 0.3ETH，然后每次新增 0.3ETH，存证花费会平分给所有 NFT 所有，该逻辑已通过智能合约实现，通过合约代码保证。
6. 对 OurMetaverseDAO 作品集的非商业性质的数字化作品的二次创作不需要授权，所有人都可以使用。比如即便你不是 OurMetaverseDAO 的成员也可以对 OurMetaverseDAO 的作品进行非商业化的翻译，无需存证授权。
7. 创作者通过存证授权二次创作作品后，即代表该作品被包含在 OurMetaverseDAO 作品集中，作品的修改权和翻译权可以提供给 OurMetaverseDAO 使用。同时作品的影视改编权和图书出版权则分别独家授权给 OurMetaverse 0 号 NFT 和 OurMetaverse 1 号 NFT。
8. 除了本白皮书声明的权益外，创作者创作出来的作品的其他权益由创作者所有并自行决定行使相关权益，比如作品的线下T恤等。

对于 0 号 NFT 和 1 号 NFT 2 份特殊 NFT 如下：
1. 特殊 NFT 将在合约初始化的时候由合约地址临时铸造并拥有，所有人都可以调用合约方法购买，购买即代表完成铸造，享有对应的权益。
2. 1 号权益代表小说、图册等线下图书类商品出版权益，售价 30ETH。发行对应的线下商品时需要调用合约接口授权，第一次调用不需要费用（Gas 费除外）第二次需要 3ETH，每次新增 3ETH。
3. 0 号权益代表影视改编权，售价 600ETH。发行对应的线下商品时需要调用合约接口 `grant` 授权，第一次调用不需要费用（Gas 费除外）第二次需要 30ETH，每次新增 30ETH。
4. 所有收益将平分到每一个 NFT，拥有 NFT 的地址可以提取所对应的 ETH。该逻辑已通过智能合约实现，通过合约代码保证。

2998 份基础 NFT 中的 598 份将由合约发布地址 `our-metaverse.eth` 保留，其中 500 份（100-599 号 NFT）用于未来吸引更多的创作者和项目的运营，它们的使用会在 OurMetaverseDAO 中进行公示，如果 NFT 中已经有包含的收益，则收益由 `our-metaverse.eth` 决定使用方式。另外 98 份（2-99 号 NFT）和 Mint 的收益由 `our-metaverse.eth` 持有并使用。

[在 Mirror 上阅读](https://mirror.xyz/our-metaverse.eth/oRbB--IjSzrT2uGZF6AE1LiNnucZ-LI8e0TxpTWL7rA)。
