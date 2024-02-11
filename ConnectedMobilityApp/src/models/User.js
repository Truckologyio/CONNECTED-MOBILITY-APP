// src/models/User.js

const { Model, schema } = require('@aws-amplify/datastore');

class User extends Model {
  static schema = {
    name: 'User',
    properties: {
      name: { type: 'string', required: true },
      username: { type: 'string', required: true },
      email: { type: 'string', required: true },
      password: { type: 'string', required: true },
      licenseNumber: { type: 'string', required: true },
      cdlEndorsement: { type: 'string', required: true },
      issuedState: { type: 'string', required: true },
      issueDate: { type: 'string', required: true },
      expDate: { type: 'string', required: true }
    }
  };
}

module.exports = User;


