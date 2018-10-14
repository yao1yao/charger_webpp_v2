<template lang="pug">
    mixin liItem(className,value)
        li
            span(class=className)=value
    transition(name="slide-fade")
        div(class="charger-keyboard animation-show-hide" id="park_no_id" v-show="display")
            div.charger-keyboard-panel
                ul(v-on:click.stop="input")
                   +liItem("btn btn_input",1)
                   +liItem("btn btn_input",2)
                   +liItem("btn btn_input",3)
                   +liItem("btn btn_input",4)
                   +liItem("btn btn_input",5)
                   +liItem("btn btn_input",6)
                   +liItem("btn btn_input",7)
                   +liItem("btn btn_input",8)
                   +liItem("btn btn_input",9)
                   +liItem("btn btn_input",'')
                   +liItem("btn btn_input",0)
                   +liItem("btn col_reset",'')                                                              
</template>


<script>
export default {
    props:{
        display: {
            required: true,
            default:false,
            type: Boolean
        }
    },
    methods:{
        input(event){
            if(event.target.className==='btn col_reset'){
                this.$emit('input','del')
            }else{
                this.$emit('input',event.target.innerHTML)
            }
        }
    }    
}
</script>

<style lang="stylus" scoped>
    @media screen and (min-height:530px){
        #park_no_id{
            bottom: 3.3rem;
        }
    }
    .charger-keyboard
        position fixed
        bottom 3rem
        left 0
        right 0
        z-index 1
        background-color white
        display block
        &-panel
            border 1px solid #d9d9d9
            border-bottom none 
            background-color #7c5757
            .btn:active
                background-color rgba(195,195,195,0.4)
            li
                float left 
                width 33.333%
                overflow hidden
                box-sizing border-box
                -webkit-box-sizing border-box
                border-right 1px solid #d9d9d9
                border-bottom 1px solid #d9d9d9
                span 
                    display block
                    height 3rem
                    line-height 3rem
                    font-size 1.5rem
                    text-align center
                    color #000
                    overflow hidden
                .col_reset
                    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAgCAYAAABpRpp6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmNTI1NDI5Ny00N2U0LWJmNDEtYTMyMC0yZjE0MTIxNzZiMTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDYyNzM0MEUzOEI1MTFFNEI5MjQ5OTNFQUZGRjg4NjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDYyNzM0MEQzOEI1MTFFNEI5MjQ5OTNFQUZGRjg4NjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmY1MjU0Mjk3LTQ3ZTQtYmY0MS1hMzIwLTJmMTQxMjE3NmIxOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpmNTI1NDI5Ny00N2U0LWJmNDEtYTMyMC0yZjE0MTIxNzZiMTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6466g+AAABv0lEQVR42tSYu0rEQBSG4waFFdTGbKOdVrrY2VsJgqWNtYUPIFhnE8FOLLw9gNgLYqWFnY2NGzRgp52V4AUVdfxPyEiEuM41yf7wdTPLt5mZk5NxHPWsAmaBV3AFNsCEYyjL4MuScJZPsAfqOrKL4KMA2SynoE9Fdh68FSzL2ZKVnQHPJcmydFUnXUHZaXAMBpzyUgPvIgOb4L7EJ5vl+j/ZMXBXEVmWnp8/MwJuZH7QdV3WarWY53nCc2is7/vJXME5uRkGl7JPIAxDRomiSEiaxrTb7WQOzVUVHgTnKktGAiQrIi0ztpNwPS3SyvtMRERD9pdwLzg0cTg6CWnKsmyN2zd5ovPEDMj+CO/YKENZwTiOEzRlE+F1m7WTxLgoF9eQZbQVepwuCwnvdtOWoFATdNBNh85JG+QjG7KNRsN4WePpB2e2ZE2/OHiGwIUtWdOvZh4PxDrNTyfZPGmd5odnFNzKtpdBEAjJZqVpjm57yTNeoa8N4lGkTk+Bh4oIRzUBYWrk58BLBV5yJzKDZ0u8k+Cf+U3Zf7hQwq0PZ1t1WZYKulczclXFs1KQqJHLQJ41S5JPVA3AZt6e/RZgAKQd3lWZ2FUeAAAAAElFTkSuQmCC") no-repeat 50% #ffffff;
                    background-size: 3rem 2.4rem;
                .col_finish
                    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2BAMAAAB+a3fuAAAALVBMVEUAAAAGugQGugQGugQGugQGugQGugQGugQGugQGugQGugQGugQGugQGugQGugRf7nFHAAAADnRSTlMAEfDQMKDghmBAUMCwcNKP/K8AAAE9SURBVDjL1ZNBSsNQEIb/YENFEIJF3bgRsg4VXAfRC3iCgFBwF3qCkBMU1y5Kj+DaRfAEPUKRxEQpds5g3gR5DfOG7gqdRTYfX96ff16wrzlJm4XGMqK1gnwiahSWUDtudEUq82JS3zliba1rlLvYPaMfFxpEBpULXQtd6LjT7lxsxtpk+5Dl70unMaqC/iFdsIzZDbamICKTzJca/qMlzB7RZ5ztnFGN3kQserFDw4rFB0YbsWg7uXPTtmQpKiVzDA6kLptL1sSJcktsW3LftmS5cKtJsSinOPC5TOk5AAhIxqLQ99dlaNhQVHBUA8MmaNnsWlz2p/aRTkEDuafCFLYag86+RBQyP8T8ExTnOttAZ1Wgs+RDsJizvIFG34Jl/A05yItEmIsa8CvTyzyUd6nt7Naw0zLY0fWu+QPuEPYD3UZMmgAAAABJRU5ErkJggg==") no-repeat 50% #ffffff;
                    background-size: 3rem 2.4rem; 
    
     /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active
        transition all .5s ease;
    .slide-fade-leave-active
        transition all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ 
        transform translateY(20px);
        opacity 0;
</style>


