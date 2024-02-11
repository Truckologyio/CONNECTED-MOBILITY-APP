// src/models/MileageLog.js

const { Model, schema } = require('@aws-amplify/datastore');
const { User } = require('./User');

class MileageLog extends Model {
  static setup() {
    this.User = User;
  }
}

schema.add(MileageLog);

module.exports = MileageLog;
