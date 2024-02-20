#! /bin/bash

set -x;

FORCE=${1}
YARN=${2}

# mkdir tmp
# cd tmp

# # Move clients and lib to tmp folder
# rm -rf tmp
# rm -rf node_modules
# # rm -rf aws-sdk-js-v3

# git clone https://github.com/aws/aws-sdk-js-v3.git
# ls -1 ./aws-sdk-js-v3/clients > ./client_list.txt
# ls -1 ./aws-sdk-js-v3/lib > ./lib_list.txt
# mv ./aws-sdk-js-v3/clients ./ 
# mv ./aws-sdk-js-v3/lib ./ 

# rm -rf ./aws-sdk-js-v3
# mkdir ./aws-sdk-js-v3

# mv ./clients ./aws-sdk-js-v3
# mv ./lib ./aws-sdk-js-v3
# find . -type f | grep .spec.ts | xargs -I{} rm {}

# # pull npm modules
# cat ./client_list.txt | xargs -I{} yarn add @aws-sdk/{} --dev
# cat ./lib_list.txt | xargs -I{} yarn add @aws-sdk/{} --dev

# cd ..


mkdir ./tmp/mocks_v3
node ./generator/v3.js 
rm -rf ./src/mocks_v3 && mv ./tmp/mocks_v3 ./src/mocks_v3

# mkdir ./tmp/mocks_v2
# node ./generator/v2.js 

# rm -rf ./src/mocks_v2 && mv ./tmp/mocks_v2 ./src/mocks_v2
