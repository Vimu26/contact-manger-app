const bcrypt = require('bcrypt');

const hashPassword = async(password) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = await bcrypt.hash(password, salt);
    return passwordHash;
}
module.exports = {hashPassword};