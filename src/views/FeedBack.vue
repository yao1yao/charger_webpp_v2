<template lang="pug">
    div.feedback
        p.feedback__title 您有什么问题或建议想对我们说的?
        div.feedback__item
            textarea(
            style="height:2rem" 
            class="feedback__item-textarea" 
            placeholder="您的主题:例如 bug, 新功能等"
            )
            p.feedback__item-count 还可以输入 10 个字
        div.feedback__item
            textarea(
            style="height:9rem" 
            class="feedback__item-textarea" 
            placeholder="您的宝贵意见就是我们进步的源泉"
            )
            p.feedback__item-count 还可以输入 10 个字
        p.feedback__explain 😊 请详细描述您的遇到的问题，有助于我们快速定位并解决问题，或留下您宝贵的建议或意见，我们会认真进行评估</p>
        
        div.feedback__btn
                button(@click="saveFeedBack" class="btn btn-primary") 提交反馈
</template>
<script>
export default {
    name: "FeedBack",
    methods:{
        saveFeedBack(){

        }
    }
}
</script>
<style lang="stylus">
    @import "./../assets/stylus/common.stylus"
    $color=#9E9E9E
    .feedback
        width 90%
        margin 0 auto 
        padding-top 10%
        &__title
            color: #52bcf8
            font-size .9rem
        &__item
            margin: 1rem 0;
            &-textarea
                widthHeightLineHeightFontSize(100%, 1rem,1rem,.9rem)
                color $color
                border 1px solid $color
                border-radius(10px)
                resize none
                line-height 2rem
            &-count
                text-align right 
                font-size .8rem
        &__explain
            margin-bottom 4rem
            color $color
            font-size .9rem
            line-height 1.5rem
        &__btn
            width 100%
            height 2rem
</style>


