const BmiBiz = require('../biz/bmi.biz');
const bmiBiz = new BmiBiz();

class BmiController {
    constructor () {
    }

    async bmiCalculator(request, response, next) {
        try {
            const result = await bmiBiz.bmiCalculator(request.body);
            response.json({
				...result,
				success: true,
			});
        } catch (error) {
            response.status(error.status || 500).json({
				status_code: error.status || 500,
				message: error.message,
				stack: error.stack,
				success: false,
			});
        }
    }
}

module.exports = BmiController;