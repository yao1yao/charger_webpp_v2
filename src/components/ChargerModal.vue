<template lang="pug">
    div(class="modal" v-show="display")
        div.modal__masking
            div.modal__dialog
                div.modal__dialog-title
                    strong {{title}}
                div.modal__dialog-content {{content}}
                button(class="modal__dialog-close" @click="closeModal('close')")
                div.modal__dialog-confirm
                    a(href="javascript:;" @click="closeModal('confirm')") {{btnName}}
</template>

<script>
export default {
    name: 'chargerModal',
    props:{
        type:{
            type: String,
            required:true,
        },
        title:{
            requried: true,
            type: String
        },
        content:{
            required: true,
            type: String
        },
        btnName:{
            requried: true,
            type: String
        },
        display: {
            required: true,
            type: Boolean
        }
    },
    methods:{
        closeModal(data){
            this.$emit('modalResult',data)
        }
    }
}
</script>
<style lang="stylus">
    .modal
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        z-index 99
        background rgba(0,0,0,0.6)
        display table
        height 100%
        width 100%
        &__masking
            display table-cell
            vertical-align middle
        &__dialog
            background-color #ffffff
            margin 1rem
            border-radius 5px
            text-align center
            position relative
            &-title
                padding-top 1rem
                font-weight 400
                font-size 18px
            &-content
                padding 1rem
                text-align center
                font-size 15px
                line-height 1.3
                word-wrap break-word
                word-break break-all
                color #999
            &-confirm
                display flex
                position relative
                border-radius 6px
                line-height 48px
                height 48px
                font-size 18px
                font-weight bold
                a
                  flex 1
                  color #6fcaff
                  user-select none 
                  text-decoration none
                  border-top 1px solid #999
                  &:active 
                    background-color #eeeeee
            &-close
                width 2rem
                height 2rem
                background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwMi8wMi8xNUo6+wwAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAv0lEQVQ4jaXSqxHDMAyA4T8qCsoqHcDAI4RmEq+QbNERCgNDzD1CYWkmSIlz14flx1VU1mdLVjfP8w0YAeucCzTEsixXYAPuEpEB2GKiFRmAUQAL7C3YF7IDVmI71VgKcc4FAajFNARAzkMlLIcAdMdxFG+NKRVJQgpGDlGhBEYOgbcZ/RtJKNFacTV+IGXYtoR9QNoX1+yZlJAzX8KkBqnBLn3fVyFnGGOe3vsVmGLN5L1fpQXJvUyARwuiYOEFHhWoOPjuuoUAAAAASUVORK5CYII=") center no-repeat;
                background-size .9rem .9rem
                border 0
                position absolute
                right 0
                top 0

</style>
