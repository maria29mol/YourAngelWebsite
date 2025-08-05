/*
  # Create early access users table

  1. New Tables
    - `early_access_users`
      - `id` (uuid, primary key)
      - `email` (text, unique, required)
      - `country` (text, required)
      - `age` (integer, required)
      - `gender` (text, required)
      - `main_pain_point` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `early_access_users` table
    - Add policy for public insert access (for form submissions)
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS early_access_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  country text NOT NULL,
  age integer NOT NULL CHECK (age >= 13 AND age <= 19),
  gender text NOT NULL,
  main_pain_point text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE early_access_users ENABLE ROW LEVEL SECURITY;

-- Allow public insert for form submissions
CREATE POLICY "Allow public insert for early access"
  ON early_access_users
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read their own data
CREATE POLICY "Users can read own data"
  ON early_access_users
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_early_access_users_updated_at
  BEFORE UPDATE ON early_access_users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();