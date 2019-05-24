const path = require('path')

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db')

module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://rmjuocwgbvrgjz:68c3f92eccf42496298c0b8f84b6b420574d40e1085b3cf6ea0bc0e9a2b733e5@ec2-75-101-147-226.compute-1.amazonaws.com:5432/d9668ucpp34kon',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  development: {
    client: 'pg',
    connection: 'postgres://rmjuocwgbvrgjz:68c3f92eccf42496298c0b8f84b6b420574d40e1085b3cf6ea0bc0e9a2b733e5@ec2-75-101-147-226.compute-1.amazonaws.com:5432/d9668ucpp34kon',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
}
