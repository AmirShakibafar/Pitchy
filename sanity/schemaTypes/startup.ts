import { defineType,  defineField} from "sanity";
import {rule} from "postcss";

export const startup = defineType({
    name: "startup",
    type: "document",
    title: "Startup",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title"
            }
        }),
        defineField({
            name: "author",
            type: "reference",
            to:  {type: "author"},
        }),
        defineField({
            name: "veiws",
            type: "number",
        }),
        defineField({
            name: "description",
            type: "text",
        }),
        defineField({
            name: "category",
            type: "text",
            validation: (Rule) => Rule.min(1).max(20).required().error("please enter a category"),
        }),
        defineField({
            name: "image",
            type: "url",
            validation: (Rule) => Rule.required().error("please enter a image"),
        }),
        defineField({
            name: "pitch",
            type: "markdown",
        }),
    ]
});
