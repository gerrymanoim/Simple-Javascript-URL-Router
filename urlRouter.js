(function($) {

    $.fn.urlRouter = function(method) {
		var paths = {
			'calendar' : '/view/{0}/calendar?b={1}&e={2}'
		};
        var methods = {
            getPath: function(viewname, argsArray) {
                var self = this;
	            if (!argsArray) {
	                argsArray = [''];
	            }
	            return 	helpers._urlFormatter(paths[viewname], argsArray);
            }
        };

        var helpers = {
            _urlFormatter: function(url, argsArray) {
	            if (argsArray.length <= 0) {
	                return url;
	            }
	            var tokenCount = argsArray.length - 1;
	            for (var token = 0; token <= tokenCount; token++) {
	                url = url.replace(new RegExp("\\{" + token + "\\}", "gi"), argsArray[token]);
	            }
	            return url;
	        }
        };

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error( 'Method "' +  method + '" does not exist in pluginName plugin!');
        }

    }

})(jQuery);