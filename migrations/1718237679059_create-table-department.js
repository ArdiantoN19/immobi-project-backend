/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createTable("department", {
    id: "id",
    nama_department: {
      type: "VARCHAR(255)",
      notNull: true,
    },
    created_at: {
      type: "TIMESTAMP",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    updated_at: {
      type: "TIMESTAMP",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.dropTable("department");
};
