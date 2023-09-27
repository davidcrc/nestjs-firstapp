# Config

- This project was created using pnpm

- just for fisrt time

```bash
pnpm i @nestjs/cli g
```

create project

```bash
nest new nestjs-firstapp
```

# Create module, controller and service

```bash
nest generate module tasks
```

```bash
nest generate controller tasks
```

```bash
nest g service tasks
```

## Add UUID

```bash
pnpm i uuid
```

```bash
pnpm i --save-dev @types/uuid
```

## Add validator

```bash
pnpm i class-validator class-transformer
```

- add in main.ts

```ts
app.useGlobalPipes(new ValidationPipe());
```
