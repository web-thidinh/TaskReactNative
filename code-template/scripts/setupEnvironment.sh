#!/bin/bash

ENV=$1

FOUND_ERROR=false
function testFileExists()
{
    if [ -f "$1" ]; then echo "OK: $1"; else echo "ERROR: file is missing $1" && FOUND_ERROR=true; fi
}

function exitIfError()
{
    # validate script input
    if [ $FOUND_ERROR = true ];
    then
        echo "FOUND ERROR: $1"
        exit 1
    fi
}

echo "Setting up google services and env files and what not"

if [ $ENV == "prod" ] 
then
    echo "Setting up prod"
    yes | cp ./firebase/google-services-prod.json ./android/app/google-services.json
    yes | cp ./firebase/GoogleService-Info-prod.plist ./ios/GoogleService-Info.plist

elif [ $ENV == "staging" ] 
then
    echo "Setting up staging"
    yes | cp ./firebase/google-services-staging.json ./android/app/google-services.json
    yes | cp ./firebase/GoogleService-Info-staging.plist ./ios/GoogleService-Info.plist
else
    echo "Setting up development"
    yes | cp ./firebase/google-services-dev.json ./android/app/google-services.json
    yes | cp ./firebase/GoogleService-Info-dev.plist ./ios/GoogleService-Info.plist
fi

testFileExists ./android/app/google-services.json
testFileExists ./ios/GoogleService-Info.plist

exitIfError "Some missing files! aborting build"
