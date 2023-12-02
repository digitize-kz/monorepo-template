Hi there! 
I cannot import my own package from monorepo with name: `@taskbounty-app/api` to NestJS server.

The error is:
```
Error: No "exports" main defined in /home/indicozy/Documents/Projects/taskbounty-app/apps/server/node_modules/@taskbounty-app/api/package.json
    at exportsNotFound (node:internal/modules/esm/resolve:294:10)
    at packageExportsResolve (node:internal/modules/esm/resolve:584:13)
    at resolveExports (node:internal/modules/cjs/loader:591:36)
    at Function.Module._findPath (node:internal/modules/cjs/loader:668:31)
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:1130:27)
    at Function.Module._load (node:internal/modules/cjs/loader:985:27)
    at Module.require (node:internal/modules/cjs/loader:1235:19)
    at require (node:internal/modules/helpers:176:18)
    at Object.<anonymous> (/home/indicozy/Documents/Projects/taskbounty-app/apps/server/src/main.ts:5:1)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
```
`@taskbounty-app/api`'s `package.json`:
```
  "main": "dist/index.js",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    },
    "./package.json": "./package.json"
  },
```

`tsconfig.json`
```
{
  "extends": "@taskbounty-app/tsconfig/base.json",
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    },
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```
`@taskbounty-app/tsconfig/base.json`:
```
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Default",
  "compilerOptions": {
    "composite": false,
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "inlineSources": false,
    "isolatedModules": true,
    "moduleResolution": "Node16",
    "target": "ES2022",
    "module": "Node16",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "sourceMap": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "preserveWatchOutput": true,
    "skipLibCheck": true,
    "strict": true,
    "strictNullChecks": true,
    "incremental": true,
    "noImplicitAny": true,
    "strictBindCallApply": true,
    "noFallthroughCasesInSwitch": true
  },
  "exclude": ["node_modules"]
}
```

What am I doing wrong?