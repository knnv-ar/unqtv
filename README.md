# UNQtv: Netflix clone

Tutorial: https://youtu.be/mqUN4N2q4qY

GitHub: https://github.com/AntonioErdeljac/next-netflix-tutorial

## Stacks

- Next.js
- Prisma
- MongoDB

---

## Timestamps
- 00:00 Intro [DONE]
- 02:05 Environment setup [DONE]
- 08:47 Auth Screen UI [DONE]
- 34:58 NextAuth, Prisma, Mongo Setup [DONE]
- 01:20:39 Google and Github OAuth [DONE]
- 01:33:40 Protecting routes, Profiles screen [DONE]
- 02:00:22 Navbar Component [02:13:07]
- 02:27:13 Billboard Component, Random Movie Endpoint
- 02:46:18 Movie List & Movie Card Components, Movies Endpoint, Cool hover effect
- 03:06:58 Favorites / My List functionality
- 03:29:19 Play Button, Video Player, Single Movie Endpoint
- 03:46:24 Info Modal Component
- 04:09:33 Vercel Deployment

---

## Bash

### Auth Screen UI

Crear un proyecto next.js (correrlo desde powershell para elegir Yes o No desde los cursores):

```sh
npx create-next-app --typescript
```

Ejecutar el proyecto:

```sh
npm run dev
```

Instalar Prisma:

```sh
npm install -D prisma
```

Crear el esquema inicial de Prisma:

```sh
npx prisma init
```

Instalar el paquete PrismaClient:

```sh
npm install @prisma/client
```

### NextAuth, Prisma, Mongo Setup

Instalar el paquete Next Auth (para autenticación desde Next.js):

```sh
npm install next-auth
```

Instalar el paquete bcrypt:

```sh
npm install bcrypt
```

Instalar el paquete types de bcrypt:

```sh
npm i -D @types/bcrypt
```

Instalar el paquete axios:

```sh
npm i axios
```

### Google and Github OAuth

Instalar el paquete axios:

```sh
npm install react-icons
```

Instalar el paquete Prisma-adapter:

```sh
npm install @next-auth/prisma-adapter
```

### Protecting routes, Profiles screen

Instalar SWR:

```sh
npm install swr
```

### Navbar Component



### Billboard Component, Random Movie Endpoint
### Movie List & Movie Card Components, Movies Endpoint, Cool hover effect
### Favorites / My List functionality
### Play Button, Video Player, Single Movie Endpoint
### Info Modal Component
### Vercel Deployment


## Posible errors

### Server selection timeout: No available servers.

- Dinamic IP configuration: [1:46:46]

    - MongoDB cluster > Security > Network Access > + Add IP Address > Allow Access from Anywhere > Confirm

---

## MongoDB Atlas

Cluster: unqtv-test

username: raullacabanne
password: wPxjkbaQvhLib979

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
