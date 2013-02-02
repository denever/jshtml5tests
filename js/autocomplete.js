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

var caps = [
    {"label": "89133", "value": "89133", "comune": "Reggio Calabria", "provincia": "RC"},
    {"label": "50018", "value": "50018", "comune": "Scandicci", "provincia": "FI"},
]

function onload() {
    $( "#cap" ).autocomplete({
				    source: caps,
				    select: function(event, ui){
					$('#comune').val(ui.item.comune);
					$('#provincia').val(ui.item.provincia);
				    },
				});

    $("#cap").keypress(function() {
			       if ( event.which == 13 ) {
				   event.preventDefault();
				   console.log('Premuto enter');
			       }
			  });
}