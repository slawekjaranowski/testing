#!/bin/sh

echo "::add-matcher::./.github/actions/docker1/errors.json"

trap 'catch $?' ERR

ERROR=0

catch() {
    echo "::error::Something went wrong - error code: $1"
    ERROR=1
}

echo "Hello"
echo "error: error message 1"

echo "Hello 1"
echo "Hello 2"
echo "Hello 3"


ls .
ls xx

echo "$ERROR"

exit $ERROR


