/*!                                   
      ;;                          
     '.;``                        
    .;;;,``                       
    ;''';;`,                      
    ';+;+;',;                     
   .,;;` ';',;                    
   ;.:'   ';','                   
   ';'`    ''';'                  
  ` ''      ';;;'  :'''+'':,.`    
  :,;`       ++;'. #..,;;++###+   
  `;;        :++', '   '  @   .   
 .;'`        ';';` `   ;  ;       
 ;,;         '`;;..       ;   `   
 '+'         '`;;`'   .   ;   `   
 ''''+++++   '`;; `   '   +;;;'   
 ,++++++#    '`;;`  ` ;  ':#+ ;   
  #+++++     ':'''   :, ;+++++:   
  .++''      ,:';,` .;;:+`,##',:  
              '';,` ''+':'++;'';. 
              ''', ;+'+#++++;;;;: 
              ;''' +++#+###;,;;;+ 
              ;'+# +++#####';;;++ 
              ;++;,#++###+#;;;''+ 
              ;+#'++++#+++++''+++ 
             `+++++'#+'+''++++'+' 
              `'++'#++++++++++;:. 
          ,++##+'+#######`.,:,    
     `.  `++##++++++++++#+#+####  
      ++',++''+#++#+#######+'#'#  
      +++++''+++##+''''''''+'#'#  
     ,'''+++++:+++'+'+'''+##++#'  
       ''''++: `##+#######+;.     
         :''+'   ++;,`            
      
 * Bobcat v0.1
 * Craig Collie
 * MIT license
 */

/*global $:true, console:false */
var bobcat = window.bobcat || {};
bobcat = {
	settings: {
		site: 			"site",
		loader:         document.getElementById("loader"),
		loaderText:     document.getElementById("loader-text"),
		loaderUpdate:   document.getElementById("loader-update"),
		progress:       0,
		instance:       {},
		lang: {
			initializing: 	"Initializing...",
			scripts: 		"Scripts loaded..",
			images: 		"Images loaded...",
			finished: 		"Finished..."
		}
	},
	lift: function(data){
		bobcat.onEvent(bobcat.settings.lang.initializing);
		(function(Modernizr) {
			Modernizr.load({
				load: data.paths,
				complete: function(){
					bobcat.onEvent(bobcat.settings.lang.scripts);
					bobcat.load();
				}
			});
		})(Modernizr);
	},
	onEvent: function(msg, count){
		if (count === undefined){count = 10;}
		bobcat.settings.progress += count;
		bobcat.render(msg);
	},
	render: function(msg){
		bobcat.settings.loaderText.innerHTML = Math.round(bobcat.settings.progress);
		bobcat.settings.loaderUpdate.innerHTML = msg;
	},
	load: function(){
		bobcat.onEvent(bobcat.settings.lang.images);
		var load = imagesLoaded(document), 
			_img = (100 - bobcat.settings.progress) / document.images.length;

		if (!bobcat.settings.instance['instance']){
			bobcat.command("show");
			load.on('progress', function(instance){
				bobcat.onEvent(bobcat.settings.lang.images, _img);
			}).on('always', function(instance){
				bobcat.settings.instance['instance'] = instance.isComplete;
				bobcat.command("hide");
				bobcat.onEvent(bobcat.settings.lang.finished, 0);
				window.bobcatLoaded(bobcat.settings.instance);
			});
		} else {
			bobcat.command("hide");
		}
	},
	command: function(command){
		switch(command){
			case "hide": 
				setTimeout(function(){
					bobcat.settings.progress = 0;
					bobcat.settings.loaderText.innerHTML = '0';
					bobcat.settings.loader.style.display = "none";
				}, 1000)
			break;
			case "show":
				bobcat.settings.loader.style.display = "block";
			break;
		}
	}
};

