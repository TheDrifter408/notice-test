import { Fragment } from "react";
import { ArticleItemProps } from "../types";

export default function ArticleItem({id,title,paragraph}:ArticleItemProps){
    return(
        <Fragment>
            <h2>{title}</h2>
            <article>
                {paragraph}
            </article>
        </Fragment>
    )
}