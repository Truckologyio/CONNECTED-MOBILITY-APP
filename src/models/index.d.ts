import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCryptoWallet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CryptoWallet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Wallet_ID?: string | null;
  readonly User_ID?: string | null;
  readonly Balance?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCryptoWallet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CryptoWallet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Wallet_ID?: string | null;
  readonly User_ID?: string | null;
  readonly Balance?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CryptoWallet = LazyLoading extends LazyLoadingDisabled ? EagerCryptoWallet : LazyCryptoWallet

export declare const CryptoWallet: (new (init: ModelInit<CryptoWallet>) => CryptoWallet) & {
  copyOf(source: CryptoWallet, mutator: (draft: MutableModel<CryptoWallet>) => MutableModel<CryptoWallet> | void): CryptoWallet;
}

type EagerTokenReward = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TokenReward, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Reward_ID?: string | null;
  readonly User_ID?: string | null;
  readonly Date_Earned?: string | null;
  readonly Mileage_Covered?: number | null;
  readonly Token_Amount?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTokenReward = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TokenReward, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Reward_ID?: string | null;
  readonly User_ID?: string | null;
  readonly Date_Earned?: string | null;
  readonly Mileage_Covered?: number | null;
  readonly Token_Amount?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TokenReward = LazyLoading extends LazyLoadingDisabled ? EagerTokenReward : LazyTokenReward

export declare const TokenReward: (new (init: ModelInit<TokenReward>) => TokenReward) & {
  copyOf(source: TokenReward, mutator: (draft: MutableModel<TokenReward>) => MutableModel<TokenReward> | void): TokenReward;
}

type EagerMileageLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MileageLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Log_ID?: string | null;
  readonly User_ID?: string | null;
  readonly Date?: string | null;
  readonly Start_Location?: string | null;
  readonly End_Location?: string | null;
  readonly Distance_Traveled?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMileageLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MileageLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Log_ID?: string | null;
  readonly User_ID?: string | null;
  readonly Date?: string | null;
  readonly Start_Location?: string | null;
  readonly End_Location?: string | null;
  readonly Distance_Traveled?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MileageLog = LazyLoading extends LazyLoadingDisabled ? EagerMileageLog : LazyMileageLog

export declare const MileageLog: (new (init: ModelInit<MileageLog>) => MileageLog) & {
  copyOf(source: MileageLog, mutator: (draft: MutableModel<MileageLog>) => MutableModel<MileageLog> | void): MileageLog;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User_ID: string;
  readonly Username: string;
  readonly Email: string;
  readonly Password: string;
  readonly License_Number: string;
  readonly CDL_Endorsement: string;
  readonly Issued_State: string;
  readonly Issue_Date: string;
  readonly Exp_Date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User_ID: string;
  readonly Username: string;
  readonly Email: string;
  readonly Password: string;
  readonly License_Number: string;
  readonly CDL_Endorsement: string;
  readonly Issued_State: string;
  readonly Issue_Date: string;
  readonly Exp_Date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}