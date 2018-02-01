const api = require('../../../workspace/iceberg-commerce-api/package.json');
const renderer = require('../../../workspace/iceberg-commerce-renderer/package.json');
const ui = require('../../../workspace/iceberg-commerce-ui/package.json');
const elements = require('../../../workspace/iceberg-commerce-elements/package.json');
const db = require('../../../workspace/common/iceberg-commerce-db/package.json');

const deps = Object.assign({}, api.dependencies, renderer.dependencies, ui.dependencies, elements.dependencies, db.dependencies);
const devDeps = Object.assign({}, api.devDependencies, renderer.devDependencies, ui.devDependencies, elements.devDependencies, db.devDependencies);

console.log(`deps`, JSON.stringify(deps));
console.log(`devDeps`, JSON.stringify(devDeps));