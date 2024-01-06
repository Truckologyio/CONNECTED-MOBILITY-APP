// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CryptoWallet, TokenReward, MileageLog, User } = initSchema(schema);

export {
  CryptoWallet,
  TokenReward,
  MileageLog,
  User
};