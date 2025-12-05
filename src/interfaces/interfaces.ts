/**
  * Skill interface
  * @property {number} id - The id of the skill
  * @property {string} skill - The name of the skill
  * @property {number} category_id - The id of the category
*/
export interface Skill {
  id: number;
  skill: string;
  category_id: number;
}

/**
  * Category interface
  * @property {number} id - The id of the category
  * @property {string} category - The name of the category
*/
export interface Category {
  id: number;
  category: string;
}

/**
  * Review interface
  * @property {number} id - The id of the review
  * @property {string} name - The name of the reviewer
  * @property {string} source - The source of the review
  * @property {string} sourceLink - The link to the source of the review
  * @property {string} comment - The comment of the review
  * @property {number} rating - The rating of the review
*/
export interface Review {
  id: number;
  name: string;
  source: string;
  sourceLink: string;
  comment: string;
  rating: number;
}

/**
  * Project interface
  * @property {number} id - The id of the project
  * @property {string} title - The title of the project
  * @property {string} description - The description of the project
  * @property {string} thumbnail - The thumbnail of the project
  * @property {string[]} gallery - The gallery of the project
  * @property {Skills[]} skills - The skills of the project
  * @property {string} date - The date of the project
  * @property {string} url - The URL of the project
  * @property {string} slug - The slug of the project
*/
export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  gallery: string[];
  skills: Skill[];
  date: string;
  url: string;
  slug: string;
}

/**
  * Form fields interface
  * @property {string} firstName - The first name of the form
  * @property {string} lastName - The last name of the form
  * @property {string} email - The email of the form
  * @property {string} message - The message of the form
*/
export interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

/**
  * Form errors interface
  * @property {string} firstName - The first name of the form
  * @property {string} lastName - The last name of the form
  * @property {string} email - The email of the form
  * @property {string} message - The message of the form
*/
export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}