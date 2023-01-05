/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pathData').del()
  await knex('pathData').insert([
    {
      id: 1,
      firstname: 'Eleanor',
      lastname: 'Ruth',
      hometown: 'Colorado Springs',
      information: 'Eleanor is student at Turing.'
    },
    {
      id: 2,
      firstname: 'Claire',
      lastname: 'Ruth',
      hometown: 'Colorado Springs',
      information: 'Claire lives in New York City.'
    },
    {
      id: 3,
      firstname: 'Olivia',
      lastname: 'Ruth',
      hometown: 'Colorado Springs',
      information: 'Olivia is an artist.'
    }
  ]);
};
