~会匹配最近的小版本依赖包，比如~1.2.3 会匹配所有 1.2.x 版本，但是不包括 1.3.0
^会匹配最新的大版本依赖包，比如^1.2.3 会匹配所有 1.x.x 的包，包括 1.3.0，但是不包括 2.0.0

npm info @xxx/xxx-xxx 查看某个包的信息
npm info @xxx/xxx-xxx versions 查看某个包的信息所有版本

newversion: 直接给一个版本号；

major：主版本号

minor：次版本号

patch：补丁号

premajor：预备主版本

prepatch：预备次版本

prerelease：预发布版本

npm version <newversion> /major/minor/patch
npm version 1.0.0-alpha.1 指定版本号
npm version prerelease --preid=alpha
git push origin v2.x.x
npm publish
/ npm publish —-tag next 发布到指定的分支

npm set registry http://npm.xxx-int.com
npm adduser --registry http://npm.xxx-int.com

npm repo axios 打开远端的某个仓库

npm link 调试 1.先在抽出来的那个包里头 执行 npm link 会将这个包的指向从 /usr/local/lib/node_modules/@xxxx/npm-components -> /Users/zzy/work/npm-components 2.在应用 npm-components 的项目里也执行 npm link npm-components-name 就可以在线调试了

需要更更新的时候需要在 npm-components 包里重新执行 npm run build

# node 版本管理

nvm ls
nvm use v10.x.x

# git 常用指令

git status
git add ./filename
git commit -m 'some description'
