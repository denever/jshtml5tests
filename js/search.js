// Autocomplete test
// 'Copyright (C) 2012  Giuseppe Martino'
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

var pages = [
    {"label": "home", "value": "home", "page": "search.html"},    
    {"label": "about", "value": "about", "page": "about.html"},
    {"label": "affected", "value": "affected", "page": "#affected"},
    {"label": "angry", "value": "angry", "page": "#angry"},
    {"label": "confidence", "value": "confidence", "page": "#confidence"},
    {"label": "contacts", "value": "contacts", "page": "#contacts"},
    {"label": "fashion", "value": "fashion", "page": "#fashion"},
    {"label": "home", "value": "home", "page": "#home"},
    {"label": "news", "value": "news", "page": "#news"},
    {"label": "press", "value": "press", "page": "#press"},
    {"label": "special project", value: "#specialproject"},
    {"label": "works", "value": "works", "page": "#works"},
];

function hide_pages(){
    $.each(pages, function(key, item) {
	       $(item['page']).hide();
	   });
}

function load_new_page(page){
    hide_pages();
    window.location= page;
}

function onload() {
    var availableTags = [
	"about",
	"affected",
	"angry",
	"confidence",
	"contacts",
	"fashion",
	"home",
	"news",
	"press",
	"special project",
	"works",
    ];
    hide_pages();
    $( "#search" ).autocomplete({
				    source: pages,
				    select: function(event, ui){
					console.log(ui.item.page);
					load_new_page(ui.item.page);
				    },
				});
    $("#search").keypress(function() {
			       if ( event.which == 13 ) {
				   event.preventDefault();
				   console.log('Premuto enter');
			       }
			  });
}