import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rlcobudoqycslohymlud.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsY29idWRvcXljc2xvaHltbHVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5Nzg5NjMsImV4cCI6MjAyODU1NDk2M30.mwfehlHZ4bpwnqIjA6JKeHFUs8zSMsxPcP_a_zidwuk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
