/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockReportDataSchema';
import fs from 'fs';
import chalk from 'chalk';


const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/reports.json", json, function (err) {
  if(err){
    return console.log(chalk.red(err));
  } else {
    return console.log(chalk.green("Mock data generated."));
  }
});
