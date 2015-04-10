define(['require',
  'jimu/BaseWidget',
  'jimu/loaderplugins/jquery-loader!https://code.jquery.com/jquery-git1.min.js'],
function(require, BaseWidget, $){
  var map, baseFunctions = {};
  //first, you should create a constructor function
  function NetworkExplorerWidget(params){
    this.constructor(params);
  }

  //inherit from the BaseWidget
  NetworkExplorerWidget.prototype = BaseWidget.prototype;
  //here, we should load template file sync. or you can use a amd
  //text plugin to load the template file
  $.ajax(require.toUrl('./Widget.html'), {async: false}).done(function(data){
    NetworkExplorerWidget.prototype.templateString = data;
  });

  baseFunctions.startup = NetworkExplorerWidget.prototype.startup;
  baseFunctions.postCreate = NetworkExplorerWidget.prototype.postCreate;

  NetworkExplorerWidget.prototype.startup = function(){
    console.log('NetworkExplorerWidget startup');
    baseFunctions.startup.call(this);

    map = this.map;
    $('.jimu-widget-network-explorer .map-id').click(getMapId);
    $('.jimu-widget-network-explorer .my-title').text('title added by jquery.');
  };

  function getMapId(){
    alert(map.id);
  }

  NetworkExplorerWidget.hasStyle = false;
  NetworkExplorerWidget.hasUIFile = false;
  NetworkExplorerWidget.hasLocale = false;
  NetworkExplorerWidget.hasConfig = false;
  return NetworkExplorerWidget;
});


