function getResources() {
        $.getJSON('example/resources.json', function(data){
                        // Output the jobMetaData
                        $("#info").append('<strong>Beam:</strong> ' + data.jobMetaData.Beam + '</br>');
                        $("#info").append('<strong>Process:</strong> ' + data.jobMetaData.Process + '</br>');
                        $("#info").append('<strong>Energy:</strong> ' + data.jobMetaData.Energy + '</br>');
                        $("#info").append('<strong>Cuts:</strong> ' + data.jobMetaData.Cuts + '</br>');
                        $("#info").append('<strong>Generator:</strong> ' + data.jobMetaData.Generator + '</br>');
                        $("#info").append('<strong>Version:</strong> ' + data.jobMetaData.Version + '</br>');
                        $("#info").append('<strong>Tune:</strong> ' + data.jobMetaData.Tune + '</br>');
                        $("#info").append('<strong>Events:</strong> ' + data.jobMetaData.Events + '</br>');
                        // Retrieve histograms and append them to the figures
                        // div to create the gallery
                        $.each(data.sprites.histograms, function(index, histogram){
                                $("<img/>").attr("src","example" + histogram).appendTo("#figures");
                                });
                        });
}

function createGallery() {
        // Activate the Galleria plugin
        Galleria.loadTheme('js/galleria/themes/classic/galleria.classic.min.js');
        $("#figures").galleria({
                        widht: 480,
                        height: 480,
                        imagePosition: "center",
                        lightbox: true,
                        thumbnails: false
                        });
        // Grab the Gallery instance:
        var gallery = Galleria.get(0);
        // Set key-bindings
        gallery.attachKeyboard({
                        left: gallery.prev,
                        right: gallery.next,
                        up: gallery.openLightbox,
                        down: gallery.closeLightbox
                        });   
}

getResources();
createGallery();