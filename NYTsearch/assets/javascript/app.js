$("#searchButton").on("click", function(){
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "d22ac3d774824da2abde46b056066c6d",
        'q': $("#searchTerm").val(),
        'begin_date': '20190114',
        'end_date': '20190114'
});

$.ajax({
url: url,
method: 'GET',
}).then(function(response) {
var articleNumbers = $("#articleNumbers").val()
console.log(articleNumbers);
var results = response.response.docs
for (i = 0; i < articleNumbers; i += 1){
    console.log(results[i])



}
});

//loop through the data set array based on number or articles selected
});




//update paramaters based on search selection
var updatedDate = $("#startYear").val()
