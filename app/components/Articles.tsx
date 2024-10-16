import { ArticleItemProps, ArticleProps } from "../types";
import ArticleItem from "./ArticleItem";

export default function Articles({ data }:ArticleProps) {
    return(
        <section className="mx-auto border border-black">
            {
                data?.map((article:ArticleItemProps,idx:number) => (
                    <ArticleItem key={idx} {...article} />
                ))
            }
        </section>
    )
}