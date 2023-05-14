tribe.events=tribe.events||{};tribe.events.views=tribe.events.views||{};tribe.events.views.tooltip={};(function($,obj){'use strict';var $document=$(document);obj.config={delayHoverIn:300,delayHoverOut:300,};obj.selectors={tooltipTrigger:'[data-js~="tribe-events-tooltip"]',tribeEventsTooltipTriggerHoverClass:'.tribe-events-tooltip-trigger--hover',tribeEventsTooltipThemeClass:'.tribe-events-tooltip-theme',tribeEventsTooltipThemeHoverClass:'.tribe-events-tooltip-theme--hover',tribeCommonClass:'.tribe-common',tribeEventsClass:'.tribe-events',};obj.handleOriginFocus=function(event){setTimeout(function(){if(event.data.target.is(':focus')||event.data.target.hasClass(obj.selectors.tribeEventsTooltipTriggerHoverClass.className())){event.data.target.tooltipster('open')}},obj.config.delayHoverIn)};obj.handleOriginBlur=function(event){event.data.target.tooltipster('close')};obj.handleOriginHoverIn=function(event){event.data.target.addClass(obj.selectors.tribeEventsTooltipTriggerHoverClass.className())};obj.handleOriginHoverOut=function(event){event.data.target.removeClass(obj.selectors.tribeEventsTooltipTriggerHoverClass.className())};obj.handleTooltipHoverIn=function(event){event.data.target.addClass(obj.selectors.tribeEventsTooltipThemeHoverClass.className())};obj.handleTooltipHoverOut=function(event){event.data.target.removeClass(obj.selectors.tribeEventsTooltipThemeHoverClass.className())};obj.handleInstanceClose=function(event){var $origin=event.data.origin;var $tooltip=$(event.tooltip);if($origin.is(':focus')||$origin.hasClass(obj.selectors.tribeEventsTooltipTriggerHoverClass.className())||$tooltip.hasClass(obj.selectors.tribeEventsTooltipThemeHoverClass.className())){event.stop()}};obj.handleInstanceClosing=function(event){$(event.tooltip).off('mouseenter touchstart',obj.handleTooltipHoverIn).off('mouseleave touchleave',obj.handleTooltipHoverOut)};obj.onFunctionInit=function(instance,helper){var $origin=$(helper.origin);$origin.on('focus',{target:$origin},obj.handleOriginFocus).on('blur',{target:$origin},obj.handleOriginBlur).on('mouseenter touchstart',{target:$origin},obj.handleOriginHoverIn).on('mouseleave touchleave',{target:$origin},obj.handleOriginHoverOut);instance.on('close',{origin:$origin},obj.handleInstanceClose).on('closing',{origin:$origin},obj.handleInstanceClosing)};obj.onFunctionReady=function(instance,helper){var $tooltip=$(helper.tooltip);$tooltip.on('mouseenter touchstart',{target:$tooltip},obj.handleTooltipHoverIn).on('mouseleave touchleave',{target:$tooltip},obj.handleTooltipHoverOut)};obj.deinitTooltips=function($container){$container.find(obj.selectors.tooltipTrigger).each(function(index,trigger){$(trigger).off().tooltipster('instance').off()})};obj.initTooltips=function($container){var theme=$container.data('tribeEventsTooltipTheme');$container.find(obj.selectors.tooltipTrigger).each(function(index,trigger){$(trigger).tooltipster({animationDuration:0,interactive:!0,delay:[obj.config.delayHoverIn,obj.config.delayHoverOut],delayTouch:[obj.config.delayHoverIn,obj.config.delayHoverOut],theme:theme,functionInit:obj.onFunctionInit,functionReady:obj.onFunctionReady,})})};obj.initTheme=function($container){$container.trigger('beforeTooltipInitTheme.tribeEvents',[$container]);var theme=[obj.selectors.tribeEventsTooltipThemeClass.className(),obj.selectors.tribeCommonClass.className(),obj.selectors.tribeEventsClass.className(),];$container.data('tribeEventsTooltipTheme',theme);$container.trigger('afterTooltipInitTheme.tribeEvents',[$container])};obj.deinit=function(event,jqXHR,settings){var $container=event.data.container;obj.deinitTooltips($container);$container.off('beforeAjaxSuccess.tribeEvents',obj.deinit)};obj.init=function(event,index,$container,data){obj.initTheme($container);obj.initTooltips($container);$container.on('beforeAjaxSuccess.tribeEvents',{container:$container},obj.deinit)};obj.ready=function(){$document.on('afterSetup.tribeEvents',tribe.events.views.manager.selectors.container,obj.init)};$(obj.ready)})(jQuery,tribe.events.views.tooltip)