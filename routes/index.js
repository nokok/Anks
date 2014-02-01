exports.index = function(req, res){
  var books = new Array();
  books[0] ={
        index:        1,
        imgURL:       "http://www.freshnewsdelivery.com/media/11/20120113-bookstack.jpg",
        title:        "ほげほげの本",
        price:        1000,
        review:       "★★★★☆",
        reviewCount:  50
  };

  res.render('index', 
  {
    title: 'Anks',
    booklist: books
  });
};
