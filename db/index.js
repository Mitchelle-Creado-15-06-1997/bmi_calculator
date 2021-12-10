const mysql = require('mysql');
const config = require('config');

const state = {
	pool: null,
};

exports.connect = function (done) {
	try {
		state.pool = mysql.createPool(config.get('db.mysql'));
		done();
	} catch (error) {
		done(error);
	}
};

exports.get = function () {
	return state.pool;
};

exports.getConnection = async function () {
	return new Promise((resolve, reject) => state.pool.getConnection((err, connection) => {
		if (err) {
			return reject(err);
		}
		if (connection.state === 'disconnected') {
			return reject({ status: 'fail', message: 'DB Connection Timeout' });
		}
		connection.config.queryFormat = function (query, values) {
			// console.log(query);
			if (!values) return query;
			if (query.indexOf(':') === -1) {
				return mysql.format(query, values);
			}
			const finalQuery = query.replace(/\:(\w+)/g, (txt, key) => {
				if (values.hasOwnProperty(key)) {
					return this.escape(values[key]);
				}
				return txt;
			});
			return finalQuery;
		};

		connection.on('error', function (err) {
			this.release();
		}.bind(connection));

		return resolve(connection);
	}));
};
