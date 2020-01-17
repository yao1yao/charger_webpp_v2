
# 2018-10-17
* 单元测试例程
```
describe('AddButton.vue',()=>{
    describe(':props',()=>{
        it(':label - should render a button with the passed-in label text',()=>{
            
        })
    })
    describe('@events',()=>{
        it('@add - should emit an "add" event when the button is clicked,()=>{

        })
    })
})
```


# 2018-10-12

### 问题: TypeError: Cannot read property 'centerAndZoom' of undefined
### 详细信息
1. 当进入地图页时就会报这个错误
### 解决方案
1. 有待解决


# 2018-10-10
### 问题: ios 在 h5 页面中点击元素后出现阴影或闪烁的问题
### 解决方案: 
* 只需要添加
```
-webkit-tap-highlight-color: rgba(0,0,0,0)
-webkit-tap-highlight-color: transparent;
```
* 参考资料
    * [ios 点击有有阴影](https://blog.csdn.net/Thekingyu/article/details/78978658)


# 2018-10-9
### 问题: feedback 需要限制提交次数

# 2018-10-8

### 问题: 调用微信  openLocation 接口显示成功，但是无法在 ios 中显示导航
### 解决方案: 由于 openLocation 中的经纬度需要传递浮点数，传递字符串不可以调用

## 2018-9-6
### 问题 : 配置 vue.config.js 代理不生效
### 解决方案 : 需要配置端口号才会生效