<template lang="pug">
    div(class="charger-toast" v-if="display") {{text}}
</template>
<script>
export default {
    name: 'charger-toast',
    props:{
        text:{
            required: true,
            type: String
        },
        showTime:{
            required:false,
            type: Number,
            default: 1000
        },
        display: {
            required: true,
            type: Boolean
        }
    },
    watch:{
        display: function(){
            const self = this
            if(self.display){
                setTimeout(()=>{
                    this.$emit('hideToast',false);
                },self.showTime)
            }
        }
    }
}
</script>

<style lang="stylus">
.charger-toast
        position fixed;
        z-index 5000;
        font-size 1rem;
        width 60%;
        height 2.5rem;
        line-height 2.5rem;
        padding 10px;
        top 200px;
        left 35%;
        margin-left -3.8em;
        background rgba(17, 17, 17, 0.7);
        text-align center;
        border-radius 5px;
        color #FFFFFF;
        opacity .7;
</style>
