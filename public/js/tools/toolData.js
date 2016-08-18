(function () {
    "use strict";
    angular.module("hthApp").controller("toolData", function ($scope) {
        $scope.tools = [
            {
                name: "Admin Control Panel Finder",
                url: "http://packetstormsecurity.com/files/92222/Admin-Control-Panel-Finder-2.0.html",
                description: "A perl script that scans web servers for administrative login and control panel sections."
            },
            {
                name: "Aircrack-ng",
                url: "http://www.aircrack-ng.org/",
                description: "A802.11 WEP and WPA-PSK keys cracking program."
            },
            {
                name: "cintruder",
                url: "http://cintruder.sourceforge.net/",
                description: "An automatic pentesting tool to bypass captchas."
            },
            {
                name: "cmsexplore",
                url: "https://code.google.com/p/cms-explorer",
                description: "Is designed to reveal the the specific modules, plugins, components and themes that various CMS driven web sites are running."
            },
            {
                name: "darkd0rk3r",
                url: "https://archassault.org/packages/archassault/any/darkd0rk3r",
                description: "A python script that performs dork searching and searches for local file inclusion and SQL injection errors."
            },
            {
                name: "dsniff",
                url: "http://www.monkey.org/~dugsong/dsniff",
                description: "Is a collection of tools for network auditing and penetration testing."
            },
            {
                name: "fierce",
                url: "https://github.com/AnonSatan/fierce",
                description: "A DNS enumerator written in perl."
            },
            {
                name: "oclHashcat",
                url: "http://hashcat.net/oclhashcat",
                description: "A GPGPU-based multi-hash cracker."
            },
            {
                name: "hashid",
                url: "https://github.com/psypanda/hashID",
                description: "Identifies the different types of hashes used to encrypt data and passwords."
            },
            {
                name: "Image-exiftool",
                url: "http://search.cpan.org/~exiftool/Image-ExifTool-9.76/lib/Image/ExifTool.pod",
                description: "An extensible set of Perl modules to read and write meta information in a wide variety of image, audio and video files."
            },
            {
                name: "johntheripper",
                url: "http://www.openwall.com/john",
                description: "A fast password cracker."
            },
            {
                name: "maltego",
                url: "http://www.paterva.com/web6/documentation",
                description: "An open source intelligence and forensics application."
            },
            {
                name: "metasploit",
                url: "http://www.metasploit.com",
                description: "A framework and database for all your penetration testing needs."
            },
            {
                name: "NetworkMiner",
                url: "http://www.netresec.com/?page=NetworkMiner",
                description: "A Network Forensic Analysis Tool (NFAT) for Windows, Linux, Mac OSX, and FreeBSD."
            },
            {
                name: "Nikto2",
                url: "https://cirt.net/Nikto2",
                description: "An Open Source web server scanner."
            },
            {
                name: "nipperstudio",
                url: "https://www.titania.com/nipperstudio",
                description: "Is used to make observations about the security configurations of many different device types such as routers, firewalls, and switches."
            },
            {
                name: "nmap",
                url: "http://nmap.org",
                description: "A free and open source utility for network discovery and security auditing."
            },
            {
                name: "sqlmap",
                url: "http://sqlmap.org",
                description: "An open source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws."
            },
            {
                name: "uniscan",
                url: "http://sourceforge.net/projects/uniscan",
                description: "A simple Remote File Include, Local File Include and Remote Command Execution vulnerability scanner."
            },
            {
                name: "unix-privesc-checker",
                url: "http://pentestmonkey.net/tools/audit/unix-privesc-check",
                description: "A tool that tries to find misconfigurations that could allow local unprivilged users to escalate privileges to other users."
            },
            {
                name: "wireshark",
                url: "https://www.wireshark.org",
                description: "A network protocol analyzer for Unix and Windows."
            },
            {
                name: "wpscan",
                url: "http://wpscan.org",
                description: "A black box WordPress vulnerability scanner."
            },
            {
                name: "xsser",
                url: "http://xsser.sourceforge.net",
                description: "An automatic framework to detect, exploit and report XSS vulnerabilities in web-based applications."
            }
        ];
    });
}());