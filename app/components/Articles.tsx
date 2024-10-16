import { ArticleItemProps, ArticleProps } from "../types";
import ArticleItem from "./ArticleItem";

export default function Articles({ data }:ArticleProps) {
    return(
        <section className="mx-auto">
            {
                data?.map((article:ArticleItemProps,idx:number) => (
                    <ArticleItem key={idx} {...article} />
                ))
            }
        </section>
    )
}