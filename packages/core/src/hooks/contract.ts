import { useMemo } from 'react'
import {
  Abi,
  AccountInterface,
  CompiledContract,
  Contract,
  ContractFactory,
  ProviderInterface,
} from 'starknet'
import { useStarknet } from '~/providers'

/** Arguments for `useContract`. */
export interface UseContractProps {
  /** The contract abi. */
  abi?: Abi
  /** The contract address. */
  address?: string
}

/** Value returned from `useContract`. */
export interface UseContractResult {
  /** The contract. */
  contract?: Contract
}

/**
 * Hook to bind a `Contract` instance.
 *
 * @example
 * ```tsx
 * import { useContract } from '@starknet-react/core'
 * import compiledErc20 from './erc20.json'
 *
 * function Component() {
 *   const { contract } = useContract({
 *     address: '0x123...890',
 *     abi: compiledErc20.abi
 *   })
 *
 *   return <span>{contract.address}</span>
 * }
 * ```
 */
export function useContract({ abi, address }: UseContractProps): UseContractResult {
  const { library } = useStarknet()

  const contract = useMemo(() => {
    if (abi && address && library) {
      return new Contract(abi, address, library)
    }
  }, [abi, address, library])

  return { contract }
}

/** Arguments for `useContractFactory`. */
export interface UseContractFactoryProps {
  /** The compiled contract. */
  compiledContract?: CompiledContract
  /** The contract abi. */
  abi?: Abi
  /** The account or provider used for deploying. */
  providerOrAccount?: ProviderInterface | AccountInterface
}

/** Value returned from `useContractFactory`. */
export interface UseContractFactoryResult {
  /** The contract factory. */
  contractFactory?: ContractFactory
}

/**
 * Hook to create a `ContractFactory`.
 *
 * @example
 * This example shows how to create a contract factory
 * that will deploy the contract from the connected wallet.
 * ```tsx
 * import { useContractFactory, useAccount } from '@starknet-react/core'
 * import compiledErc20 from './erc20.json'
 *
 * function Component() {
 *   const { account } = useAccount()
 *   const { contractFactory } = useContractFactory({
 *     compiledContract: compiledErc20,
 *     abi: compiledErc20.abi
 *     providerOrAccount: account
 *   })
 *
 *   return <button onClick={() => contractFactory.deploy([])}>Deploy</button>
 * }
 * ```
 */
export function useContractFactory({
  compiledContract,
  abi,
  providerOrAccount,
}: UseContractFactoryProps): UseContractFactoryResult {
  const contractFactory = useMemo(() => {
    if (compiledContract) {
      return new ContractFactory(compiledContract, providerOrAccount, abi)
    }
  }, [compiledContract, providerOrAccount, abi])

  return { contractFactory }
}