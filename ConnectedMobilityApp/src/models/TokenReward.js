// src/models/TokenReward.js

const { Model, schema } = require('@aws-amplify/datastore');
const { User } = require('./User');

class TokenReward extends Model {
  static setup() {
    this.User = User;
  }
}

schema.attributes.TokenReward = {
  rewardID: { type: 'string', required: true },
  dateEarned: { type: 'string', required: true },
  mileageCovered: { type: 'number', required: true },
  tokenAmount: { type: 'number', required: true }
};

schema.add(TokenReward);

module.exports = TokenReward;



