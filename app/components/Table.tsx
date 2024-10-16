import { TableItemProps, TableProps } from "../types";
import Item from "./Item";

export default function Table({ headers, data}:TableProps){

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        {
                            headers.map((header:string,idx:number) => (
                                <th key={idx}>{header}</th>
                            ))
                        }
                    </tr>
                    <tbody>
                        {
                            data.map((item:TableItemProps) => (
                                <Item key={item.id} {...item} />
                            ))
                        }
                    </tbody>
                </thead>
            </table>
        </div>   
    )
    
}