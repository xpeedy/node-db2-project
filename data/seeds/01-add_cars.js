
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: 1, make: 'rowValue1',model:"honda",mileage:100, title:"clean"},
        {vin: 2, make: 'rowValue2',model:"honda",mileage:100, title:"clean"},
        {vin: 3, make: 'rowValue3',model:"honda",mileage:100,  title:"clean"}
      ]);
    });
};
