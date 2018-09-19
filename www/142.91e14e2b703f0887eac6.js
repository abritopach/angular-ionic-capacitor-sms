(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{"8LYD":function(e,t,r){"use strict";r.r(t),r.d(t,"IonReorder",function(){return s}),r.d(t,"IonReorderGroup",function(){return l});var o=r("B5Ai"),n=r("cBjU"),i=r("EXrR"),s=function(){function e(){}return e.prototype.render=function(){return Object(n.b)("slot",null,Object(n.b)("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"}))},Object.defineProperty(e,"is",{get:function(){return"ion-reorder"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:34px;opacity:.4}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),l=function(){function e(){this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.activated=!1,this.disabled=!0}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},e.prototype.componentDidLoad=function(){return o.a(this,void 0,void 0,function(){var e,t,n,i=this;return o.c(this,function(o){switch(o.label){case 0:return(e=this.el.closest("ion-content"))?[4,e.componentOnReady()]:[3,3];case 1:return o.sent(),t=this,[4,e.getScrollElement()];case 2:t.scrollEl=o.sent(),o.label=3;case 3:return n=this,[4,r.e(1).then(r.bind(null,"2jMD"))];case 4:return n.gesture=o.sent().createGesture({el:this.doc.body,queue:this.queue,gestureName:"reorder",gesturePriority:90,disableScroll:!0,threshold:0,direction:"y",passive:!1,canStart:function(e){return i.canStart(e)},onStart:function(e){return i.onStart(e)},onMove:function(e){return i.onMove(e)},onEnd:function(){return i.onEnd()}}),this.disabledChanged(),[2]}})})},e.prototype.componentDidUnload=function(){this.onEnd()},e.prototype.canStart=function(e){if(this.selectedItemEl)return!1;var t=e.event.target.closest("ion-reorder");if(!t)return!1;var r=function(e,t){for(var r,o=0;e&&o<6;){if((r=e.parentNode)===t)return e;e=r,o++}}(t,this.el);return r?(e.data=r,!0):(console.error("reorder node not found"),!1)},e.prototype.onStart=function(e){e.event.preventDefault();var t=this.selectedItemEl=e.data,r=this.cachedHeights;r.length=0;var o=this.el.children;if(o&&0!==o.length){for(var n=0,s=0;s<o.length;s++){var l=o[s];r.push(n+=l.offsetHeight),l.$ionIndex=s}var d=this.el.getBoundingClientRect();if(this.containerTop=d.top,this.containerBottom=d.bottom,this.scrollEl){var h=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=h.top+c,this.scrollElBottom=h.bottom-c}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=a(t),this.selectedItemHeight=t.offsetHeight,this.activated=!0,t.classList.add(u),Object(i.k)()}},e.prototype.onMove=function(e){var t=this.selectedItemEl;if(t){var r=this.autoscroll(e.currentY),o=this.containerTop-r,n=Math.max(o,Math.min(e.currentY,this.containerBottom-r)),s=r+n-e.startY,l=this.itemIndexForTop(n-o);if(l!==this.lastToIndex){var c=a(t);this.lastToIndex=l,Object(i.i)(),this.reorderMove(c,l)}t.style.transform="translateY("+s+"px)"}},e.prototype.onEnd=function(){var e=this;this.activated=!1;var t=this.selectedItemEl;if(t){var r=this.el.children,o=this.lastToIndex,n=a(t);this.el.insertBefore(t,n<o?r[o+1]:r[o]);for(var s=r.length,l=0;l<s;l++)r[l].style.transform="";var c=function(){e.selectedItemEl&&(e.selectedItemEl.style.transition="",e.selectedItemEl.classList.remove(u),e.selectedItemEl=void 0)};o===n?(t.style.transition="transform 200ms ease-in-out",setTimeout(c,200)):(c(),this.ionItemReorder.emit({from:n,to:o})),Object(i.j)()}},e.prototype.itemIndexForTop=function(e){var t=this.cachedHeights,r=0;for(r=0;r<t.length&&!(t[r]>e);r++);return r},e.prototype.reorderMove=function(e,t){for(var r=this.selectedItemHeight,o=this.el.children,n=0;n<o.length;n++){var i="";n>e&&n<=t?i="translateY("+-r+"px)":n<e&&n>=t&&(i="translateY("+r+"px)"),o[n].style.transform=i}},e.prototype.autoscroll=function(e){if(!this.scrollEl)return 0;var t=0;return e<this.scrollElTop?t=-d:e>this.scrollElBottom&&(t=d),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial},e.prototype.hostData=function(){return{class:{"reorder-enabled":!this.disabled,"reorder-list-active":this.activated}}},Object.defineProperty(e,"is",{get:function(){return"ion-reorder-group"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activated:{state:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},queue:{context:"queue"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionItemReorder",method:"ionItemReorder",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}"},enumerable:!0,configurable:!0}),e}();function a(e){return e.$ionIndex}var c=60,d=10,u="reorder-selected"}}]);