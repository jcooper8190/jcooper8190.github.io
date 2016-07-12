$(document).ready(function(){
  //function to populate DOM with locations passed to it
  function loadLocations(locations){
    var container = $(".imagecontainer");
    var locations = locations;
    //declare empty string variable to add HTML 
    var locationHTML = "";
    //loop through objects in locations array 
    for(var location = 0; location < locations.length; location++){
      locationHTML += "<li class='image'>" + 
              "<p>" + locations[location].name + "</p>" +
               "<img src='" + locations[location].image + "'/>" +
              "<p>" + locations[location].description + "</p>" +
              "</li>";
    }
    //set container html to location html 
    container[0].innerHTML = locationHTML;
  }

  //receives selected filters and location array
  function filterLocations(filter, locations){
    //if there are any filters selected
    if(filter.length){
      //empty array which will get populated with selected checkbox values
      var filters = [];
      var locations = locations;
      var filteredLocations = []; 
      //loop through selected filters and add them to above array
      for(var i = 0; i < filter.length; i++){
        filters.push(filter[i].value);
      }

      //loop through location object 
      for(var location = 0; location < locations.length; location++){
        //declare counter variable to check to see how many filters are selected 
        var filterCount = 0;

        //loop through filter variables on a given location 
        for(var i = 0; i < filters.length; i++){
          //if the location matches on of the filters increment the counter 
          if(locations[location][filters[i]]){
            filterCount++;
          }
        }
        //if the location has the same amount of filters as filters selected add it to the filtered locations array 
        if(filterCount == filters.length){
          filteredLocations.push(locations[location]);
        }
      }

      //remove duplicate objects from the array
      var nonDuplicatedArr = _.uniq(filteredLocations, 'name');

      //call load location fucntion with new filtered array object 
      loadLocations(nonDuplicatedArr);
    } else {
      //if there are no filters selected load all locations 
      loadLocations(locations);
    }
  }

  $("#amenities").submit(function(event){
    event.preventDefault();
    var checkedElements = $("input[name='amenity']:checked");
    filterLocations(checkedElements,locations);
  });

  var locations = [
    {
      name: 'Irving Place',
      image: "http://res.cloudinary.com/wework/image/upload/v1468012027/email-marketing/GA/ls.png",
      description: "Just steps from Union Square, the WeWork Irving Place coworking space is nestled on a quiet block lined with trees, cafes, and restaurants and is easily accessible by several major subway lines.",
      dogFriendly: false,
      communityManagers: true,
      conferenceRooms: true,
      eventSpace: false,
      highSpeedInternet: true,
      bikeStorage: false,
      lounges: true,
      microRoastedCoffee: true,
      monthlyDemoDays: false,
      printing: true,
      privatePhoneBooths: false,
      purifiedWater: true,
      screeningRoom: false,
      weeklyEvents: true,
      uniqueInteriorDesign: true,
      curatedEventsLineup: false,
      freeBeer: true,
      arcadeRoom: false,
      bocceCourt: false,
      helpfulBooks: false,
      honestyMarket: false,
    },

     {
      name: 'Times Square',
      image: "http://res.cloudinary.com/wework/image/upload/v1468012027/email-marketing/GA/we-work-time-square-12.png",
      description: "Steps from the Theater District and a short walk to Bryant Park, the WeWork Times Square coworking space is designed as an ode to its neighborhood's colored history.",
      dogFriendly: false,
      communityManagers: true,
      conferenceRooms: true,
      eventSpace: true,
      highSpeedInternet: true,
      bikeStorage: false,
      lounges: true,
      microRoastedCoffee: true,
      monthlyDemoDays: false,
      printing: true,
      privatePhoneBooths: false,
      purifiedWater: true,
      screeningRoom: false,
      weeklyEvents: true,
      uniqueInteriorDesign: true,
      curatedEventsLineup: false,
      freeBeer: true,
      arcadeRoom: false,
      bocceCourt: false,
      helpfulBooks: false,
      honestyMarket: false,
    },

    {
      name: 'Soho West',
      image: "http://res.cloudinary.com/wework/image/upload/v1468012027/email-marketing/GA/WeWork-SoHo-wecross-Heaven.png",
      description: "Once called the Printing District, Soho West is home to media and advertising giants, digital innovators and tech startups.",
      dogFriendly: true,
      communityManagers: true,
      conferenceRooms: true,
      eventSpace: true,
      highSpeedInternet: true,
      bikeStorage: true,
      lounges: true,
      microRoastedCoffee: true,
      monthlyDemoDays: true,
      printing: true,
      privatePhoneBooths: true,
      purifiedWater: true,
      screeningRoom: true,
      weeklyEvents: true,
      uniqueInteriorDesign: true,
      curatedEventsLineup: true,
      freeBeer: true,
      arcadeRoom: false,
      bocceCourt: false,
      helpfulBooks: false,
      honestyMarket: false,
    },

    {
      name: 'Charging Bull',
      image: "http://res.cloudinary.com/wework/image/upload/v1468012027/email-marketing/GA/wework-chelsea-1.png",
      description: "Looking down on one of New York's most famous icons, WeWork Charging Bull is entrenched in fast evolving Lower Manhattan.",
      dogFriendly: false,
      communityManagers: true,
      conferenceRooms: true,
      eventSpace: true,
      highSpeedInternet: true,
      bikeStorage: true,
      lounges: true,
      microRoastedCoffee: true,
      monthlyDemoDays: false,
      printing: true,
      privatePhoneBooths: true,
      purifiedWater: true,
      screeningRoom: false,
      weeklyEvents: true,
      uniqueInteriorDesign: true,
      curatedEventsLineup: true,
      freeBeer: true,
      arcadeRoom: true,
      bocceCourt: true,
      helpfulBooks: true,
      honestyMarket: true,
    },

    {
      name: 'Park South',
      image: "http://res.cloudinary.com/wework/image/upload/v1468012027/email-marketing/GA/ls.png",
      description: "WeWork Park South is beautifully designed with a warm, inviting aesthetic located in a rich corridor for business and technology.",
      dogFriendly: false,
      communityManagers: true,
      conferenceRooms: true,
      eventSpace: true,
      highSpeedInternet: true,
      bikeStorage: false,
      lounges: true,
      microRoastedCoffee: true,
      monthlyDemoDays: false,
      printing: true,
      privatePhoneBooths: true,
      purifiedWater: true,
      screeningRoom: false,
      weeklyEvents: true,
      uniqueInteriorDesign: true,
      curatedEventsLineup: true,
      freeBeer: true,
      arcadeRoom: true,
      bocceCourt: false,
      helpfulBooks: false,
      honestyMarket: true,
    }
  ]

  loadLocations(locations);

});



























