import { TableItemProps } from "../types";

export default function Item({ id,full_name}:TableItemProps){
    return (
        <tr>
           <td>{id}</td> 
           <td>{full_name}</td>  
        </tr>
    )
}