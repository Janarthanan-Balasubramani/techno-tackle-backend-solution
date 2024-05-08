/*
  Warnings:

  - Added the required column `name` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderStatusId" INTEGER NOT NULL,
    "description" TEXT,
    "senderId" INTEGER NOT NULL,
    "recieverId" INTEGER NOT NULL,
    "totalAmount" INTEGER NOT NULL,
    CONSTRAINT "Orders_orderStatusId_fkey" FOREIGN KEY ("orderStatusId") REFERENCES "orderStatus" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Orders_recieverId_fkey" FOREIGN KEY ("recieverId") REFERENCES "RetailGroceryStore" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Orders_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "Store" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Orders" ("createdAt", "description", "id", "orderStatusId", "recieverId", "senderId", "totalAmount") SELECT "createdAt", "description", "id", "orderStatusId", "recieverId", "senderId", "totalAmount" FROM "Orders";
DROP TABLE "Orders";
ALTER TABLE "new_Orders" RENAME TO "Orders";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
