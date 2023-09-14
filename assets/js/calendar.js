console.log('calendar working')

// const yaml = require('js-yaml');
// const fs   = require('fs');

// import * as yaml from 'js-yaml';
// import * as fs from 'fs';

// Get document, or throw exception on error
try {
  const doc = jsyaml.load(fs.readFileSync('../../_data/calendar.yml'), 'utf8');
  console.log(doc)
} catch (e) {
  console.log(e);
}