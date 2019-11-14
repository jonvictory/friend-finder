// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
        "name":"Leon",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ]
      },

      {
        "name":"Pris",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
          ]
      },

      {
        "name":"Roy Batty",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
          ]
      },

      {
        "name":"Rachel",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            
          ]
      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;
  