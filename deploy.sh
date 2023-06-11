set -d 

npm run build


cd dist

git init

git checkout -b main
 git add -A

 git commit -m 'deploy'

 git push -f git@github.com:Camlo01/website-saenz-construction.git main:gh-pages