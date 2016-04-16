/* Add clusters scroll */
for(var i = 0; i < clusters.length; i++) {
    var c = clusters[i];
    var label = '<small>#: ' + i + '<br>Ela.: ' + c.getDuration() + '<br>Count: ' + c.count + '</small>';
    $('#scroll_clusters').append('<option data-img-src="../' + c.getThumbnailPath() + '" data-img-label="' + label + '" value="' + i + '">' + i + '</option>')
}

function addListener(selector) {

    /* Add event when a cluster is selected */
    $.each($('#left').find('div'), function(index, obj) {
        $(obj).bind('click', function() {
            displayImages(clusters[index], selector);
        })
    });

}


function displayImages(cluster, selector) {

    var files = cluster.getFilesPath();
    $('#right').empty();
    $('#right').append('<select id="images_cluster" class="image-picker show-label show-html"></select>')
    for(var i = 0; i < files.length; i++)
        $('#images_cluster').append('<option data-img-src="../' + files[i] + '" data-img-label="<center><small>' + i + '</small></center>" value="' + i + '">' + i + '</option>')
    selector();
    addListener(selector);
}