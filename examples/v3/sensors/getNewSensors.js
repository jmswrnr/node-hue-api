'use strict';

const v3 = require('../../../index').v3;
// If using this code outside of this library the above should be replaced with
// const v3 = require('node-hue-api').v3;

// Replace this with your username for accessing the bridge
const USERNAME = require('../../../test/support/testValues').username;

v3.discovery.nupnpSearch()
  .then(searchResults => {
    const host = searchResults[0].ipaddress;
    return v3.api.create(host, USERNAME);
  })
  .then(api => {
    return api.sensors.getNew();
  })
  .then(result => {
    // Show the time of the last scan
    console.log(`Last Scan Performed: ${result.lastscan}`);
    // Display the new sensors
    console.log(`Sensors found:\n${JSON.stringify(result.sensors, null, 2)}`);
  })
;
