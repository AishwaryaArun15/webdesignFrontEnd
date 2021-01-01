import React, { Component } from 'react'
import './Form.css';
class TabDashboard extends Component {
    render() {
        return (
<div className="totalBody">
<div className="border border-bottom-0 border-success">
<div className="reachHead display-4 bg-light">B-KISAN DASHBOARD</div>
<div  style={{width:"100%"}}>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <iframe width="925" height="525"
        src="https://www.youtube.com/embed/2e9viAUvwq4">
        </iframe>
    </div>
    <div class="carousel-item">
    <iframe width="525" height="525"
        src='./logo.jpg'>
        </iframe>  
    </div>
    <div class="carousel-item">
    <iframe width="925" height="525"
        src="https://www.youtube.com/embed/FFkOKY5JLwQ">
        </iframe>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>
</div>
</div>
<div className="border border-bottom-0 border-success">
<div className="reachHead display-4 bg-light">OUR PRODUCTS</div>

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal1" className="proImg1">
</button>
<div class="modal" id="myModal1">
  <div class="modal-dialog">
    <div class="modal-content"><div class="modal-body">
        Modal body1..
      </div>
      </div>
  </div>
</div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModa2" className="proImg2">

</button>
<div class="modal" id="myModa2">
  <div class="modal-dialog">
    <div class="modal-content"><div class="modal-body">
        Modal body2..
      </div>
      </div>
  </div>
</div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal3" className="proImg3">
  
</button>
<div class="modal" id="myModal3">
  <div class="modal-dialog">
    <div class="modal-content"><div class="modal-body">
        Modal body3..
      </div>
      </div>
  </div>
</div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal4" className="proImg4">

</button>
<div class="modal" id="myModal4">
  <div class="modal-dialog">
    <div class="modal-content"><div class="modal-body">
        Modal body4..
      </div>
      </div>
  </div>
</div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal5" className="proImg5">

</button>
<div class="modal" id="myModal5">
  <div class="modal-dialog">
    <div class="modal-content"><div class="modal-body">
        Modal body5..
      </div>
      </div>
  </div>
</div>
</div>

<div className="border border-success">
<div className="reachHead display-4 bg-light" >Reach Out To Us</div>
  <div class="row  mg-3">
      <div class="col-md-4 btmCol"style={{"background-color":"#79d279"}} >
      <h4> <i class="fa fa-envelope-o" aria-hidden="true"></i>  Email:</h4>
                        <h6>bkisansmartfarming@gmail.com</h6>
                        <ul>
                          <li><h5>OFFICE-CONTACT:</h5></li>
                          <li>9424538222</li>
                        </ul>
                        <ul><h5>Contacts:</h5>
                              <li>9754838222</li>
                              <li>9754038222</li>
                              <li>9754138222</li>
                              <li>7697438222</li>
                              <li>8966838222</li>
                        </ul></div>
      
      <div class="col-md-4 btmCol" style={{"background-color":"#8cd98c"}} >
        <h5><i class="fa fa-map-marker" aria-hidden="true"></i>  Location</h5>
        <i class="fas fa-map-marker-alt"></i>
        <h5>village+post - Taloon, district + Barwani<br/>(Madhyapradesh), Pin: 451551, India</h5>
        <h6 ><a href="https://goo.gl/maps/jRn15qT3nipavgiDA" target="_blank" className="alink">Reva flora</a> 
        <a href="https://goo.gl/maps/PnUQM1D4Pa9u11AWA" target="_blank" className="alink">B-kisan</a></h6>
      </div>
      <div class="col-md-2 btmCol"style={{"background-color":"#9fdf9f"}} >
        <h5>Column 4</h5>
        <a href="https://linkedin.com/in/b-kisan-24a998200" target="_blank"><button class="btn btn-primary"><i class="fa fa-linkedin" aria-hidden="true"></i>  linkedIn</button>
</a><br/>
        <a href="https://www.kisanpathashala.com" target="_blank"><button class="btn btn-info"><i class="fa fa-home"></i>  Company Website</button></a>                
      </div>
      <div class="col-md-2 btmCol" style={{"background-color":"#b3e6b3"}}>
        <h5>Column 4</h5>      
        <a href="https://linkedin.com/in/b-kisan-24a998200" target="_blank"><button class="btn btn-primary"><i class="fa fa-linkedin" aria-hidden="true"></i> linkedIn</button>
</a><br/> 
<a href="https://www.kisanpathashala.com" target="_blank"><button class="btn btn-success"><i class="fa fa-home"></i>  Company Website</button></a>                
      </div>
  </div>
  </div>
</div>
        )
    }
}
export default TabDashboard