import * as report from 'multiple-cucumber-html-reporter'
report.generate({
    jsonDir: './reports/', 
    reportPath: './reports/html/',
    metadata: {
        browser: { name: 'chrome', version: 'latest' },
        device: 'Local test machine',
        platform: { name: 'windows', version: '11' }
    }
});
