// ----------------
// STICKYSOCIAL
// ----------------
      jQuery.noConflict();
      jQuery(document).ready(function(){ 
        jQuery(&quot;.toggle-content&quot;).hide();  
        jQuery(&quot;#toggle-container&gt;h4&quot;).click(function(){
               jQuery(this).toggleClass(&quot;active&quot;).next().slideToggle(&quot;slow&quot;);
      });
      /* sidebars */
      jQuery(&#39;.widget-content li a&#39;).hover(function() {
             jQuery(this).animate({ paddingLeft: &#39;17px&#39; }, {duration:250});
                                  }, function() {
                                    jQuery(this).animate({ paddingLeft: &#39;15px&#39; }, {duration:250});           
                                                         });
                                    /* stickysocial */
                                    jQuery(&#39;.stickysocial img&#39;).fadeTo(&#39;slow&#39;, 0.88);
                                           jQuery(&#39;.stickysocial img&#39;).hover(function() {
                                           jQuery(this).fadeTo(&#39;slow&#39;, 1);
                                                               }, function() {
                                      jQuery(this).fadeTo(&#39;slow&#39;, 0.88);
                                                          });
                                    });