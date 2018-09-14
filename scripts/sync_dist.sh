#!/usr/bin/env bash

baseDir='/Users/msxiu/code/work/charger_webapp_v2/dist/';
targetDir='/Users/msxiu/code/work/charger_adms_v2/public/static/app_v1';
rsync -av $baseDir $targetDir