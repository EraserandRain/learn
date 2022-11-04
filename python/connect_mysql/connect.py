#!/usr/bin/env python3
import pymysql
import shutil
import os
import fileinput
import sys
import re

def prepare_sql(db, version):
    def exec_sql(sql):
        try:
            sql = sql.replace("\t", "")
            print("SQL: "+sql)
            cursor.execute(sql)
            db.commit()
        except:
            db.rollback()
    pass
    
    def source_sql_file(sql_file):
        for line in open(sql_file):
            exec_sql(line)
        pass
    cursor=db.cursor
    # create sql files if not exists
    if not os.path.exists("./branch/"+version):
        shutil.copytree("./branch/version", "./branch/"+version)
    os.chdir('./branch/'+version)
    init_sql_file('init_build_config.sql', 'version', version)

    # test
    source_sql_file('init_build_config.sql')
    exit(0)


    exist_branch = select_data(
        "select id from build_config where branch = '"+version+"'")
    if exist_branch == 'None':
        print('halo')
    else:
        init_sql_file('Stylus.sql', 'stylus_id',
                      get_build_config_id('stylus_id', version))
        init_sql_file('StylusPlugins.sql', 'stylus_plugins_id',
                      get_build_config_id('stylus_plugins_id', version))
        init_sql_file('StylusPlugins_SG.sql', 'stylus_plugins_sg_id',
                      get_build_config_id('stylus_plugins_sg_id', version))
    pass


def init_sql_file(chosen_sql_file, old_str, new_str):
    """
    Description: Replace contents in sql file
    """
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
    pass


def set_version():
    if (len(sys.argv) != 2):
        try:
            raise FError("""
Description: Init database settings in a new branch 
Usage:       python3 """+sys.argv[0]+""" [version]
Option:      Branch Vesion
        """)
        except FError as e:
            print(e)
            exit(0)
    else:
        return sys.argv[1]


def main():
    version = set_version()
    mysql_host = '127.0.0.1'
    mysql_port = 3306
    mysql_user = 'root'
    mysql_passwd = 'mysql57'
    mysql_db = 'testenv'
    db = pymysql.connect(
        host=mysql_host,
        port=mysql_port,
        user=mysql_user,
        passwd=mysql_passwd,
        db=mysql_db,
        charset='utf8'
    )
    prepare_sql(db,version)

    db.close()
    pass


if __name__ == '__main__':
    main()
