const db = require('../db');

class BmiRepo {
    constructor () {
        this.connection = db.get();
    }

    getBmiConfig() {
        return new Promise(async (resolve, reject) => {
			try {
                const query = `SELECT * from bmi_config where is_active = 1`;
                this.connection = await db.getConnection();
				this.connection.query(query, [], (error, result, fields) => {
					this.connection.release();
					if (error) {
						return reject(error);
					}
					return resolve(result);
				});
            } catch (error) {
				return reject(error);
			}
        })
    }

    storeBmiCalculation(result) {
        return new Promise(async (resolve, reject) => {
			try {
                const query = `INSERT IGNORE INTO user_bmi SET ?`;
                this.connection = await db.getConnection();
				this.connection.query(query, [result], (error, result, fields) => {
					this.connection.release();
					if (error) {
						reject(error);
					}
					resolve(true);
				});
            } catch (error) {
				return reject(error);
			}
        })
    }
}

module.exports = BmiRepo;