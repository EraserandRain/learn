import os
import sys

# Directory Locations
install_type = ''
ip_addr = ''
ip_addr_ES = '10.101.0.100'
ip_addr_ENV = 'all'
ip_addr_set = False
params = ''
ptpsw_loc = "C:\\Advantest\\PtpSw\\"
pcie_file_loc = ptpsw_loc+"SSD\\PCIE"
install_log_dir = ptpsw_loc+"SysLog\\Install"
run_bash_loc = "C:\cygwin\\bin\\bash.exe"
pcie_file = ''
dpkg_install = '/cygdrive/c/Advantest/PtpSw/Misc/dpkg_install.sh'
check_pcie_ver = '/cygdrive/c/Advantest/PtpSw/Misc/check_pciever.sh'
check_kernel_ver = '/cygdrive/c/Advantest/PtpSw/Misc/check_kernelver.sh'
check_packages = '/cygdrive/c/Advantest/PtpSw/Misc/check_packages.sh'
siteMInfo_file = 'C:\\Advantest\\tp-user\\Install\\SiteMInfo.txt'
check_pcie_ver_status = 0
check_kernel_ver_status = 0
check_dpkg_status = 0
install_all = 1
sm_unreachable_list = []
sm_list = [
    'SM000', 'SM001', 'SM010', 'SM011', 'SM020', 'SM021', 'SM030', 'SM031',
    'SM040', 'SM041', 'SM050', 'SM051', 'SM060', 'SM061', 'SM070', 'SM071',
    'SM080', 'SM081', 'SM090', 'SM091', 'SM100', 'SM101', 'SM110', 'SM111',
    'SM120', 'SM121', 'SM130', 'SM131', 'SM140', 'SM141', 'SM150', 'SM151'
]


class FError(Exception):
    pass


def get_error():
    # Description: Errors
    try:
        raise FError("""
Usage:
    """+sys.argv[0]+""" ES [IPAddress or SiteModuleHostName(s)]
or
    """+sys.argv[0]+""" ENV [IPAddress or SiteModuleHostName(s)]

Install current PCIe in """+pcie_file_loc+""" on the target MPT3000 system
The option ES or ENV signifies the MPT3000 platform to be targeted

ENV option: installs on ENV, HVM, and HES systems
ES option:  installs on ES systems
                """)
    except FError as e:
        print(e)
        exit(0)


def check_cli_args(skip):
    if sys.argv[1] == '':
        get_error()
    elif sys.argv[1] == 'ES':
        install_type = 'ES'
        ip_addr = ip_addr_ES
        sm_list = ip_addr
    elif sys.argv[1] == 'ENV':
        install_type = 'ENV'
        ip_addr = ip_addr_ENV
        if skip >= 0:
            params = sys.argv[1]
        else:
            skip -= 1
    if not params == '':
        ip_addr = params
        ip_addr_set = True
    get_pcie_package()
    pass


def get_pcie_package():
    deb_list = [x for x in os.listdir(pcie_file_loc) if (
        x.find('.deb') != -1) and (x.find('pcie_') != -1)]
    for i in range(0, len(deb_list)):
        pcie_file = deb_list[i]
    if pcie_file == '':
        package_not_found()
    pass


def install_pcie_pkg():
    # Clean up files from previous execution
    pre_log = [
        'check_kernelver_log',
        'check_pciever_log',
        'check_packages_log'
    ]
    for i in range(0, len(pre_log)):
        current_log = install_log_dir+'/'+pre_log[i]
        if os.path.exists(current_log):
            with open(current_log, 'r+') as file:
                file.truncate(0)
    # Push and install current PCIe package
    print('='*50)
    if install_type=='ENV':
        print('Installation system type: Multi-Site')
    else:
        print('Installation system type: '+install_type)
    if ip_addr_set==True:
        print('[Info]: IP address '+ip_addr+' has been set on command line')
    else:
        if os.path.exists(siteMInfo_file):
        

def package_not_found():
    try:
        raise FError(
            '[Error]: PCIe package not found. Has the MPT3000 Software been installed? Exiting...')
    except FError as e:
        print(e)
        go_end()
    pass


def go_end():
    pass


def main():
    # Check command line args
    check_cli_args(1)
    # Check that the pcie package exists
    if os.path.exists(pcie_file):
        install_pcie_pkg()
    else:
        package_not_found()

    pass


# Main
if __name__ == '__main__':
    main()
