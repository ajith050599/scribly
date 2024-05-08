
exports.up = function(knex) {
  return knex.schema
    .createTable('products', async function (table) {
      table.increments('id');
      table.string('name');
      table.string('description');
      table.string('image');
      table.decimal('price');
      table.string('currency');
    })
    .createTable('blogs', async function (table) {
      table.increments('id');
      table.string('name');
      table.string('createdby');
      table.string('description');
      table.string('imageurl');
      table.string('blogurl');
      table.string('tag');
    })
    .createTable('customeremail', async function (table) {
      table.increments('id');
      table.string('customeremail');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('customeremail')
    .dropTable('blogs')
    .dropTable('products')
};
