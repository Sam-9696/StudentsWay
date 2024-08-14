const ParentRepository = require('../repository/parent-repository');

class ParentService {
    constructor() {
        this.parentRepository = new ParentRepository();
    }

    async create(data) {
        try {
            const parent = await this.parentRepository.create(data);
            return parent;
        } catch (error) {
            console.log("Service error");
            throw error;
        }
    }

    async signIn(data) {
        try {
            const parent = await this.ParentRepository.getByEmail(data.email);
                if(data.password != parent.password) {
                    console.log("Password doesn't match");
                    throw {error: 'Incorrect password'};
                }else return parent;
        } catch (error) {
            console.log("Service error");
            throw error;
        }
    }
}

module.exports = ParentService;