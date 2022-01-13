/*!
 * Item: Kitzu
 * Description: Personal Portfolio Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v2.0.0
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */

/*----------- CUSTOM JS SCRIPTS -----------*/

(function($) {
  'use strict';
  $(function() {
    // Code here executes When the DOM is loaded...
  });
  $(window).on('load', function() {
    // Code here executes When the page is loaded

    //Assign src after page loads to correctly display boot animation
    let iFrameConsole = document.getElementById('iFrameConsole');
    iFrameConsole.setAttribute('src', 'https://ryanj-cli.netlify.app/');
  });
}(jQuery));