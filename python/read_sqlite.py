import sqlite3

def checkPerangkat():
    try:
        sqliteConnection = sqlite3.connect('../database/portal-web.db')
        cursor = sqliteConnection.cursor()
        print("Connected to SQLite")
        id = input("Masukkan ID Perangkat : ")
        id = (id, )
        cursor.execute("SELECT * FROM perangkat WHERE id_perangkat=?", id)
        records = cursor.fetchall()        
        cursor.close()
        if len(records):
            return True
        else:
            return False

    except sqlite3.Error as error:
        print("Failed to read data from sqlite table", error)

print(checkPerangkat())