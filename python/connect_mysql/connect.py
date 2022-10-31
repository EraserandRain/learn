#!/usr/bin/env python3
import pymysql
import shutil
import os
import fileinput
db = pymysql.connect(
    host='127.0.0.1',
    port=int('3306'),
    user='root',
    passwd='mysql57',
    db='testenv',
    charset='utf8'
)
cursor = db.cursor()


def exec_sql(sql):
    try:
        sql = sql.replace("\t", "")
        print("SQL: "+sql)
        cursor.execute(sql)
        db.commit()
    except:
        db.rollback()
    pass


def prepare_sql(branch_version):
    shutil.copytree("./branch/version", "./branch/"+branch_version)
    os.chdir('./branch/'+branch_version)
    init_sql_file('init_build_config.sql', 'version', branch_version)
    exist_branch = select_data(
        "select id from build_config where branch = '"+branch_version+"'")
    if exist_branch == 'None':
    else:
       

    init_sql_file('Stylus.sql', 'stylus_id',
                  get_build_config_id('stylus_id', branch_version))
    init_sql_file('StylusPlugins.sql', 'stylus_plugins_id',
                  get_build_config_id('stylus_plugins_id', branch_version))
    init_sql_file('StylusPlugins_SG.sql', 'stylus_plugins_sg_id',
                  get_build_config_id('stylus_plugins_sg_id', branch_version))
    pass


def init_sql_file(chosen_sql_file, old_str, new_str):
    # Description: Replace contents in sql file
    for line in fileinput.input(chosen_sql_file, inplace=1):
        line = line.replace(old_str, new_str)
        print(line, end="")
    pass


class FError(Exception):
    pass


def get_build_config_id(msg, version):
    if msg == 'stylus_id':
        return select_data("""select id from build_config where title = 'STYLUS_DAILY_"""+version+"""'""")
    elif msg == 'stylus_plugins_id':
        return select_data("""select id from build_config where title = 'STYLUS_PLUGINS_DAILY_"""+version+"""'""")
    elif msg == 'stylus_plugins_sg_id':
        return select_data("""select id from build_config where title = 'STYLUS_PLUGINS_SG_DAILY_"""+version+"""'""")
    else:
        try:
            raise FError("Wrong Message!")
        except FError as e:
            print(e)
    pass


def select_data(sql):
    try:
        cursor.execute(sql)
        return "%s" % cursor.fetchone()
    except:
        print("Error: Unable to fetch data")


if __name__ == '__main__':
    version = "R7_0"
    # prepare_sql(version)


db.close()
