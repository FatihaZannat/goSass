(function($){
    accordian()
    tabs()

    function accordian (){
        $('.cs_accordian').children('.cs_accordian_body').hide()
        $('.cs_accordian.active').children('.cs_accordian_body').show()
        $('.cs_accordian_head').on('click', function(){
           
            $(this)
            .parent('.cs_accordian')
            .siblings()
            .children('.cs_accordian_body')
            .slideUp(250);
            $(this).siblings().slideDown(250)
            $(this)
            .parent()
            .siblings()
            .find('.cs_accordian_body')
            .slideUp(250);
            // Accordian Active Class
            $(this).parents('.cs_accordian').addClass('active')
            $(this).parents('.cs_accordian').siblings().removeClass('active')

        })
    }

    function tabs (){
        $('.cs_tabs .cs_tab_links a').on('click', function(e){
            e.preventDefault();

           let currentAttrValue = $(this).attr('href')
      
        $('.cs_tab').hide()
        $(currentAttrValue).fadeIn(400)
            $(this).parents('li').addClass('active').siblings().removeClass('active')
       
           
        })
        
    }
})(jQuery)