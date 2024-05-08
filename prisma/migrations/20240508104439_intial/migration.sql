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
    "totalAmount" INTEGER,
    CONSTRAINT "Orders_orderStatusId_fkey" FOREIGN KEY ("orderStatusId") REFERENCES "orderStatus" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Orders_recieverId_fkey" FOREIGN KEY ("recieverId") REFERENCES "RetailGroceryStore" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Orders_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "Store" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Orders" ("createdAt", "description", "id", "name", "orderStatusId", "recieverId", "senderId", "totalAmount") SELECT "createdAt", "description", "id", "name", "orderStatusId", "recieverId", "senderId", "totalAmount" FROM "Orders";
DROP TABLE "Orders";
ALTER TABLE "new_Orders" RENAME TO "Orders";
CREATE TABLE "new_OrderDetails" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "orderId" INTEGER,
    "orderQuantity" INTEGER NOT NULL,
    "return" INTEGER,
    "stock" INTEGER NOT NULL,
    CONSTRAINT "OrderDetails_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "OrderDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OrderDetails" ("id", "orderId", "orderQuantity", "productId", "return", "stock") SELECT "id", "orderId", "orderQuantity", "productId", "return", "stock" FROM "OrderDetails";
DROP TABLE "OrderDetails";
ALTER TABLE "new_OrderDetails" RENAME TO "OrderDetails";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
