#!/usr/bin/env perl
use strict;
use warnings;
use Time::HiRes qw(gettimeofday tv_interval);

my $isSuccess = 0;
my $version = $isSuccess ? "R7_3":"trunk";

print "version = $version \n";

my $stylusTrunkVer = shift @ARGV;

my ( $configFileName, $pcieVer, $stylusTrunkVerPrefix ) = ( "", "", "" );

my %stylusTrunkVerInfo = (
    "Nixus" => {
        configFileName     => "VS2015configx.xml",
        pcieVer            => "20.04",
        stylusTrunkVerPrefix => "Nixus-RT_"
    },
    "Kamino" => {
        configFileName     => "conf/VS2015config-Kamino.xml",
        pcieVer            => "18.04",
        stylusTrunkVerPrefix => ""
    },
    "Ferrix" => {
        configFileName     => "conf/VS2015config-Ferrix.xml",
        pcieVer            => "20.04",
        stylusTrunkVerPrefix => "Ferrix-"
    }
);

if (exists $stylusTrunkVerInfo{$stylusTrunkVer}) {
    $configFileName = $stylusTrunkVerInfo{$stylusTrunkVer} ->{configFileName};
    $pcieVer = $stylusTrunkVerInfo{$stylusTrunkVer}->{pcieVer};
    $stylusTrunkVerPrefix = $stylusTrunkVerInfo{$stylusTrunkVer} ->{stylusTrunkVerPrefix};
} 

print "stylusTrunkVer = $stylusTrunkVer\n";
print "configFileName = $configFileName\n";
print "pcieVer = $pcieVer\n";
print "stylusTrunkVerPrefix = $stylusTrunkVerPrefix\n";

##############################################################################################





sub sendEmailNotification {
    my ( $buildSuccessStatus, $version, $myDir, $myDateTimeDir ) = @_;

    my $mailClient = "c://cygwin//home//sqa//build//tools//blat.exe";
    my $sqa_pdl    = "\"PDL-SQA\@advantest.com\"";
    my $distro =
"\"jason.wu\@advantest.com,eraserrain.jiang\@ptn.advantest.com,chi.yuan\@advantest.com,tien.pham\@advantest.com,Daniel.tong\@advantest.com,ramin.tawakuli\@advantest.com,jenny.chen\@advantest.com,rebecca.qiu\@advantest.com,Shigeo.CHIYODA\@advantest.com,shruti.sharma\@advantest.com\,joel.ren\@advantest.com\,shanqi_di\@huatek.com\"";
    ###my $cc_list = "\"\"";
    my $distroASI =
"\"jason.wu\@advantest.com,tien.pham\@advantest.com,shunji.tachibana\@advantest.com\"";
    ###my $cc_listASI = "\"\"";

    # DEBUG  - JW 012122
    my $cc_list    = "\"jason.wu\@advantest.com,Junyi.Zhu\@advantest.com\"";
    my $distroASI  = "\"jason.wu\@advantest.com\"";
    my $cc_listASI = "\"jason.wu\@advantest.com\"";

    my $resultText = $isSuccess ? "Successful" : "Failed";
    my $ASIText = $isBuildASI ? " ASI" : "";
    my $subject = "\"$VS2015Dir$ASIText STYLUS_$version-$myDateTimeDir Daily Build $resultText (Build Server: $build_server)\"";

    my $productInstallSetList    = "";
    my $failedInstallersList     = "";
    my $productInstallSetListASI = "";
    my $failedInstallersListASI  = "";
    my $OfllineInstallerPath =
"//gtri-storage1/share/PTP_DAILYBUILD/$myDir/STYLUS_DAILY_$version$myDateTimeDir/OfflineInstaller/OfflineSystem_$version.zip";

    if ( ($isBuildASI) && ( $buildSuccessStatus == 0 ) ) {
        foreach my $productCfg ( keys %{ $installerObj_ASI->{'InstallSets'} } )
        {
            foreach my $productName (
                keys %{ $installerObj_ASI->{'InstallSets'}{$productCfg} } )
            {
                if ( $installerObj_ASI->{'InstallSets'}{$productCfg}
                    {$productName}{'buildresult'} != 0 )
                {
                    my $product = "";
                    if ( $productName eq "MPT3000 SW" ) {
                        $product = "MPT3000 Stylus";
                    }

                    $productInstallSetListASI .=
                      "\n\nASI Product InstallSet: $product\n      "
                      . $installerObj_ASI->{'InstallSets'}{$productCfg}
                      {$productName}{'installSetPath'};
                }
                else {
                    my $product = "";
                    if ( $productName eq "MPT3000 SW" ) {
                        $product = "MPT3000 Stylus";
                    }

                    $failedInstallersListASI .=
                      "\n		ASI Product InstallSet: $product\n";
                }
            }
        }
        if ( $productInstallSetListASI ne "" ) {
            $productInstallSetListASI =
                "\n==============================================="
              . $productInstallSetListASI
              . "\n===============================================\n";
        }

        if ( $failedInstallersListASI ne "" ) {
            $productInstallSetListASI .=
              "\nBuild Failed:\n$failedInstallersListASI";
        }

    }

    if ( $buildSuccessStatus == 0 ) {
        foreach my $productCfg ( keys %{ $installerObj->{'InstallSets'} } ) {
            foreach my $productName (
                keys %{ $installerObj->{'InstallSets'}{$productCfg} } )
            {
                if ( $installerObj->{'InstallSets'}{$productCfg}{$productName}
                    {'buildresult'} != 0 )
                {
                    my $product = "";
                    if ( $productName eq "MPT3000 SW" ) {
                        $product = "MPT3000 Stylus";
                        $productInstallSetList =
                          "\n\nProduct InstallSet: $product\n      "
                          . $installerObj->{'InstallSets'}{$productCfg}
                          {$productName}{'installSetPath'}
                          . $productInstallSetList;
                        $productInstallSetList .=
"\n\nProduct InstallSet: MPT3000 Offline System\n      $OfllineInstallerPath"
                          if ( defined( $config{'install'}{'offlineDir'} ) );
                    }

                    if ( $productCfg eq "MPT3000SWPlugins_SG" ) {
                        $product = "$productName ( *Seagate* )";
                        $productInstallSetList .=
                          "\n\nProduct InstallSet: $product\n      "
                          . $installerObj->{'InstallSets'}{$productCfg}
                          {$productName}{'installSetPath'};
                    }
                    elsif ( $productCfg eq "MPT3000SWPlugins" ) {
                        $product = "$productName ( *SanDisk and Seagate* )";
                        $productInstallSetList .=
                          "\n\nProduct InstallSet: $product\n      "
                          . $installerObj->{'InstallSets'}{$productCfg}
                          {$productName}{'installSetPath'};
                    }

                }
                else {
                    my $product = "";
                    if ( $productName eq "MPT3000 SW" ) {
                        $product = "MPT3000 Stylus";
                    }

                    if ( $productCfg eq "MPT3000SWPlugins_SG" ) {
                        $product = "$productName ( *Seagate* )";
                    }
                    elsif ( $productCfg eq "MPT3000SWPlugins" ) {
                        $product = "$productName ( *SanDisk and Seagate* )";
                    }

                    $failedInstallersList .=
                      "\n		Product InstallSet: $product\n";
                }
            }
        }
        if ( $productInstallSetList ne "" ) {
            $productInstallSetList =
                "\n==============================================="
              . $productInstallSetList
              . "\n===============================================\n";
        }

        if ( $failedInstallersList ne "" ) {
            $productInstallSetList .= "\nBuild Failed:\n$failedInstallersList";
        }

        my $notify_message_body =gen_emailBody( $version, $myDir, $myDateTimeDir, 0,$productInstallSetList, 1 );
        # with "-Cc $cc_list", if need to reinstate
        system("$mailClient -s  $subject_success -f $sqa_pdl -i $sqa_pdl -to $distro -body $notify_message_body");

        if ($isBuildASI) {
            my $notify_message_body =gen_emailBody( $version, $myDir, $myDateTimeDir, $isBuildASI,$productInstallSetListASI, 1 );
            system("$mailClient -s $subject_success_ASI -f $sqa_pdl -i $sqa_pdl -to $distroASI -body $notify_message_body"
            );
        }
    }
    else {
        my $notify_message_body =gen_emailBody( $version, $myDir, $myDateTimeDir, 0,$productInstallSetList, 0 );
        system("$mailClient -s $subject_fail -f $sqa_pdl -i $sqa_pdl -to $distro -body $notify_message_body");

        if ($isBuildASI) {
            my $notify_message_body =gen_emailBody( $version, $myDir, $myDateTimeDir, $isBuildASI,$productInstallSetListASI, 0 );
            system("$mailClient -s $subject_fail_ASI -f $sqa_pdl -i $sqa_pdl -to $distroASI -body $notify_message_body");
        }
    }
    sleep(4);

}

my ($is_success, $is_asi) = @_;
my $subject = $is_success ? ($is_asi ? $subject_success_ASI : $subject_success)
                              : ($is_asi ? $subject_fail_ASI     : $subject_fail);
my $distro = $is_asi ? $distroASI : $distro;
my $product_install_set_list = $is_asi ? $productInstallSetListASI : $productInstallSetList;

my $notify_message_body = gen_emailBody($version, $myDir, $myDateTimeDir, $isBuildASI, $product_install_set_list, $is_success);
system("$mailClient -s $subject -f $sqa_pdl -i $sqa_pdl -to $distro -body $notify_message_body");

if ($success) {
    send_notification(1, 0);
    send_notification(1, $isBuildASI) if $isBuildASI;
} else {
    send_notification(0, 0);
    send_notification(0, $isBuildASI) if $isBuildASI;
}
