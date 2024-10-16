import { createClient } from "@/utils/supabase/server";
import Articles from "../components/Articles";
import Notice from "../components/Notice";

export default async function Page(){
    const supabase = createClient();
    const { data:ArticleItemProps }  = await supabase.from('articles').select(`
        id,title,paragraph`);
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <Notice />
            <h1 className="text-2xl w-fit mx-auto">All articles</h1>
            {
                ArticleItemProps?.length === 0 ? 
                <h1>No Articles!</h1> : 
                <Articles data={ArticleItemProps} />
            }
        </main>
    )
}