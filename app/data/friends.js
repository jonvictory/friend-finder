// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
        "name":"Leon",
        "photo":"https://vignette.wikia.nocookie.net/bladerunner/images/1/18/Leon.jpg/revision/latest?cb=20190601154225",
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
        "photo":"https://i.pinimg.com/originals/5a/8a/6d/5a8a6de55a443c04216fea42eb4d5df0.jpg",
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
        "photo":"https://i.ytimg.com/vi/JdUq2opPY-Q/maxresdefault.jpg",
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
        "photo":"http://images5.fanpop.com/image/photos/31000000/Rachael-blade-runner-31078090-841-1280.jpg",
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
  