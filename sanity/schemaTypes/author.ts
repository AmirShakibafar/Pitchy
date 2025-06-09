import { UserIcon } from "lucide-react";
import { defineType,  defineField} from "sanity";

export const author = defineType({
  name: "author",
  type: "document",
  title: "Author",
  icon: UserIcon,
  fields: [
    defineField({
        name: "id",
        type: "number",
    }),
    defineField({
        name: "name",
        type: "string",
    }),
    defineField({
        name: "username",
        type: "string",
    }),
    defineField({
        name: "email",
        type: "string",
    }),
    defineField({
        name: "image",
        type: "url",
    }), 
    defineField({
        name: "bio",
        type: "text",
    }), 
  ],
  preview: {
    select : {
      title: "name"
    }
  }
});
