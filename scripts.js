generatePage("https://corporateclash.net/api/v1/districts/", ".injectHere");
function generatePage(apiPath, injectionLocation){
  console.log("hi");
  $.ajax({
    url : apiPath,
    type: "GET",
    dataType: "json",
    success: function(data) {
      injectTable(data);
    },
    error : function(request, error){
      console.log("Request: " + JSON.stringify(request));
    }
  });
  function injectTable(data){
    var districtData = "";
    for(key in data){
      var currentDistrict = data[key];
      districtData += "<tr><td scope='row'>" + currentDistrict.name + "</td> <td scope='row'>" + currentDistrict.invasion_online + "</td> <td scope='row'>" + currentDistrict.cogs_attacking + "</td> <td scope='row'>" + currentDistrict.remaining_time + "</td> </tr>"
    }
    var html = '<table class="table"><thead><th scope="col">District</th><th scope="col">Invasion Online?</th><th scope="col">Cogs Attacking </th><th scope="col">Remaing Time </th></tr></thead><tbody>' + districtData + '</tbody></table>';
    $(injectionLocation).append(html);
  }
}
