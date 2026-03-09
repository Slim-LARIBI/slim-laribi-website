import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://zdxirxymhurqmyjsuuqi.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkeGlyeHltaHVycW15anN1dXFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NTYzMzAsImV4cCI6MjA4ODUzMjMzMH0.zPMTbCX8fLRDsP34kDvEG4WNe88KwFbgNc1pfX3CsiA'
)