#!/usr/bin/env bash

for host in host{1..3} master;do
    ssh-keyscan $host >> ~/.ssh/known_hosts 2>/dev/null
    sshpass -p"vagrant" ssh-copy-id vagrant@$host
done

