#!/bin/bash
mkdir tzdb
cd tzdb
wget https://www.iana.org/time-zones/repository/tzcode-latest.tar.gz
wget https://www.iana.org/time-zones/repository/tzdata-latest.tar.gz
gzip -dc tzcode-latest.tar.gz | tar -xf -
gzip -dc tzdata-latest.tar.gz | tar -xf -
timezone_names=()
while IFS= read -r line; do
    if [[ "$line" != \#* ]]; then
        IFS=$'\t' read -r country_codes coordinates timezone_name comments <<<"$line"
        timezone_names+=($timezone_name)
    fi
done <"zone1970.tab"
printf '%s\n' "${timezone_names[@]}" | jq -R . | jq -s . >../timezoneNames.json
cd ..
rm -rf tzdb
