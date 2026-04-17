/*
 *	Custom JS Functions
 */


var $ = jQuery.noConflict();

// Document Ready Bindings
$(document).ready(function(){

    // Product gallery
    $('#product_thumbnail_gallery').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = ($(window).width() < 768) ? 3 : 4;
        var totalItems = $('#product_thumbnail_gallery .carousel-item').length;

        // console.log(idx);
        
        // show/hide arrow
        if(idx == 0) $('#product_thumbnail_gallery .carousel-control-prev').addClass('d-none');
        else $('#product_thumbnail_gallery .carousel-control-prev').removeClass('d-none');

        if((idx+itemsPerSlide) == totalItems) $('#product_thumbnail_gallery .carousel-control-next').addClass('d-none');
        else $('#product_thumbnail_gallery .carousel-control-next').removeClass('d-none');

        // append slides
        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (e.direction=="left") {
                    $('#product_thumbnail_gallery .carousel-item').eq(i).appendTo('#product_thumbnail_gallery .carousel-inner');
                }
                else {
                    $('#product_thumbnail_gallery .carousel-item').eq(0).appendTo('#product_thumbnail_gallery .carousel-inner');
                }
            }
        }

    });


    // Active big Product thumbnail
    $('#product_thumbnail_gallery .carousel-item .product-img-wrapper').mouseover(function(e){
        var wrapper_item = $(this).parent();
        var idx = wrapper_item.index();

        if($('.product_thumbnail .carousel-item:nth-child('+(idx+1)+')').hasClass('active')) return;

        $('.product_thumbnail .carousel-item').removeClass('active');
        $('.product_thumbnail .carousel-item:nth-child('+(idx+1)+')').addClass('active');

        // Zoom On Desktop
        var $img_src = $('.product_thumbnail .carousel-item:nth-child('+(idx+1)+') .product_thumbnail_item').attr('src');
        $('img.zoomImg').remove();
        if($(window).width() > 767 && typeof $img_src !== 'undefined'){
            // Product Gallery Zoom
            $('.product_thumbnail').zoom({
                url: $img_src,
                callback: function(){

                    // Popup Product gallery on click 
                    $(this).click(function(){

                        $('#product_popup_gallery .carousel-item:nth-child('+(idx+1)+')').addClass('active');
                        $('#product_popup_gallery .carousel-item:not(:nth-child('+(idx+1)+'))').removeClass('active');

                        $('#product_popup_gallery_indicator .indicator:nth-child('+(idx+1)+')').addClass('active');
                        $('#product_popup_gallery_indicator .indicator:not(:nth-child('+(idx+1)+'))').removeClass('active');

                        $('#product_popup_gallery_modal').modal('show');
                    });
                }
            });
        }

    });


    // Product Popup Gallery
    $('#product_popup_gallery, #product_popup_gallery_sm').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();

        $('.product_thumbnail .carousel-item').removeClass('active');
        $('.product_thumbnail .carousel-item:nth-child('+(idx+1)+')').addClass('active');

        $('#product_popup_gallery_indicator .indicator:nth-child('+(idx+1)+')').addClass('active');
        $('#product_popup_gallery_indicator .indicator:not(:nth-child('+(idx+1)+'))').removeClass('active');

        $('.total-items-in-gallery .number').html(idx+1);
    });

    // Product Popup Gallery
    $('#thumbnailCarousel').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();

        $('#product_popup_gallery_indicator .indicator:nth-child('+(idx+1)+')').addClass('active');
        $('#product_popup_gallery_indicator .indicator:not(:nth-child('+(idx+1)+'))').removeClass('active');

        $('.total-items-in-gallery .number').html(idx+1);
    });



    // My Account Active Menu
    $('.site-header__myaccount').mouseover(function() {
        $('.site-header__myaccount-dropdown').addClass('active');
    }).mouseleave(function() {
        $('.site-header__myaccount-dropdown').removeClass('active');
    });

    // My Account Nav for Mobile
    $('.woocommerce-MyAccount-navigation').change(function(e){
        e.preventDefault();
        window.location.href = $('select.woocommerce-MyAccount-navigation option:selected').attr('href');
    })

    // Init
    do_login();
    do_send_email_reset_password();
    do_business_registration();
    products_filter_change();
    do_enquire();

    // Popup Init
    login_popup();
    forget_password_popup();
    enquire_popup();

    // Close Popup onClick outside
    $('#main').on('click', function (e) {
        
        if($(e.target).attr('class') == 'login_popup_content_wrapper position-fixed' || $(e.target).attr('class') == 'forget_password_popup_content_wrapper position-fixed' || $(e.target).attr('class') == 'successfully_registration_popup_content_wrapper position-fixed' || $(e.target).attr('class') == 'enquire_popup_content_wrapper position-fixed') {
            $('#login_popup_wrapper').remove();
            $('#forget_password_popup_wrapper').remove();
            $('#successfully_registration_popup_wrapper').remove();
            $('#enquire_popup_wrapper').remove();
            
            $('body').css('overflow','auto');
        }

        if($(e.target).attr('class') == 'popup_close position-absolute') {
            $('#login_popup_wrapper').remove();
            $('#forget_password_popup_wrapper').remove();
            $('#successfully_registration_popup_wrapper').remove();
            $('#enquire_popup_wrapper').remove();
           
            $('body').css('overflow','auto');
        }
    });



    // Products filter slider
    $('.price-slider-range').slider({
        range: true, 
        min: parseInt($('.price-slider-range').attr('min')), // 0,
        max: parseInt($('.price-slider-range').attr('max')), // 3500,
        step: parseFloat($('.price-slider-range').attr('step')), // 50,
        values: [ parseFloat($('.price-slider-range').attr('min')), parseFloat($('.price-slider-range').attr('max')) ],
        slide: function( event, ui ) {
            // console.log(ui.values[1]);
            $('.min-price').html(ui.values[0]);
            $('.max-price').html(ui.values[1]);

            
        },
        stop: function( event, ui ) {
            products_filter_init();
        }
    });

    $('.weight-slider-range').slider({
        range: true, 
        min: parseInt($('.weight-slider-range').attr('min')), // 0,
        max: parseInt($('.weight-slider-range').attr('max')), // 3500,
        step: parseFloat($('.weight-slider-range').attr('step')), // 50,
        values: [ parseFloat($('.weight-slider-range').attr('min')), parseFloat($('.weight-slider-range').attr('max')) ],
        slide: function( event, ui ) {
            // console.log(ui.values[1]);
            $('.min-weight').html(ui.values[0]);
            $('.max-weight').html(ui.values[1]);         
        },
        stop: function( event, ui ) {
            products_filter_init();
        }
    });

    // Mobile filters
    $('a.btn-sm-filter').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('a.btn-sm-filter.main').toggleClass('open');
    });


    // Bill to Different Address
    $('#bill-to-different-address-checkbox').change(function(){
        if ($("#bill-to-different-address-checkbox").prop('checked')) $('.woocommerce-billing-fields').removeClass('d-none');
        else $('.woocommerce-billing-fields').addClass('d-none');

        // Update checkout event
        $('body').trigger('update_checkout');
    }).trigger('change');


    // Submit Coupon @ Cart page
    $('.btn-custom-coupon-submit').click(function(e){
        e.preventDefault();
        // console.log($(this).siblings('#coupon_code').val());
        $('.woocommerce-cart-form input[name="coupon_code"]').val($(this).siblings('#coupon_code').val());
        $('.woocommerce-cart-form button[name="apply_coupon"]').trigger('click');
    });
        
});

// checkout init
$('body').on('init_checkout', function(){
    console.log('init_checkout triggered');
    // now.do.whatever();
    $('select#billing_country').select2({ width: '100%' });
    $('select#billing_country').trigger('change');

    $('select#billing_state').select2({ width: '100%' });
    $('select#billing_state').trigger('change');


});

// checkout updated
$('body').on('updated_checkout', function(){
    console.log('updated_checkout triggered');
    

    // Move Shipping Country to last child
    // var shipping_country_clone = $('.woocommerce_checkout_shipping .woocommerce-shipping-fields__field-wrapper #shipping_country_field').clone(true);
    // $('.woocommerce_checkout_shipping .woocommerce-shipping-fields__field-wrapper #shipping_country_field').remove();
    // shipping_country_clone.find('span.select2').remove();
    // shipping_country_clone.find("select").select2({ width: '100%' });
    // $('.woocommerce_checkout_shipping .woocommerce-shipping-fields__field-wrapper').append(shipping_country_clone);

    // // shipping_country_clone.append($('.woocommerce_checkout_shipping .woocommerce-shipping-fields__field-wrapper:last'));
    // console.log(shipping_country_clone);


});


function login_popup(){
    $('body').delegate('a.login_popup','click', function(e){
        e.preventDefault();
        e.stopPropagation();
        // Loading
        $('body').addClass('loading');

        // Remove Current Popup
        // $('.register-popup-container').remove();
        $('.login-popup-container').remove();
        $('.forget_password-popup-container').remove();

        var data = { 'action':'login_popup' };
        $.post(ajaxurl,data,function(result){
            // console.log(result);
            // remove loading
            $('body').removeClass('loading');
            $('#primary #main').append(result.html);
            $('body').css('overflow','hidden');
        },"json");
    });
}

function do_login(){
    $(document).on('submit', '#login-form' , function(e) {
        e.preventDefault();
        e.stopPropagation();

        // Loading
        $('body').addClass('loading');

        // Reset error msg
        $(this).find('.error-msg').html('');

        var data = { 
            'action':'do_login',
            'user_login': $(this).find('#username').val(),
            'user_pass': $(this).find('#password').val()
        };


        $.post(ajaxurl,data,function(result){
            // remove loading
            $('body').removeClass('loading');

            if(result.success){
                $('#login-form .error-msg').html(result.message);
                window.location.href = location.protocol + '//' + location.host + location.pathname;
            }else{
                $('#login-form .error-msg').html(result.message);
            }

        },"json");

    });
}


function forget_password_popup(){
    $('body').delegate('a.forget-password','click', function(e){
        e.preventDefault();
        e.stopPropagation();
        // Loading
        $('body').addClass('loading');

        // Remove Current Popup
        // $('.register-popup-container').remove();
        $('.login-popup-container').remove();
        $('.forget_password-popup-container').remove();

        var data = { 'action':'forget_password_popup' };
        $.post(ajaxurl,data,function(result){
            // console.log(result);
            // remove loading
            $('body').removeClass('loading');
            $('#primary #main').append(result.html);
            $('body').css('overflow','hidden');
        },"json");
    });
}


function do_send_email_reset_password(){
    $(document).on('submit', '#forget_password-form' , function(e) {
        e.preventDefault();
        e.stopPropagation();

        // Loading
        $('body').addClass('loading');

        // Reset error msg
        $(this).find('.error-msg').html('');

        var data = { 
            'action':'send_email_reset_password',
            'user_login': $(this).find('#username').val(),
        };

            // console.log(data);

        $.post(ajaxurl,data,function(result){
            // console.log(result);

            // remove loading
            $('body').removeClass('loading');

            if(result.success){
                $('.forget_password-form-wrapper.sent-email').removeClass('d-none');
                $('.forget_password-form-wrapper:not(.sent-email)').remove();
            }else{
                $('#forget_password-form .error-msg').html(result.message);
            }

        },"json");

    });
}

function do_business_registration(){
    $('.woocommerce-business-register').submit(function(e){
        e.preventDefault();

        if(!$(this).find('input[name="terms"]').is(":checked")){
            $(this).find('.custom-checkbox.terms').addClass('has-error');
            return;
        }


        // Validate
        $validate = validate_fields();
        if(!$validate) return false;

        // Loading
        $('body').addClass('loading');

        var data = { 
            'action':'business_registration',
            'data': $(this).serialize(),
        };

        // console.log(data);

        $.post(ajaxurl,data,function(result){
           // console.log(result);


           // remove loading
            $('body').removeClass('loading');

           if(result.success){
                $('#successfully_registration_popup_wrapper').removeClass('d-none');
                $('.woocommerce-business-register')[0].reset();
            }else{
                $('.woocommerce-notices-wrapper').removeClass('d-none');
                $('.woocommerce-notices-wrapper li').html(result.message);
                // $('html, body').animate({
                //     scrollTop: $('.woocommerce-notices-wrapper').offset().top
                // }, 2000);
            }

        },"json");

    });
}

function enquire_popup(){
    $('body').delegate('.btn-enquire','click', function(e){
        e.preventDefault();
        e.stopPropagation();
        // Loading
        $('body').addClass('loading');

        // Remove Current Popup
        // $('.register-popup-container').remove();
        $('.login-popup-container').remove();
        $('.forget_password-popup-container').remove();

        var data = { 'action':'enquire_popup','product_id': $(this).attr('product_id') };
        $.post(ajaxurl,data,function(result){
            // console.log(result);
            // remove loading
            $('body').removeClass('loading');
            $('#primary #main').append(result.html);
            $('body').css('overflow','hidden');
        },"json");
    });
}

function do_enquire(){
    $(document).on('submit', '#enquire-form' , function(e) {
        e.preventDefault();
        e.stopPropagation();


        if(!$(this).find('input[name="terms"]').is(":checked")){
            $(this).find('.custom-checkbox.terms').addClass('has-error');
            return;
        }

        // Validate
        $validate = validate_fields();
        if(!$validate) return false;

        // Loading
        $('body').addClass('loading');

        // Reset error msg
        $(this).find('.error-msg').html('');

        var data = { 
            'action':'do_enquire_stone',
            'data': $(this).serialize(),
        };


        $.post(ajaxurl,data,function(result){


        // console.log(result);
            // remove loading
            $('body').removeClass('loading');

            if(result.success){
                $('.enquire-form-wrapper').empty();
                $('.enquire-form-wrapper').append(result.message);
            }else{
                $('#enquire-form .error-msg').html(result.message);
            }

        },"json");

    });
}

function validate_fields(){
    // Clear
    $('form input[type="text"]').removeClass('has-error');
    $('.woocommerce-notices-wrapper').addClass('d-none');

    $('form input[type="text"][required="required"]').each(function() {
        if(!$(this).val()) {
            $(this).addClass('has-error');
        }
    });

    if($('form input[type="text"]').hasClass('has-error')) {
        // remove loading
        $('body').removeClass('loading');
        return false;
    }else return true;
}

function products_filter_change(){
    $('.custom-filter').change(function(){

        // if children then tick parent
        if($(this).closest('.filter-wrapper').hasClass('product-cat-children')){
            if($(this).is(':checked')) {
                // console.log('children');
                // $(this).closest('.product-cat-parents').find('> .custom-checkbox .custom-filter').prop('checked', true);
                $(this).closest('.product-cat-parents').find('> .custom-checkbox .custom-filter').addClass('checked');
                $(this).closest('.product-cat-parents').find('> .custom-checkbox .custom-filter').prop('checked', false); // remove checked trigger from parent
            }else{
                // if any children is checked
                var is_true = false;
                $.each($(this).closest('.custom-checkbox').siblings().find('.custom-filter'), function(){
                    if($(this).is(':checked')) is_true = true;
                    // console.log($(this));
                });

                // if no children checked -> uncheck parent
                if(!is_true) {
                    // $(this).closest('.product-cat-parents').find('> .custom-checkbox .custom-filter').removeClass('checked');
                    $(this).closest('.product-cat-parents').find('> .custom-checkbox .custom-filter').trigger('click');
                }
            }
        }
        else {
            // console.log('parent');
            // if has class checked already -> then remove check
            if($(this).hasClass('checked')){
                // console.log('parent uncheck');
                // remove checked trigger from parent
                $(this).toggleClass('checked');
                $(this).prop('checked', false);

                // remove children
                $(this).closest('.product-cat-parents').find('.product-cat-children .custom-filter').prop('checked', false);
            }
        }

        products_filter_init();
    });

    $('.clear-filters').click(function(){
        clear_filters();
    });

    // Clear-filter @ Pagination
    $('.woocommerce-pagination').on('click', '.page-numbers', function(e) {
        e.preventDefault();
        e.stopPropagation();

        if($(this).attr('href')){
            window.location.href = $(this).attr('href');
            exit();
        }

        var _parent = $(this).parents('.woocommerce-pagination.filtered');
        if(_parent.attr('action') == 'clear_products_filter') clear_filters($(this).attr('page'));
        if(_parent.attr('action') == 'products_filter') products_filter_init($(this).attr('page'));

    });
    
}

function clear_filters($pagination=false){

        // Loading
        $('body').addClass('loading');

        var data = {'action':'clear_products_filter'};
        if($pagination) data['paged'] = $pagination;

        $.post(ajaxurl,data,function(result){
           // console.log(result);

            // remove loading
            $('body').removeClass('loading');

            // reset checkbox
            $('.custom-filter').prop('checked', false );

            // reset slider
            reset_slider('.price-slider-range');
            reset_slider('.weight-slider-range');

            // Product List
            $('ul.products').empty();
            $('ul.products').append(result.products);

            // pagination
            $('nav.woocommerce-pagination').empty();
            $('nav.woocommerce-pagination').addClass('filtered').attr('action','clear_products_filter').append(result.pagination);

            // Product Count
            $('p.woocommerce-result-count').html(result.count);

        },"json");
    
}

function products_filter_init($pagination=false){

    var category = [];
    $.each($('.custom-filter[name="category"]:checked'), function(){
        category.push($(this).val());
    });
    // console.log(category);

    var sets = [];
    $.each($('.custom-filter[name="sets"]:checked'), function(){
        sets.push($(this).val());
    });
    // console.log(sets);

    var shape = [];
    $.each($('.custom-filter[name="shape"]:checked'), function(){
        shape.push($(this).val());
    });

    var origin = [];
    $.each($('.custom-filter[name="origin"]:checked'), function(){
        origin.push($(this).val());
    });
    // console.log(origin);

    var treatments = [];
    $.each($('.custom-filter[name="treatments"]:checked'), function(){
        treatments.push($(this).val());
    });

    var price = {
        'min': $('.min-price').html(),
        'max': $('.max-price').html(),
    };

    var weight_ct = {
        'min': $('.min-weight').html(),
        'max': $('.max-weight').html(),
    };

    var data = {
            'category' : category,
            'sets' : sets,
            'shape' : shape,
            'origin' : origin,
            'treatments' : treatments,
            'price' : price,
            'weight_ct' : weight_ct,
    };

    // do ajax
    do_products_filter(data,$pagination);
}

function do_products_filter(data, $pagination=false){
    // Loading
    $('body').addClass('loading');

    var data = { 
        'action':'products_filter',
        'data': data,
    };
    if($pagination) data['paged'] = $pagination;

    // console.log(data);

    $.post(ajaxurl,data,function(result){
        // console.log(result);
        
        // remove loading
        $('body').removeClass('loading');

        // Product List
        $('ul.products').empty();
        $('ul.products').append(result.products);
        // $('ul.products').addClass('filtered');

        // pagination
        $('nav.woocommerce-pagination').empty();
        $('nav.woocommerce-pagination').addClass('filtered').attr('action','products_filter').append(result.pagination);

        // Product Count
        $('p.woocommerce-result-count').html(result.count);

    },"json");
}


// Cart Popup QTY Change
function update_cart_popup_item_qty(element){
    // Calculate QTY
    $qty = parseInt($(element).siblings('.cart-item-qty-html').html());
    $qty = parseInt($(element).attr('action')) + $qty;
    // if 0 return
    if($qty<1){ $(element).siblings('.cart-item-qty-html').html('1'); return;} 
    // Update HTML && QTY hidden input
    $(element).siblings('.cart-item-qty-html').html($qty);
    $(element).parents().siblings('.cart-item-qty').val($qty);

    // Update trigger
    update_cart_popup_qty($(element).parents().siblings('.cart-item-qty').val($qty));
}

// Update Cart Popup QTY
function update_cart_popup_qty(element){
    var key = $(element).attr('item-key');
    var qty = $(element).val();
    if(qty < 1) {
        $(element).val(1);
        qty = 1;
    }
    $('body').addClass('loading');
    var data = {'action':'update_cart_qty',key:key, qty:qty};
    $.post(ajaxurl,data,function(result){
        $('tr[item-key="'+result.key+'"] .product-subtotal').html(result.price);
        // $('.regular-total[item-key="'+result.key+'"]').html(result.regular_price);
        $('.cart_totals .shop_table .subtotal').html(result.subtotal);
        $('.cart_totals .shop_table .total').html(result.total);
        $('.site-header__top-links-wrapper .cart-count').html(result.cart_count);

        // Cart icon
        // setCookie('cart_count',result.cart_count);
        // upadte_cart_count();

        // if checkout page cart popup
        if($('body.woocommerce-checkout').length){
            // Trigger Change
            $('body').trigger('update_checkout');

            // Once checkout has been updated
            $('body').on('updated_checkout', function(){ 
                // Remove loading
                $('body').removeClass('loading');
            });
        }else $('body').removeClass('loading');

    },"json");  
}

// // WooCommerce Cart Count for menu
// function upadte_cart_count(){
//     // var count = parseInt(getCookie('cart_count')) | "0";
//     $('span.cart-count').html(count);
// }

function reset_slider(slider_selector) {
  // Reset the sliders to their original min/max values
    $(slider_selector).each(function () {
        var options = $(this).slider('option');
        $(this).slider({
            min: parseInt(options.min),
            max: parseInt(options.max),
            values: [options.min, options.max],
        });

        if(slider_selector == '.price-slider-range'){
            $('.min-price').html(options.min);
            $('.max-price').html(options.max);    
        }
        if(slider_selector == '.weight-slider-range'){
            $('.min-weight').html(options.min);
            $('.max-weight').html(options.max);    
        }
    });
};




$(document).ready(function(){
    $('#product_popup_gallery_sm').swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');

            console.log();
        },
        allowPageScroll:"vertical"
    });



    $('#thumbnailCarousel').swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },

        // Popup Product gallery on click 
        click:function(event,target){
            var idx = $(target).index('.product_thumbnail_item');
            $('#product_popup_gallery_sm .carousel-item:nth-child('+(idx+1)+')').addClass('active');
            $('#product_popup_gallery_sm .carousel-item:not(:nth-child('+(idx+1)+'))').removeClass('active');

            $('.total-items-in-gallery .number').html(idx+1);
            
            $('#product_popup_gallery_modal').modal('show');
        }, 
        allowPageScroll:"vertical"
    });
});