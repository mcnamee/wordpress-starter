/*
 * jQuery Off Canvas Menu v1.2
 * http://codepen.io/mcnamee/pen/Wbvoew
 * Copyright (c) 2014 Matt Mcnamee
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 */
(function(e){e.fn.offCanvasMenu=function(t){var n=e.extend({menu_ul:".offCanvas_menu",position:"right"},t),r=this,i=this.attr("id"),s=e("div[data-menu='"+i+"']");if(n.position=="left"){s.addClass("offCanvas_left")}this.html('<span class="offCanvas_trigger_item"></span><span class="offCanvas_trigger_item"></span><span class="offCanvas_trigger_item"></span>');this.addClass("offCanvas_trigger");e("html").on("click","#"+i,function(t){t.preventDefault();if(n.position=="left"){e(".onCanvas").addClass("onCanvas_left")}else{e(".onCanvas").removeClass("onCanvas_left")}e("html").toggleClass("offCanvas_open").one("otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e("html").toggleClass("overflow_hidden")});s.toggleClass("offCanvas_menu_open");if(e("html").hasClass("no-csstransitions")){e("html").toggleClass("overflow_hidden")}setTimeout(function(){r.toggleClass("offCanvas_trigger_open")},200);return false});e(n.menu_ul+" li").each(function(){if(e(this).has("ul").length){e(this).addClass("offCanvas_menu_has_children");e(this).append('<span class="offCanvas_menu_has_children_indicator"><svg><polygon points="0,2 10,2 5,10"/></svg></span>')}});e(".offCanvas_menu_has_children_indicator").on("click",function(t){t.preventDefault();e(this).parent("li").toggleClass("offCanvas_menu_sub_open").children("ul").slideToggle(400);return false})}})(jQuery);
