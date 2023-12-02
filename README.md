# Monorepo

## Thanks
Inspired by [tomray.dev](https://www.tomray.dev/nestjs-nextjs-trpc#monorepo-config-updates-and-dx-tips)'s monorepo tutorial

## Motivation

## Features
- OpenAPI integraion
- API integration
- Turborepo
- Tsconfig fix
- [ ] Single dotenv config 
- [ ] Deploy to Railway
- [ ] JSON query params for front and back https://ts-rest.com/docs/next#json-query-parameters 
- [x] Update all packages
- [x] Clerk integrations
- [ ] Github actions CI/CD
- [x] refactor Next to FSD filesystem
- [x] refactor Nest
- [ ] Multi-handler?
## For future release
- [x] Multiple domains for ClerK? https://clerk.com/docs/advanced-usage/satellite-domains
- [ ] NestJS Clerk middleware


# What's included
- Turbo + PNPM monorepo
- Apps
    - Docs
        - Nextra
        - Shadcn/UI UI components
    - server
        - NestJS
        - DrizzleORM with MySQL2 and Planetscale
        - SwaggerUI with OpenAPI integration
        - REST-compatible API with TS-Rest
        - Clerk-based Auth
    - API
        - TS-Rest
        - OpenAPI integration
    - Web
        - NextJS
        - TailwindCSS
        - UI components from Shadcn/UI
        - API from TS-REST
        - FSD Filesystem
        - Clerk-based Auth
- Packages
    - Api
    - UI
    - DB
- Tooling
    - Eslint
    - Typescript
    - TailwindCSS
    - Prettier
- Others
    - ASDF NodeJS
    - Easy deploy to Railways
    - Github Actions CI/CD
    - Dotenv from T3 community