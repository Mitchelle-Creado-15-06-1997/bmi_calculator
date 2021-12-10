class BmiCalculation {
    constructor(data) {
        const {
			Gender,
			Heigthm,
			WeightKg,
			bmi,
			bmiCategory,
			healthRisk
		} = data;

        this.gender = Gender;
        this.height_m = Heigthm;
        this.weight_kg = WeightKg;
        this.bmi = bmi;
        this.bmi_category = bmiCategory;
        this.health_risk = healthRisk;
    }
}
module.exports = BmiCalculation;