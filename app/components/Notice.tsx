'use client';

import { Fragment, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { off } from "process";
export default function Notice(){
    const supabase = createClient();
    const[notice,setNotice] = useState('');
    
    useEffect(() =>{
        //create client channel
        const channel = supabase.channel('realtime notices').on('postgres_changes',{
            event:'INSERT',
            schema:'public',table:'authors'
        },(payload) => {
            setNotice(payload.new.full_name);
        }).subscribe();

        return () => {
            supabase.removeChannel(channel);
        }

    },[supabase]);
    return(
        <Fragment>
            {
            notice.length === 0 ?
            '' :
            <h2 className="border-2 border-red-500">
                <span className="text-3xl">{notice} is our new Author!</span>
            </h2>
            }
        </Fragment>
    )
}