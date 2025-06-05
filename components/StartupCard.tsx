import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    image,
    _id,
    description,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date"> {formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author.name}</p>
          </Link>
          <Link href={`/startups/${_id}`}>
            <h3 className="text-26-semibold">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src="https://avatars.githubusercontent.com/u/149489707?s=400&u=b6f22cd22db581a72fbe39ffb5f5a149e47ee4a3&v=4"
            alt="profile pic"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startups/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <img src={image} alt="card image" className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn bg-black-200" asChild>
          <Link href={`/startups/${_id}`}>
            details
          </Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
