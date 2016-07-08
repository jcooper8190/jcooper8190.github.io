$(function(){



  $("#amenities").submit(function(event){
    event.preventDefault();
    console.log("Form submit");
    var checkedElements = $("input[name='amenity']:checked");

    var checkedValues = $.map(checkedElements, function(element){
      console.log(element);
      return element.value;
    })

    console.log(checkedValues);

    // filterLocations(checkedValues)''

  })

  function filterLocations(checkedValues) {

    _.filter(locations, ['dogFriendly', false]);

    //1) Turn this 
  //["communityManagers", "conferenceRooms"]


  //2) Into this
  // var query = {
  //   "communityManagers": true,
  //   "conferenceRooms": true,
  // }


  // filter using lodash
   var foundLocations = _.filter(locatons, query);
   console.log()

   return foundLocations

  }









  var locations = [
  {
    name: 'Irving Place',
    dogFriendly: false,
    communityManagers: true,
    conferenceRooms: true,
    // eventSpace: false,
    // highSpeedInternet: true,
    // bikeStorage: false,
    // lounges: true,
    // microRoastedCoffee: true,
    // monthlyDemoDays: false,
    // printing: true,
    // privatePhoneBooths: false,
    // purifiedWater: true,
    // screeningRoom: false,
    // weeklyEvents: true,
    // uniqueInteriorDesign: true,
    // curatedEventsLineup: false,
    // freeBeer: true,
    // arcadeRoom: false,
    // bocceCourt: false,
    // helpfulBooks: false,
    // honestyMarket: false,
  },

   {
    name: 'Times Square',
    dogFriendly: false,
    communityManagers: true,
    conferenceRooms: true,
    // eventSpace: true,
    // highSpeedInternet: true,
    // bikeStorage: false,
    // lounges: true,
    // microRoastedCoffee: true,
    // monthlyDemoDays: false,
    // printing: true,
    // privatePhoneBooths: false,
    // purifiedWater: true,
    // screeningRoom: false,
    // weeklyEvents: true,
    // uniqueInteriorDesign: true,
    // curatedEventsLineup: false,
    // freeBeer: true,
    // arcadeRoom: false,
    // bocceCourt: false,
    // helpfulBooks: false,
    // honestyMarket: false,
  },

  {
    name: 'Soho West',
    dogFriendly: true,
    communityManagers: true,
    conferenceRooms: true,
    // eventSpace: true,
    // highSpeedInternet: true,
    // bikeStorage: true,
    // lounges: true,
    // microRoastedCoffee: true,
    // monthlyDemoDays: true,
    // printing: true,
    // privatePhoneBooths: true,
    // purifiedWater: true,
    // screeningRoom: true,
    // weeklyEvents: true,
    // uniqueInteriorDesign: true,
    // curatedEventsLineup: true,
    // freeBeer: true,
    // arcadeRoom: false,
    // bocceCourt: false,
    // helpfulBooks: false,
    // honestyMarket: false,
  },

  // {
  //   name: 'Charging Bull',
  //   dogFriendly: false,
  //   communityManagers: true,
  //   conferenceRooms: true,
  //   eventSpace: true,
  //   highSpeedInternet: true,
  //   bikeStorage: true,
  //   lounges: true,
  //   microRoastedCoffee: true,
  //   monthlyDemoDays: false,
  //   printing: true,
  //   privatePhoneBooths: true,
  //   purifiedWater: true,
  //   screeningRoom: false,
  //   weeklyEvents: true,
  //   uniqueInteriorDesign: true,
  //   curatedEventsLineup: true,
  //   freeBeer: true,
  //   arcadeRoom: true,
  //   bocceCourt: true,
  //   helpfulBooks: true,
  //   honestyMarket: true,
  // },

  // {
  //   name: 'Park South',
  //   dogFriendly: false,
  //   communityManagers: true,
  //   conferenceRooms: true,
  //   eventSpace: true,
  //   highSpeedInternet: true,
  //   bikeStorage: false,
  //   lounges: true,
  //   microRoastedCoffee: true,
  //   monthlyDemoDays: false,
  //   printing: true,
  //   privatePhoneBooths: true,
  //   purifiedWater: true,
  //   screeningRoom: false,
  //   weeklyEvents: true,
  //   uniqueInteriorDesign: true,
  //   curatedEventsLineup: true,
  //   freeBeer: true,
  //   arcadeRoom: true,
  //   bocceCourt: false,
  //   helpfulBooks: false,
  //   honestyMarket: true,
  // }
]

}); 