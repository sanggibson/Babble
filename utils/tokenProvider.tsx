import { supabase } from "@/app/lib/supabase"

export const tokenProvider = async () => {
    const { data } = await supabase.functions.invoke("stream-token");
    //console.log("token :",data);
    return data.token;
}