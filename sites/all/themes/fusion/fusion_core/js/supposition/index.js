(function($){$.fn.supposition=function(){var $w=$(window),_offset=function(dir){return window[dir=='y'?'pageYOffset':'pageXOffset']||document.documentElement&&document.documentElement[dir=='y'?'scrollTop':'scrollLeft']||document.body[dir=='y'?'scrollTop':'scrollLeft'];},onInit=function(){$topNav=$('li',this);var cZ=parseInt($topNav.css('z-index'))+$topNav.length;$topNav.each(function(){$(this).css({zIndex:--cZ});});},onHide=function(){this.css({marginTop:'',marginLeft:''});},onBeforeShow=function(){this.each(function(){var $u=$(this);$u.css('display','block');var menuWidth=$u.width(),parentWidth=$u.parents('ul').width(),totalRight=$w.width()+_offset('x'),menuRight=$u.offset().left+menuWidth;if(menuRight>totalRight){$u.css('margin-left',($u.parents('ul').length==1?totalRight-menuRight:-(menuWidth+parentWidth))+'px');}
var windowHeight=$w.height(),offsetTop=$u.offset().top,menuHeight=$u.height(),baseline=windowHeight+_offset('y');var expandUp=(offsetTop+menuHeight>baseline);if(expandUp){$u.css('margin-top',baseline-(menuHeight+offsetTop));}
$u.css('display','none');});};return this.each(function(){var o=$.fn.superfish.o[this.serial];var _onInit=o.onInit,_onBeforeShow=o.onBeforeShow,_onHide=o.onHide;$.extend($.fn.superfish.o[this.serial],{onInit:function(){onInit.call(this);_onInit.call(this);},onBeforeShow:function(){onBeforeShow.call(this);_onBeforeShow.call(this);},onHide:function(){onHide.call(this);_onHide.call(this);}});});};})(jQuery);