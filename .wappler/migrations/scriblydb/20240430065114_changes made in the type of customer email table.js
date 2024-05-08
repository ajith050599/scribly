
exports.up = function(knex) {
  return knex.schema
    .table('customeremail', async function (table) {
      table.json('customeremail').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('customeremail', async function (table) {
      table.string('customeremail', 255).alter();
    })
};
