
exports.up = function(knex) {
  return knex.schema
    .table('products', async function (table) {
      table.string('priceid');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('products', async function (table) {
      table.dropColumn('priceid');
    })
};
