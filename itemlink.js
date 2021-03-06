
var xItemIDs={};

var xBkmkIDs={};

$(document).ready(function(){

	var _extractItemID=function(sHref){
		var m=sHref.match(/^nyf:\/\/entry\?itemid=(\d+)$/i);
		if(m && m.length>1){
			return m[1];
		}else{
			m=sHref.match(/^nyf:\/\/entry\?bmid=(\d+)$/i);
			if(m && m.length>1){
				var sBmID=m[1];
				if(sBmID){
					return xBkmkIDs[sBmID];
				}
			}
		}
	};

	$('a').click(function(e){
		var sHref=e.target.href;
		if(sHref){
			var sID=_extractItemID(sHref);
			if(sID){
				var sFile=xItemIDs[sID];
				if(sFile){
					document.location.href=sFile;
					return false;
				}else{
					alert('Can not open the linked info item (#'+sID+')');
					return false;
				}
			}

			window.open(sHref);
			return false;
		}
	});

});
