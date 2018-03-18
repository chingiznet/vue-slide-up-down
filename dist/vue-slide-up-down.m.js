export default{name:"SlideUpDown",props:{active:Boolean,duration:{type:Number,default:500}},data:function(){return{maxHeight:0}},render:function(t){return t("div",{style:this.style,ref:"container"},this.$slots.default)},mounted:function(){this.render()},watch:{active:function(){this.render()}},computed:{style:function(){return{overflow:"hidden","transition-property":"all",height:this.maxHeight+"px","transition-duration":this.duration+"ms"}}},methods:{render:function(){var t=this.$refs.container;if(this.active){var e=t.getAttribute("style");t.removeAttribute("style"),this.maxHeight=t.offsetHeight,t.setAttribute("style",e)}else this.maxHeight=0}}};
//# sourceMappingURL=vue-slide-up-down.m.js.map
