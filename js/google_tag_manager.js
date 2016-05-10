/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function ($) {
    Drupal.behaviors.addTagManager = {
        attach: function (context, settings) {
            var script =    "<!-- Google Tag Manager -->" +
                            "<noscript><iframe src=\"//www.googletagmanager.com/ns.html?id=GTM-NWZ2RP\" height=\"0\" width=\"0\" " + 
                            "style=\"display:none;visibility:hidden\"></iframe></noscript> <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push(" +
                            "{'gtm.start': new Date().getTime(),event:'gtm.js'}" +
                            ");var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';" + 
                            "j.async=true;j.src= '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })" +
                            "(window,document,'script','dataLayer','GTM-NWZ2RP');</script>" +
                            "<!-- End Google Tag Manager -->";
            $('body').append(script);
        }
    };
})(jQuery);