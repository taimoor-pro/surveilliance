!function(n){"use strict";n(document).ready(function(){n(document).on("click","#wpadcenter_ad",function(){t.bind(this)()});var t=function(){var e={action:"set_clicks",ad_id:n(this).data("value"),placement_id:n(this).data("placement"),security:ajax_url.security,async:!1};n.ajax({url:ajax_url.url,dataType:"json",type:"POST",data:e,async:!1,success:function(e){/(^|;)\s*wpadcenter_hide_ads=/.test(document.cookie)&&(n(".wpadcenter-ad-container").hide(),n(".wpadcenter-adgroup").hide())},error:function(){}})};setTimeout(function(){window.addEventListener("blur",function(){window.setTimeout(function(){var e;document.activeElement instanceof HTMLIFrameElement&&((e=document.activeElement.closest("#wpadcenter_ad"))&&(t.bind(e)(),window.focus()))},0)})},1e3)})}(jQuery);