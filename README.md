# Monorepo
Made by https://www.tomray.dev/nestjs-nextjs-trpc#monorepo-config-updates-and-dx-tips
# Documentation
TODO:
- [ ] OpenAPI integraion
- [x] API integration
    - [x] Front
    - [x] Back
- [x] Turbo test
- [x] Tsconfig fix
- [x] Dotenv
- [ ] Deploy
- [] JSON query params for front and back https://ts-rest.com/docs/next#json-query-parameters 
- [ ] Update all packages
- [ ] Clerk integrations
- [ ] Github actions CI/CD

- [ ] refactor Next to FSD filesystem
- [ ] refactor Nest
    - [ ] Multi-handler?
## For future release
- [ ] Multiple domains for ClerK? https://clerk.com/docs/advanced-usage/satellite-domains
- [ ] For future release: megarepo?
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