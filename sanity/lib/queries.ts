import { defineQuery } from "groq";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || category match $search || title match $search  || author->name match $search] | order(created_at desc) {
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
    views,
    slug,
    description
}`);

export const STARTUP_BY_ID_QUERY =
  defineQuery(`*[_type == "startup" && _id == $id][0] {
  _id, 
    image,
    category, 
    author -> {
      _id, 
      name,
      username,
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
