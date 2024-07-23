// import brand from "../../assets/brand/brand1.png";
import dice from "../../assets/Dice/Dice.png";
// import expand from "../../assets/expand/expand1.png";
import libray from "../../assets/library/library.png";
import recipe from "../../assets/recipe/recipe1.png";



export const projectsData = [
  {
    title: "Full-stack Library-Management app",
    link: "https://mern-library-management.vercel.app/",
    repo: "https://github.com/suryamani752/library-management",
    subtitle:
      "React | Next.JS 13 | TypeScript | TailwindCSS | MongoDB with Mongoose ODM",
    category: "coding",
    description:
      "This project is a clone of the popular Threads App (META's Twitter). It includes features such as creating threads, replying, view activity, search users, create communities and invite users as well as user/community profiles.",
    images: [libray],
  },
  {
    title: "Dice Game - React Js",
    link: "https://reactproject-3-dicegame.netlify.app/",
    repo: "https://github.com/suryamani752/ReactProject-3-DiceGame",
    subtitle: "Next.js 13 App Router | React | TailwindCSS | Shadcn",
    category: "coding",
    description:
      "This project is a fully functioning E-commerce Store with Stripe webhooks. It includes features such as featured products in homepage, different categories, preview product card, product page with color and size filters, related items.",
    images: [dice],
  },

  {
    title: "Recipe Finder - Full Stack Application",
    link: "https://recipe-finder-client-wheat.vercel.app/",
    repo: "https://github.com/suryamani752/recipe-finder-client",
    subtitle:
      "Next.js 13 App Router | React | TailwindCSS | MySQL with Prisma ORM",
    category: "coding",
    description:
      "This project is a Full Stack Next.js 13 Admin Dashboard & CMS for E-Commerce Store with Clerk authentication, Data validation with Zod and Cloudinary file uploads. It includes features such as multiple stores, billboards per category, sizes/colors/products, archive/feature product function, orders page with payment status, API calls for billboards, categories, sizes, colors, products, light/dark mode.",
    images: [recipe],
  },
];

export const projectsNav = [
  {
    name: "coding",
  },
  {
    name: "design",
  },
  {
    name: "all",
  },
];
