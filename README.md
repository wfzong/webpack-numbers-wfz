# 这是一个测试
请不要用于生产环境，随时可能删除

## NPM 发布及更新
```javascript
// 发布
npm publish

// 更新
/*
npm有一套自己的版本控制标准——Semantic versioning（语义化版本）
 
具体体现为：
对于"version":"x.y.z"
1.修复bug,小改动，增加z
2.增加了新特性，但仍能向后兼容，增加y
3.有很大的改动，无法向后兼容,增加x

例如：我原本的项目是1.0.0版本的话
若是1中情况，变为1.0.1
若是2中情况，变为1.1.0
若是3中情况，变为2.0.0

update_type:major minor patch
*/

npm version <update_type>

```