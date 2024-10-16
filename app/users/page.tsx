import Table from "../components/Table";
import { TableItemProps } from "../types";

export default function Users() {
    const data: TableItemProps[] | null = null;

    return(
        <main>
            <section>
                <h1>Account Holders</h1>
                {
                    data === null ? <p>No Users!</p> : <Table headers={['code','name','city']} data={data} />
                }
            </section>
        </main>
    )
}