import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Personal Finance",
    categoryIMG:"https://cdn.corporatefinanceinstitute.com/assets/finance-definition.jpg",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
  },
  {
    _id: uuid(),
    categoryName: "Geopolitics",
    categoryIMG:"https://t3.ftcdn.net/jpg/00/66/79/48/360_F_66794862_OeoQv7Jd2iZBS3ajJW2LMlypskm7dStr.jpg",
    description:
      "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application",
  },
  {
    _id: uuid(),
    categoryName: "Psychology",
    categoryIMG:"https://rscil.com/wp-content/uploads/2020/05/Psychology-word-cloud.jpg",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  },
  {
    _id: uuid(),
    categoryName: "Taxes",
    categoryIMG:"https://uknow.uky.edu/sites/default/files/styles/uknow_story_image/public/pexels-karolina-grabowska-4386367.jpg",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  },
  {
    _id: uuid(),
    categoryName: "Investment",
    categoryIMG:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhEbuB9CDC2QYgTwXUsZ_4T7aqyyqlJf2xwGQ5G7OCapuHg0-E8l5M3iYEGrqabUywB0&usqp=CAU",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  }
];
