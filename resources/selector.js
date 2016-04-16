function selector() {
    jQuery( "select.image-picker" ).imagepicker( {
        hide_select: true,
        show_label: true
    } );

    var container = jQuery( "select.image-picker.masonry" ).next( "ul.thumbnails" );
    container.imagesLoaded( function () {
        container.masonry( {
            itemSelector: "li"
        } );
    } );
}

selector();
displayImages(clusters[0], selector);
addListener(selector);

/*
function updateStats( items ) {

    for ( var k = 0; k < items.length; k++ ) {
        items[k][1] = $( '.' + items[k][0] ).find( 'div' ).size();
        $( '#' + items[k][0] + '-percentage' ).text( ((items[k][1] / total) * 100).toPrecision( 3 ) );
    }

    var raw = items[0][1];
    var duplicate = items[1][1];
    var error = items[2][1];

    $('#duplicate-plus-error-percentage').text((((duplicate + error) / total) * 100).toPrecision( 3 ));
    $('#raw-without-error-percentage').text((raw / (total - error) * 100).toPrecision( 3 ));

}

total = $( '.raw' ).find( 'div' ).size();
items = [['raw', total], ['duplicate', 0], ['error', 0]];
$( '#clusters-number' ).text( total );


updateStats( items )

// Foreach buttons
for ( var j = 0; j < items.length; j++ ) {

    var actual = items[j][0];

    // For a button
    (function ( actual ) {
        $( '#' + actual + '-btn' ).click( function () {

            // Foreach selected gif who are not the button's category
            for ( var i = 0; i < items.length; i++ ) {
                if ( items[i][0] != actual ) {
                    $.each( $( '.' + items[i][0] ).find( 'div' ), function ( index, obj ) {
                        obj = $( obj );
                        if ( obj.hasClass( 'selected' ) ) {

                            // Move gif to the button's category
                            $( '.' + actual ).find( 'ul' ).append( obj.parent() );

                            // Deselect it
                            obj.trigger( 'click' );

                            // Update stats
                            updateStats( items );

                        }

                    } );

                }

            }

        } )
    })( actual );

}*/