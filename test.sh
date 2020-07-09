#!/bin/bash
alias mycd='/home/gbobilles/Desktop/nightwatch'
pwd



counter=1
while [ $counter -le 5 ]
do
./node_modules/.bin/wdio run wdio.conf.js --spec performanceReview

./node_modules/.bin/wdio run wdio.conf.js --spec weeklyFloorReport
((counter++))
done
echo All done




