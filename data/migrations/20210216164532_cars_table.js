
exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
      table.increments()
      table.text("VIN").unique().notNullable()
      table.text("Make").notNullable()
      table.text("Model").notNullable()
      table.float("Mileage").notNullable()
      table.text("Transmission")
      table.text("Title")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars")
};
