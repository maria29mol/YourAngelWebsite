import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type EarlyAccessUser = {
  id?: string;
  email: string;
  country: string;
  age: number;
  gender: string;
  main_pain_point: string;
  created_at?: string;
  updated_at?: string;
};