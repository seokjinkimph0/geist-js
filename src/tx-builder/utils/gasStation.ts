import { BigNumber } from 'ethers';
import { transactionType, Configuration, Network } from '../types';

const DEFAULT_SURPLUS = 60; // 30%

export const estimateGas = async (
  tx: transactionType,
  config: Configuration,
): Promise<BigNumber> => {
  const estimatedGas = await config.provider.estimateGas(tx);
  return estimatedGas.add(
    estimatedGas.mul(DEFAULT_SURPLUS).div(100)
  );
};

export const estimateGasByNetwork = async (
  tx: transactionType,
  config: Configuration,
): Promise<BigNumber> => {
  const estimatedGas = await config.provider.estimateGas(tx);

  const { network } = config;
  if (network === Network.polygon || network === Network.bsc) {
    return estimatedGas.add(estimatedGas.mul(120).div(100));
  }

  return estimatedGas.add(
    estimatedGas.mul(DEFAULT_SURPLUS).div(100)
  );
};

export const getGasPrice = async (
  config: Configuration
): Promise<BigNumber> => {
  const gasPrice = await config.provider.getGasPrice();
  return gasPrice;
};
