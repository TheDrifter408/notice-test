import { Fragment } from "react";
import { ArticleItemProps } from "../types";

export default function ArticleItem({id,title,paragraph}:ArticleItemProps){
    return(
        <div className="w-[90%] rounded-lg">
            <h2 className="capitalize text-xl">{title}</h2>
            <article>
                <p className="text-pretty my-2">{paragraph}</p>
            </article>
        </div>
    )
}