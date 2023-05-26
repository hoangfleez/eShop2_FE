import React from 'react';

const List = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" style={{height:"700px" , objectFit:"container"}}>
    <div class="carousel-item active">
      <img src="https://sites.google.com/site/thoitrangnamnulongan/_/rsrc/1524193765627/home/free-vector-fashion-shopping-01-vector_000527_fashion_shopping_01_vector.jpg" class="d-block w-100 "  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.fashioncrab.com/wp-content/uploads/2016/01/Banner4.jpg" class="d-block w-100 h-10" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://xanhlo.com/media/wysiwyg/tintuc/mua-quan-ao-sale-off.jpg" class="d-block w-100 h-10" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
    </div>
  );
};

export default List;