 import profile5 from './profile.json5'
 import profile from './profile.json'


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
  expect(profile5).toEqual(expectedProfile)
});

test("should require json", () => {
  expect(profile).toEqual(expectedProfile)
});
