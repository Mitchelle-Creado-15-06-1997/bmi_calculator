const BmiRepo = require('../repository/bmi.repository');
const bmiRepo = new BmiRepo();
const BmiCalculation = require('../model/bmi.model');

class BmiBiz {
    constructor () {
    }

    bmiCalculator(body) {
        return new Promise(async (resolve, reject) => {
			try {
                const bmiConfig = await bmiRepo.getBmiConfig();
                let count = 0;
                body.forEach(async element => {
                    if (element.HeightCm && element.WeightKg) {
                        element.Heigthm = element.HeightCm / 100;
                        element.bmi = element.WeightKg / element.Heigthm;
                        bmiConfig.forEach(async value => {
                            if (value.low_bmi <= element.bmi && value.high_bmi >= element.bmi) {
                                element.bmiCategory = value.bmi_category;
                                element.healthRisk = value.health_risk;
                                const bmiCalculation = new BmiCalculation(element);
                                await bmiRepo.storeBmiCalculation(bmiCalculation);
                                if (element.bmiCategory === 'Overweight') {
                                    count ++;
                                }
                            }
                        });
                        
                    } else {
                        element.error = "Invalid Height or Weight";
                    }
                });
                
                return resolve({
                    count:count
                });
            } catch (error) {
				return reject(error);
			}
        })
    }
}

module.exports = BmiBiz;