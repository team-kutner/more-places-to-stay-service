# Project Name

> Nearby homes and more places to stay module

## Related Projects

  - https://github.com/teamTarly/aquabnb-booking
  - https://github.com/teamTarly/aquabnb-reviews
  - https://github.com/teamTarly/Aquabnb-photos

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

1.  Install Node and MySql
2.  From within root directory, install dependencies:
```sh
npm install
```
3. Go to: /database/config.js file and change the 'user' and 'password' to current MySql configuration on local.
4. From within root directory, create and seed database:
```sh
npm run seed
```
5. From within root directory, build webpack:
```sh
npm run build
```
6. From within root directory, run server:
```sh
npm run start
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- MySQL
- Node

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm run seed
npm run build
npm run start
```



CRUD API
The below URL's should be prefixed with /api/homes/:id

|          Action           |Method|       URL        |
| ------------------------- | ---- | ---------------- |
|Create a new nearby home   |POST  |/nearbyHomes      |
|Get hearby home(s) listings|GET   |/nearbyHomes      |
|Update description of home |UPDATE|/updateDescription|
|Delete a nearby home       |DELETE|/nearbyHomes      |

