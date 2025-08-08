/*
  # Update age constraints for early access users

  1. Changes
    - Remove age constraint (13-19) to allow any age
    - Keep age as required field but allow broader range

  2. Security
    - Maintain existing RLS policies
    - Keep all other constraints intact
*/

-- Remove the existing age constraint
ALTER TABLE early_access_users DROP CONSTRAINT IF EXISTS early_access_users_age_check;

-- Update the age column to allow any positive age
ALTER TABLE early_access_users ADD CONSTRAINT early_access_users_age_positive CHECK (age > 0 AND age <= 120);