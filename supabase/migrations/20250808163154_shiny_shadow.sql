/*
  # Fix duplicate constraint error

  1. Changes
    - Remove duplicate age constraint if it exists
    - Add constraint only if it doesn't already exist
    - Ensure table structure is correct without conflicts

  2. Safety
    - Uses IF NOT EXISTS pattern to prevent duplicate constraint errors
    - Handles existing constraint gracefully
*/

-- First, drop the constraint if it exists to avoid conflicts
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'early_access_users_age_positive' 
    AND table_name = 'early_access_users'
  ) THEN
    ALTER TABLE early_access_users DROP CONSTRAINT early_access_users_age_positive;
  END IF;
END $$;

-- Now add the constraint back
ALTER TABLE early_access_users 
ADD CONSTRAINT early_access_users_age_positive 
CHECK ((age > 0) AND (age <= 120));