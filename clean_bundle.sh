#! /bin/bash

rm -rf $TMPDIR/react-*; rm -rf $TMPDIR/haste-*; rm -rf $TMPDIR/metro-*; watchman watch-del-all

echo 'Success metro bundler cleaned!'