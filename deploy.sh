#!/bin/bash
yarn build
rm -rf "output"
mkdir "output"
cp -r dist/* output/
cp -r extension/* output/
firebase deploy --only hosting:bhavan-dev-tools