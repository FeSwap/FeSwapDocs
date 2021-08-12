module.exports = {
  FeSwapSidebar: [
    'overview',
    {
      type: 'category',
      label: 'FeSwap Know-How',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id:   'How/get',                     // document id
        },
        {
          type: 'doc',
          id:   'How/swap',                     // document id
        },
        {
          type: 'doc',
          id: 'How/liquidity',                  // document id
        },
        {
          type: 'doc',
          id: 'How/mining',                     // document id
        },
        {
          type: 'doc',
          id:   'How/nft',                      // document id
        },
        {
          type: 'doc',
          id: 'How/sponsor',                    // document id
        },
       ],
    },
    {
      type: 'category',
      label: 'FeSwap Contracts',
      collapsed: true,
      items: [
        'Contracts/fesw',
        'Contracts/factory',
        'Contracts/router',
        'Contracts/nft',
        'Contracts/sponsor',
        'Contracts/StakingTwinRewardsFactory',
        'Contracts/StakingTwinRewards',
        'Contracts/Timelock',
        'Contracts/FeswGovernor',
      ],
    },
    {
      type: 'category',
      label: 'FeSwap Governance',
      collapsed: true,
      items: [
        'FeSwap/introduction',
        'FeSwap/implementation',
        'FeSwap/governance',
        'FeSwap/nft',
        'FeSwap/schedule',
        'FeSwap/conclusion',
        'FeSwap/reference',
      ],
    },
    {
      type: 'category',
      label: 'FreeSwap Exchange Protocol',
      collapsed: true,
      items: [
        'FreeSwap/abstract',
        'FreeSwap/introduction',
        'FreeSwap/basics',
        'FreeSwap/protocol',
        'FreeSwap/arbitrage-fair',
        'FreeSwap/arbitrage-profit',
        'FreeSwap/conclusion',
        'FreeSwap/reference',
      ],
    }   
  ]
};
