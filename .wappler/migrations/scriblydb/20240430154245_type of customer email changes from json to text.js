
exports.up = function(knex) {
  return knex.schema
    .table('customeremail', async function (table) {
      table.text('customeremail', 255).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('customeremail', async function (table) {
      table.json('customeremail', 255).alter();
    })
};
