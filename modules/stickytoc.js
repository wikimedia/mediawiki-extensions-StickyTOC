$( function () {
	var $toc = $( '#toc' ),
		float = mw.config.get( 'wgStickyTOCFloat' ),
		forceSticky = mw.config.get( 'wgStickyTOCNavbar' ),
		replaceTitle = mw.config.get( 'wgStickyTOCReplaceTitle' ),
		articleTitle = mw.config.get( 'wgTitle' ),
		$wrapper,
		$parent;

	if ( $toc.length ) {

		if( replaceTitle && articleTitle ) {
			$toc.find('#mw-toc-heading').text( articleTitle );
		}

		$toc.insertBefore( '#content' );
		$wrapper = $( '<div/>' )
			.addClass( 'sticky-top' )
			.addClass( 'stickytoc' )
			.addClass( 'stickytoc-pull-' + float );
		if( float === 'aside' ) {
			$parent = $toc.parent();
			$parent.addClass( 'stickytoc-parent' );
		}
		if( forceSticky ) {
			$wrapper.addClass( 'force-sticky' );
		}
		$toc.wrap( $wrapper );
	}
} );

