<template lang="pug">
div.bg
    div.feedback
        p.feedback__title 您有什么问题或建议想对我们说的?
        div.feedback__item
            input(
            class="feedback__item-input" 
            placeholder="您的主题:例如 bug, 新功能等"
            v-model = "title"
            )
            p.feedback__item-count 还可以输入 {{titleLeaveLength}} 个字
        div.feedback__item
            textarea(
            class="feedback__item-textarea" 
            placeholder="您的宝贵意见就是我们进步的源泉"
            v-model = "content"
            )
            p.feedback__item-count 还可以输入 {{contentLeaveLength}} 个字
        p.feedback__explain 😊 请详细描述您的遇到的问题，有助于我们快速定位并解决问题，或留下您宝贵的建议或意见，我们会认真进行评估</p>
        div.feedback__btn
                button(@click="saveFeedBack" class="btn btn-primary" v-bind:disabled="enabled") 提交反馈
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    name: "FeedBack",
    data(){
        return{
            titleLength: 20,
            contentLength: 100,
            title: '',
            content: ''
        }
    },
    computed: {
            titleLeaveLength() {
                if (this.titleLength > this.title.length) {
                    return this.titleLength - this.title.length
                } else {
                    this.title = this.title.substr(0, this.titleLength)
                    return 0
                }
            },
            contentLeaveLength() {
                if (this.contentLength > this.content.length) {
                    return this.contentLength - this.content.length
                } else {
                    this.content = this.content.substr(0, this.contentLength)
                    return 0
                }
            },
            enabled() {
                return !this.title||!this.content
            },
            ...mapState('user', ['userInfo'])
        },
    methods:{
        ...mapActions('user',['feedback']),
        saveFeedBack(){
            if (!this.title && !this.content) {
                    return
                }
                this.feeback({
                    tag: this.title,
                    content: this.content,
                    userId: this.userInfo.userId
                })
                // this.$store.dispatch('user/feedback', {
                //     tag: this.title,
                //     content: this.content,
                //     userId: this.userInfo.userId
                // });
        }
    }
}
</script>
<style lang="stylus">
    @import "./../assets/stylus/common.stylus"
    $color=white
    .feedback
        width 90%
        margin 0 auto 
        padding-top 10%
        &__title
            color: $color
            font-size .9rem
        &__item
            margin: 1rem 0;
            &-input
                widthHeightLineHeightFontSize(100%, 2rem,1rem,.9rem)
                border 1px solid $color
                border-radius(10px)
            &-textarea
                widthHeightLineHeightFontSize(100%, 9rem,1rem,.9rem)
                padding-top .5rem
                color black
                border 1px solid $color
                border-radius(10px)
                resize none
            &-count
                text-align right 
                font-size .8rem
        &__explain
            color $color
            font-size .9rem
            line-height 1.5rem
         &__btn
            width: 90%;
            margin: 1.5rem auto;

</style>


