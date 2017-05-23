

// https://raw.githubusercontent.com/Airtable/airtable.js/master/build/airtable.browser .js

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
      // console.log('Retrieved', record.get('Name'));
      console.log( record.fields['In Office'] );
      
      // Display Data or show template
        
        showOfficeHours = (record); 


    });
});

// Show Office data
var showOfficeHours = function( record ) {
    //store template
    console.log( record );
    
    var template = 
`<tr class="">
<td><img src="" alt=""></td>
<td> ${records.field['Name']} </td>
<td><i class="icon checkmark"></i>Available</td>
</tr>
`
    //send template
    
    
};
