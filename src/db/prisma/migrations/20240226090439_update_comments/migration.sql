/*
  Warnings:

  - Made the column `nickname` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `introduceOneLine` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Comments" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "nickname" SET NOT NULL,
ALTER COLUMN "introduceOneLine" SET NOT NULL;
