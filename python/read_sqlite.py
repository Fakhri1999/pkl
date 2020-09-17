import sqlite3

def readSqliteTable():
    try:
        sqliteConnection = sqlite3.connect('../database/portal-web.db')
        cursor = sqliteConnection.cursor()
        print("Connected to SQLite")

        sqlite_select_query = "SELECT * from gateway;"
        cursor.execute(sqlite_select_query)
        records = cursor.fetchall()
        print("Total rows are:  ", len(records))
        # for r in records:
        #     print(r)
        print(records[0][2])

        cursor.close()

    except sqlite3.Error as error:
        print("Failed to read data from sqlite table", error)

readSqliteTable()