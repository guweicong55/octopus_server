import bcrypt from 'bcryptjs';

class Secret {
    beHash (str) {
        return bcrypt.hashSync(str, 10);
    }

    compare (str, hash) {
        return bcrypt.compareSync(str, hash);
    }
}

export default new Secret();