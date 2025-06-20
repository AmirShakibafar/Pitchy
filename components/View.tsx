import React from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEW_BY_ID_QUERY } from "@/sanity/lib/queries";


const View = async ({ id }: { id: string }) => {
  const { views } = await client.withConfig({ useCdn: false }).fetch(STARTUP_VIEW_BY_ID_QUERY, { id });
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black"> {views} views</span>
      </p>
    </div>
  );
};

export default View;
