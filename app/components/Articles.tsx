import { ArticleItemProps, ArticleProps } from "../types";
import ArticleItem from "./ArticleItem";

export default function Articles({ data }:ArticleProps) {
    return(
        <section>
            {
                data?.map((article:ArticleItemProps,idx:number) => (
                    <ArticleItem key={idx} {...article} />
                ))
            }
        </section>
    )
}