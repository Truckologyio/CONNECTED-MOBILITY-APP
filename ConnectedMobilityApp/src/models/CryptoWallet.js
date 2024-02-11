// src/models/CryptoWallet.js

const { Model, schema } = require('@aws-amplify/datastore');
const { User } = require('./User');

class CryptoWallet extends Model {
  static setup() {
    this.schema = schema.createSchema({
      walletID: { type: 'string', isRequired: true },
      balance: { type: 'number', isRequired: true },
      user: { type: User, isRequired: true }, // Reference to User model
    });
  }
}

schema.add(CryptoWallet);

module





