import { defineQuery } from "groq";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current)] | order(created_at desc) {
  _id, 
    image,
    category, 
    author -> {
      _id, 
      name,
      image,
      bio
    }, 
    title, 
    _createdAt, 
    pitch, 
    views,
    slug,
    description
}`);
