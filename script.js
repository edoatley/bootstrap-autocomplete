$(document).ready(function(){
    var cars = ['Audi', 'BMW', 'Bugatti', 'Ferrari', 'Ford', 'Lamborghini', 'Mercedes Benz', 'Porsche', 'Rolls-Royce', 'Volkswagen'];

    // Constructing the suggestion engine
    var cars = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: cars
    });

    $('#search-button').on('click', function(event) {
      var searchterm = $('#search-box1').val();
      $('#result-container tbody').html("<tr><td>"+searchterm+"</td></tr>");
      $('#result').show();
    });

    $('#result').hide();

    $('input.typeahead').typeahead({
        hint: true,
        highlight: true, /* Enable substring highlighting */
        minLength: 1 /* Specify minimum characters required for showing suggestions */
    },
    {
        name: 'cars',
        source: cars
    });
//    $('input.typeahead').typeahead({
//    		source: function (query, process) {
//    			$.ajax({
//    				url: "search.php",
//    				type: "POST",
//    				data: 'query='+query,
//    				dataType: 'JSON',
//    				async: true,
//    				success: function(data){
//    						   var resultList = data.map(function (item) {
//    						   var link = { href: item.href, name: item.emp_name };
//    						   return JSON.stringify(link);
//    						 });
//    					return process(resultList);
//    				}
//    			})
//    		},
//    		matcher: function (obj) {
//    			var item = JSON.parse(obj);
//    			return item.name.toLowerCase().indexOf(this.query.toLowerCase())
//    		},
//    		sorter: function (items) {
//    		   var beginswith = [], caseSensitive = [], caseInsensitive = [], item;
//    		   while (link = items.shift()) {
//    				var item = JSON.parse(link);
//    				if (!item.name.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(JSON.stringify(item));
//    				else if (item.name.indexOf(this.query)) caseSensitive.push(JSON.stringify(item));
//    				else caseInsensitive.push(JSON.stringify(item));
//    			}
//    			return beginswith.concat(caseSensitive, caseInsensitive)
//    		},
//    		highlighter: function (link) {
//    			var item = JSON.parse(link);
//    			var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
//    			return item.name.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
//    				return '<strong>' + match + '</strong>'
//    			})
//    		},
//    		updater: function (link) {
//    		   var item = JSON.parse(link);
//    		   location.href=item.href;
//    		}
//    	});
});