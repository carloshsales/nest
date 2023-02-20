/*
  Warnings:

  - You are about to drop the `games` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profiles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Live" DROP CONSTRAINT "Live_game_Id_fkey";

-- DropForeignKey
ALTER TABLE "Live" DROP CONSTRAINT "Live_profile_Id_fkey";

-- DropForeignKey
ALTER TABLE "_GameToProfile" DROP CONSTRAINT "_GameToProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "_GameToProfile" DROP CONSTRAINT "_GameToProfile_B_fkey";

-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_userId_fkey";

-- DropTable
DROP TABLE "games";

-- DropTable
DROP TABLE "profiles";

-- CreateTable
CREATE TABLE "game" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "coverImageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "imdbScore" INTEGER NOT NULL,
    "trailerYouTubeUrl" TEXT NOT NULL,
    "gameplayYouTubeUrl" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "game_id_key" ON "game"("id");

-- CreateIndex
CREATE UNIQUE INDEX "profile_id_key" ON "profile"("id");

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Live" ADD CONSTRAINT "Live_profile_Id_fkey" FOREIGN KEY ("profile_Id") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Live" ADD CONSTRAINT "Live_game_Id_fkey" FOREIGN KEY ("game_Id") REFERENCES "game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToProfile" ADD CONSTRAINT "_GameToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameToProfile" ADD CONSTRAINT "_GameToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
