import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tngppriowlegdudcaqyb.supabase.co/";
const supabasePublishableKey = "sb_publishable_pmbIHM1y5nEPQgVPVWGdbg_8YVdprgB";

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
