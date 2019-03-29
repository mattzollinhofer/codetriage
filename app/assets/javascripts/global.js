jQuery(document).ready(function(){
  new Codetriage.TabNavigation();
  new Codetriage.previewLinkBuilder();
});

// See https://github.com/turbolinks/turbolinks/issues/313
// Using https://briancherne.github.io/jquery-hoverIntent/
// and turbolinks prefetch to make clicks instant
// on page-load and after turbolinks transition
// $(document).on("turbolinks:load", function(){
//   var $prefetcher;

//   $("a[data-turbolinks!=false]").hoverIntent(function(){
//     var href = $(this).attr("href");
//     if(!href.match(/^\//)){ return; } // do not prefetch outside urls or mailto:

//     // add or change the prefetched link, be careful not to preload the same href multiple times
//     if ($prefetcher) {
//       if($prefetcher.attr("href") != href) {
//         $prefetcher.attr("href", href);
//       }
//     } else {
//       // NOTE: pre-creating the link does not work
//       $prefetcher = $('<link rel="prefetch" href="' + href + '" />').appendTo("body");
//     }
//   });
// });
