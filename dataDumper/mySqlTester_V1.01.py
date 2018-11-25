import pymysql.cursors

connection = pymysql.connect(host='127.0.0.1',
                             user='root',
                             password='',
                             db='iotprojectv2',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

try:
    with connection.cursor() as cursor:
        sql = "INSERT INTO `demo_data` (`id`, `data`, `time`) VALUES (NULL, '45445', CURRENT_TIMESTAMP), (NULL, %s, CURRENT_TIMESTAMP)"
        cursor.execute(sql, '@python.org')
    connection.commit()


finally:
    connection.close()
