import { pool } from '../src/database/connection.js';

(async () => {
  try {
    const { rows } = await pool.query('SELECT * FROM users');
    console.log(rows);
  } catch (err) {
    console.error('DB error:', err);
  } finally {
    await pool.end();
  }
})();
