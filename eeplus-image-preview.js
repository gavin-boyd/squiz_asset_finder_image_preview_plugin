EasyEdit.plugins.imagePreview = {
    init: function() {
        var self = this;
        EasyEditEventManager.bind('AssetFinderAfterInit', function() {
            $(document).on("click", "#ees_assetFinderBody a",
                function(e) {
                    setThumb('http://www.yoursite.com');
                });
        });
    }
};

function setThumb(siteURL) {
    if ($('#ees_assetFinderBody .selected .assetIcon').hasClass("image")) {
        $('#preview-image').remove();
        var assetidsel = $('.currentSelectionId').text();
        var assetidrem = $.trim(assetidsel);
        var assetid = assetidrem.replace('#', '');
        var asseturl = siteURL + '?a=' + assetid;
        var assethtml =
            '<div style="border:1px solid #000; width:200px;" id="preview-image"><img src="' +
            asseturl + '" width="200"/></div>';
        $('#ees_assetFinderFooter').append(assethtml);
    }
    if (!$('#ees_assetFinderBody .selected .assetIcon').hasClass("image")) {
        $('#preview-image').remove();
    }
}