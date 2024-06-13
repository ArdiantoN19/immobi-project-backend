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
  pgm.createTable("karyawan", {
    id: "id",
    id_jabatan: {
      type: "INTEGER",
      notNull: true,
    },
    name: {
      type: "VARCHAR(255)",
      notNull: true,
    },
    age: {
      type: "INTEGER",
      notNull: true,
    },
    gender: {
      type: "SMALLINT",
      notNull: true,
    },
    tanggal_lahir: {
      type: "DATE",
      notNull: true,
    },
    alamat: {
      type: "TEXT",
      notNull: true,
    },
    createdAt: {
      type: "TIMESTAMP",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    updatedAt: {
      type: "TIMESTAMP",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  pgm.addConstraint(
    "karyawan",
    "fk_karyawan.id_jabatan_jabatan.id",
    "FOREIGN KEY(id_jabatan) REFERENCES jabatan(id)"
  );
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.dropTable("karyawan");
};
