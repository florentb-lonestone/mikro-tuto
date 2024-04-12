# Mikro-ORM Tuto

## Description

Projet d'exemple simple pour la mise en place de mikro-orm avec PostGreSQL

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# Docker DB
docker-compose up

# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Setup mikro-orm dans un projet NestJS

### Installer les package mikro-orm

```bash
$ pnpm i -s @mikro-orm/core @mikro-orm/nestjs @mikro-orm/postgresql @mikro-orm/reflection
```

### Créer la config de mikro-orm

### update package.json

### Initialisation de la base de données

L'init de l'ORM se fait dans le module orm
