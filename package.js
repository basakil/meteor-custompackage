Package.describe({
  name: 'aob:custompackage',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Demo meteor package...',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/basakil/meteor-custompackage.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('custompackage.js', 'client');
  api.addFiles('custompackage-server.js', 'server');

  if (api.export){
    api.export('CustomPackage');
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('aob:custompackage');
  api.addFiles('custompackage-tests.js');
});

Npm.depends({
    "colors": "0.6.2"
});