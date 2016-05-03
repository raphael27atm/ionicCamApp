camApp.controller('camController', function($scope){
    var tmpPic = document.getElementById('myPic');
    var tmpVid = document.getElementById('myVid');

    function picSuccess(imageURI){
        tmpPic.src = imageURI;
    }

    function picError(message){
        alert('failed because: ' + message);
    }

    $scope.takePic = function(){
        navigator.camera.getPicture(picSuccess, picError, 
        {
            quality: 50, 
            destinationType: Camera.DestinationType.FILE_URI, 
            saveToPhotoAlbum: true
        });
    };

    $scope.openPics = function(){
        navigator.camera.getPicture(picSuccess, picError, 
        {
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: Camera.DestinationType.FILE_URI
        });
    };


    function vidSuccess(vid){
        alert(vid);
        tmpVid.src = vid;
    }

    function vidError(message){
        alert('ailed because: ' + message);
    }

    $scope.openVids = function(){
        navigator.camera.getPicture(vidSuccess, vidError, 
        {
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: Camera.DestinationType.FILE_URI 
        });
    };

    var vidOptions = {
        limit: 1
    };

    function recSuccess(mediaFiles){
        alert(mediaFiles);
    }

    function recError(error){
        alert('Error code: ' + error.code, null, 'Capture Error');
    }

    $scope.recorVid = function(){
        navigator.device.capture.captureVideo(recSuccess, recError, vidoptions);
    };

});
