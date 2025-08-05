/*
  # Update early access users table

  1. Changes
    - Add `how_did_you_hear` column for tracking user acquisition
    - Make `main_pain_point` required (remove default empty string)
  
  2. Security
    - Maintain existing RLS policies
    - Keep age constraints (13-19)
*/

-- Add how_did_you_hear column
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'early_access_users' AND column_name = 'how_did_you_hear'
  ) THEN
    ALTER TABLE early_access_users ADD COLUMN how_did_you_hear text NOT NULL DEFAULT '';
  END IF;
END $$;

-- Remove default from main_pain_point to make it required
ALTER TABLE early_access_users ALTER COLUMN main_pain_point DROP DEFAULT;
ALTER TABLE early_access_users ALTER COLUMN main_pain_point SET NOT NULL;