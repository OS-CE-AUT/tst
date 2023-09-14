console.log('calendar working')

// const yaml = require('js-yaml');
// const fs   = require('fs');

// import * as yaml from 'js-yaml';
// import * as fs from 'fs';

// Get document, or throw exception on error
// try {
//   const doc = jsyaml?.load(fs?.readFileSync('../../_data/calendar.yml'), 'utf8');
//   console.log(doc)
// } catch (e) {
//   console.log(e);
// }

fetch('../../_data/calendar.yml')
  .then(response => {response.text(); console.log(response)})
  .then(yamlData => {
    // Parse the YAML data
    const doc = jsyaml.load(yamlData);

    // Now you can work with the parsed YAML data
    console.log(yamlData, doc);
  })
  .catch(error => {
    console.error('Error fetching YAML data:', error);
  });
