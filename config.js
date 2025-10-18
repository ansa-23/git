import {createClient}  from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const url = "https://qqzfmykpravbdqajvfih.supabase.co"

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxemZteWtwcmF2YmRxYWp2ZmloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMTk0NTgsImV4cCI6MjA3NTc5NTQ1OH0.RSBEpG4kHx655iPEcp7FFIDUHSOF_CaiBCaFA331NqE"

const supa = createClient(url,key)

export default supa;