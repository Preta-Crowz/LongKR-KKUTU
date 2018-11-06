(function(){
    var size
    $(document).ready(function(e){
        $(window).on('resize', function(e){
            size = [ $(window).width(), $(window).height() ];
      
            $("#Middle").css('margin-left', Math.max(0, size[0] * 0.5 - 500));
            $("#Bottom").width(size[0]);
        }).trigger('resize');
        $("#Background").attr('src', "");
        $("#quick-search-btn").on('click', function(e){
            var v;
                
            if($("#quick-search-btn").hasClass("searching")) return;
            if(v = $(".autocomp-select").html()) $("#quick-search-tf").val(v);
            $("#quick-search-btn").addClass("searching").html($("<i>").addClass("fa fa-spin fa-spinner"));
            location.href = "/단축?q=" + encodeURI($("#quick-search-tf").val());
        });
    });
})();