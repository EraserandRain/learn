#!/usr/bin/env python3
import pymysql
import shutil
import os
import fileinput
import sys
import re
import yaml


def set_version():
    if (len(sys.argv) != 2):
        try:
            raise FError("""
Usage:       python3 """+sys.argv[0]+""" [version]
Description: Init database settings in a new branch 
Option:      Branch Vesion
        """)
        except FError as e:
            print(e)
            exit(0)
    else:
        return sys.argv[1]


def db_config(db_file):
    with open(db_file, 'r', encoding="utf-8") as f:
        config = f.read()
    return yaml.load(config, Loader=yaml.FullLoader)

version = set_version()
db_info = db_config('db.yaml')
db = pymysql.connect(
    host=db_info.get('host'),
    port=db_info.get('port'),
    user=db_info.get('user'),
    passwd=db_info.get('passwd'),
    db=db_info.get('db'),
    charset=db_info.get('charset')
)
cursor = db.cursor()

class FError(Exception):
    pass


def exec_sql(sql):
    try:
        sql = re.sub(r'\t', '', sql)
        print("SQL: "+sql)
        cursor.execute(sql)
        db.commit()
        print("")
    except:
        db.rollback()
    pass


def select_data(sql):
    try:
        cursor.execute(sql)
        return "%s" % cursor.fetchone()
    except:
        print("Error: Unable to fetch data")
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


def source_sql_file(sql_file):
    for line in open(sql_file):
        exec_sql(line)
    pass


def init_sql_file(chosen_sql_file, old_str, new_str):
    """
    Description: Replace contents in sql file
    """
    for line in fileinput.input(chosen_sql_file, inplace=1):
        line = line.replace(old_str, new_str)
        print(line, end="")
    pass


def prepare_sql(version):

    # create sql files if not exists
    if not os.path.exists("./branch/"+version):
        shutil.copytree("./branch/version", "./branch/"+version)
    os.chdir('./branch/'+version)
    init_sql_file('init_build_config.sql', 'version', version)

    # init build_config table
    exist_branch = select_data(
        "select id from build_config where branch = '"+version+"'")
    if exist_branch == 'None':
        source_sql_file('init_build_config.sql')
    init_sql_file('Stylus.sql', 'stylus_id',
                  get_build_config_id('stylus_id', version))
    init_sql_file('StylusPlugins.sql', 'stylus_plugins_id',
                  get_build_config_id('stylus_plugins_id', version))
    init_sql_file('StylusPlugins_SG.sql', 'stylus_plugins_sg_id',
                  get_build_config_id('stylus_plugins_sg_id', version))
    pass


def main():
    prepare_sql(version)
    source_sql_file('Stylus.sql')
    source_sql_file('StylusPlugins.sql')
    source_sql_file('StylusPlugins_SG.sql')
    db.close()
    pass


if __name__ == '__main__':
    main()
