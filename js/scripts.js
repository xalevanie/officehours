// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";
// @codekit-prepend "airtable.js";

// CONFIGURE "OFFICE HOURS"
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyNyK2dVB4Da7Dzo'
});
var base = Airtable.base('apphf0m0dkI0mIn3V');


// Get Records
base('Office Hours').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    
    if (err) { console.error(err); return; }

    records.forEach(function(record) {
       
      // Check-Check 
      // console.log( record.get('Name') );
      // console.log( record );
      
      // Display Data or Show Template
      showOfficeHours( record );

    });
});

// Show Office Hours
var showOfficeHours = function( record ) {
  
  //console.log( record.fields.Image["0"].url );
  // console.log( record.fields['Name']);
  console.log( record.fields['In Office']);
    
  var status;
  var status_message;
    
  if ( record.fields['In Office'] === true ) {
      status = 'positive';
      status_message = '<i class="icon checkmark"></i> In-Office';
  } else {
      status_message = '<i class="icon close"></i> Unavailable';
  }
    
  // Store Template
  var template = 
    `
    <tr class=" ${status} ">
       <td>
          <img src=" ${record.fields.Image["0"].url} " alt=" ${record.fields['Name']} ">
      </td>
      <td> ${record.fields['Name']} </td>
      <td> ${status_message} </td>
    </tr>
    `;
  
  // Pass/Send Template
  $('#office-hours').append(template);
    
}; 

