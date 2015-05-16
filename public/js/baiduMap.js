jQuery(document).ready(function($){

	var map = new BMap.Map("baidu-container");          // 创建地图实例  
	var point = new BMap.Point(114.362696,30.533519);  // 创建点坐标  

	var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);               // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	map.centerAndZoom(point, 17);                 // 初始化地图，设置中心点坐标和地图级别  
	map.addEventListener("tilesloaded",function(){
		map.setCenter(point);
		var temp = document.getElementById('baidu-container');
		console.log(temp);
	});
	//ZoomIn
	function ZoomInControl() {
		this.defaultAnchor =  BMAP_ANCHOR_TOP_LEFT;
		this.defaultOffset = new BMap.Size(0, 0);
	}

	ZoomInControl.prototype = new BMap.Control();

	ZoomInControl.prototype.initialize = function(map){

		var ZoomIn = document.getElementById("cd-zoom-in");
	  	ZoomIn.onclick = function(e){
			map.setZoom(map.getZoom() + 1);
	  	}

		return ZoomIn;
	}

	//Zoomout
	function ZoomOutControl() {
		this.defaultAnchor =  BMAP_ANCHOR_TOP_LEFT;
		this.defaultOffset = new BMap.Size(0, 0);
	}

	ZoomOutControl.prototype = new BMap.Control();

	ZoomOutControl.prototype.initialize = function(map){

	  	var ZoomOut = document.getElementById("cd-zoom-out");
		ZoomOut.onclick = function(e){
			map.setZoom(map.getZoom() - 1);
		}

		return ZoomOut;
	}
	// 创建控件
	var myZoomInCtrl = new ZoomInControl();
	var myZoomOutCtrl = new ZoomOutControl();
	// 添加到地图当中
	map.addControl(myZoomOutCtrl);
	map.addControl(myZoomInCtrl);
});

