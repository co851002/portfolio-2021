(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{354:function(t,e,n){"use strict";n.r(e);var r={props:{src:{type:String},gutter:{type:Boolean,default:!1},sharp:{type:Boolean,default:!1}},computed:{hasImage:function(){return this.src}},render:function(t){var e=this.gutter?"p-".concat(this.$parent.padding):"",n="w-full pb-2 ".concat(e),img=t("img",{attrs:{src:this.src},class:this.sharp?"":"rounded-".concat(this.$parent.borderRadius,"-inner mx-auto")});return this.hasImage?t("div",{class:n,id:"card-image"},[img]):void 0}},c=n(11),component=Object(c.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);