module.exports = {
  name: 'example-ng-jsonplaceholder',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/example-ng-jsonplaceholder',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
