import { createClient } from "@/utils/supabase/server";
import Articles from "../components/Articles";
import Notice from "../components/Notice";

export default async function Page(){
    const supabase = createClient();
    const { data:ArticleItemProps }  = await supabase.from('articles').select(`
        id,title,paragraph`);
    return (
        <main>
            <Notice />
            <h1>All articles</h1>
            {
                ArticleItemProps?.length === 0 ? 
                <h1>No Articles!</h1> : 
                <Articles data={ArticleItemProps} />
            }
        </main>
    )
}