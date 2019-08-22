import { parse, stringify, FirstLevelDependency } from '@yarnpkg/lockfile';

function testFirstLevelDependency(obj: FirstLevelDependency) {}

function isFirstLevelDependency(
  obj: FirstLevelDependency | {},
): obj is FirstLevelDependency {
  return 'version' in obj;
}

const file = '';
const parseResult = parse(file);
const fileAgain = stringify(parseResult);
fileAgain.toLowerCase();

if (parseResult.type === 'merge' || parseResult.type === 'success') {
  Object.keys(parseResult.object).forEach(k => {
    const value = parseResult.object[k];
    if (isFirstLevelDependency(value)) {
      testFirstLevelDependency(value);
    }
  });
}
