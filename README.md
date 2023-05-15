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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Pro's and Cons on Happykit flags

- Pros:
  = Easily integrates with NextJs
  = Can manage flags thorugh boolean instance on site (https://happykit.dev/Pretzel34/feature-flags/flags/development)
  = Capable of releasing feature flags to defined users
  = Supports rollouts which targets a certain percentage of visitors
  -with this feature can rollout new features to certain percentage of users. Serves two different groups which allows targeted analytics
  = Supports Deploy hooks that trigger during a deployment of the application
  EX: feature is active for developers thorugh flag, when you want everyone to have it simply activate it for everyone
  = Supports server side rendering which allows to grab the falg before the application is loaded
