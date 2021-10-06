import { TxBuilderConfig } from '../types';

export const defaultConfig: TxBuilderConfig = {
  governance: {
    mainnet: {
      AAVE_GOVERNANCE_V2: '',
      AAVE_GOVERNANCE_V2_EXECUTOR_SHORT:
        '',
      AAVE_GOVERNANCE_V2_EXECUTOR_LONG:
        '',
      AAVE_GOVERNANCE_V2_HELPER: '',
    },
    kovan: {
      AAVE_GOVERNANCE_V2: '',
      AAVE_GOVERNANCE_V2_EXECUTOR_SHORT:
        '',
      AAVE_GOVERNANCE_V2_EXECUTOR_LONG:
        '',
      AAVE_GOVERNANCE_V2_HELPER: '',
    },
  },
  lendingPool: {
    ftm: {
      proto: {
        LENDING_POOL: '0x9FAD24f572045c7869117160A571B2e50b10d068',
        WETH_GATEWAY: '0x47102245FEa0F8D35a6b28E54505e9FfD83d0704',
      }
    },
    mainnet: {
      proto: {
        LENDING_POOL: '',
        WETH_GATEWAY: '',
        FLASH_LIQUIDATION_ADAPTER: '',
        REPAY_WITH_COLLATERAL_ADAPTER:
          '',
        SWAP_COLLATERAL_ADAPTER: '',
      },
      amm: {
        LENDING_POOL: '',
        WETH_GATEWAY: '',
        FLASH_LIQUIDATION_ADAPTER: '',
        REPAY_WITH_COLLATERAL_ADAPTER:
          '',
        SWAP_COLLATERAL_ADAPTER: '',
      },
    },
    kovan: {
      proto: {
        LENDING_POOL: '',
        WETH_GATEWAY: '',
        FLASH_LIQUIDATION_ADAPTER: '',
        REPAY_WITH_COLLATERAL_ADAPTER:
          '',
        SWAP_COLLATERAL_ADAPTER: '',
        FAUCET: '',
      },
      amm: {
        LENDING_POOL: '',
        WETH_GATEWAY: '',
        FLASH_LIQUIDATION_ADAPTER: '',
        REPAY_WITH_COLLATERAL_ADAPTER:
          '',
        SWAP_COLLATERAL_ADAPTER: '',
        FAUCET: '',
      },
    },
    polygon: {
      proto: {
        LENDING_POOL: '',
        WETH_GATEWAY: '',
        SWAP_COLLATERAL_ADAPTER: '',
      },
    },
    mumbai: {
      proto: {
        LENDING_POOL: '',
        WETH_GATEWAY: '',
        FAUCET: '',
      },
    },
  },
  staking: {
    mainnet: {
      aave: {
        TOKEN_STAKING: '',
        STAKING_REWARD_TOKEN: '',
        STAKING_HELPER: '',
      },
      balancer: {
        TOKEN_STAKING: '',
        STAKING_REWARD_TOKEN: '',
      },
    },
    kovan: {
      aave: {
        TOKEN_STAKING: '',
        STAKING_REWARD_TOKEN: '',
        STAKING_HELPER: '',
      },
      balancer: {
        TOKEN_STAKING: '',
        STAKING_REWARD_TOKEN: '',
      },
    },
  },
  incentives: {
    mainnet: {
      INCENTIVES_CONTROLLER: '',
      INCENTIVES_CONTROLLER_REWARD_TOKEN:
        '',
    },
    polygon: {
      INCENTIVES_CONTROLLER: '',
      INCENTIVES_CONTROLLER_REWARD_TOKEN:
        '',
    },
    mumbai: {
      INCENTIVES_CONTROLLER: '',
      INCENTIVES_CONTROLLER_REWARD_TOKEN:
        '',
    },
  },
  migrator: {
    mainnet: {
      LEND_TO_AAVE_MIGRATOR: '',
    },
    kovan: {
      LEND_TO_AAVE_MIGRATOR: '',
    },
  },
};
