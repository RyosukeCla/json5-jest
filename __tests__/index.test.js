const expectedProfile = {
  name: 'json5-jest',
  desc: 'jest json5 transformer',
  auther: {
    name: 'Ryosuke Suzuki',
    github: '@RyosukeCla',
    twitter: '@GentleClarinet'
  }
}

test("should require json5", () => {
  const profile = require('./profile.json5');
  expect(profile).toEqual(expectedProfile)
});

test("should require json", () => {
  const profile = require('./profile.json');
  expect(profile).toEqual(expectedProfile)
});
