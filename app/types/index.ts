export type ArticleItemProps = {
    id:string,
    title:string,
    paragraph:string
}

export type ArticleProps = {
    data:ArticleItemProps[] | null
}

export type TableItemProps = {
    id:string,
    full_name:string,
}
export type TableProps = {
    headers:string[],
    data: TableItemProps[]
}