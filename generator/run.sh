#! /bin/bash

set -x;

FORCE=${1}
YARN=${2}

mkdir tmp
cd tmp

if [[ $FORCE == true ]]; then
  rm -rf tmp
  rm -rf node_modules
  git clone https://github.com/aws/aws-sdk-js-v3.git
  ls -1 ./aws-sdk-js-v3/clients > ./client_list.txt
  mv ./aws-sdk-js-v3/clients ./ && rm -rf ./aws-sdk-js-v3 && mkdir ./aws-sdk-js-v3 && mv ./clients ./aws-sdk-js-v3
  find . -type f | grep .spec.ts | xargs -I{} rm {}
fi

if [[ $YARN == true ]]; then
  cat ./client_list.txt | xargs -I{} yarn add @aws-sdk/{} --dev

fi

cd ..


mkdir ./tmp/mocks_v3
node ./generator/v3.js ./tmp/client_list.txt false
rm -rf ./src/mocks_v3 && mv ./tmp/mocks_v3 ./src/mocks_v3

mkdir ./tmp/mocks_v2
node ./generator/v2.js ./tmp/client_list.txt false 
rm -rf ./src/mocks_v2 && mv ./tmp/mocks_v2 ./src/mocks_v2
