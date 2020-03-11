window.onload = function (e) {
    $(document).ready(function () {
        $('.jumbotron').append(`

          <header class="jumbotron">
              <div class="container">
                  <div class="row row-header">
                      <div class="col-12 col-sm">
                          <h1 style="font-size:2.4rem;">Ristorante con Fusion</h1>
                          <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                          <p>“If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.” ...</p>
                      </div>
                  </div>
              </div>
          </header>

        `);

        $('.footer').append(`
        <div class="container">
                  <div class="row">
                      <div class="col-4 offset-1 col-sm-2">
                          <h5> <span class="fa fa-link"></span> Links</h5>
                          <ul class="list-unstyled">
                              <li><a href="index.html" style="font-size:1.0rem;">Home</a></li>
                              <li><a href="Registrations.html">Menu today</a></li>
                              <li><a href="spon_sorship.html">Gallery</a></li>
                              <li><a href="#">Accommodate</a></li>
                          </ul>
                      </div>
                      <div class="col-7 col-sm-5">
                          <h5> <span class="fa fa-map-marker"></span> Address</h5>
                          <address class="address">
                        Punjab Institute Of Technology (PIT), Rajpura<br>
                        <i class="fa fa-phone"> </i> &nbsp;: +91987654321<br>
                        <i class="fa fa-fax"> </i> : +91987654321<br>
                        <i class="fa fa-envelope"> </i> : <a href="mailto:icicc.editor@gmail.com">Ristorante-con-Fusion.editor@gmail.com</a>
                     </address>
                      </div>
                      <div class="col-12 col-sm-4 align-self-center">
                          <div class="text-center">
                              <h5 class="text-center">Social Media</h5>
                              <hr style="border-top: 1px dashed #327FBF">
                              <a class="btn btn-social-icon btn-facebook" href="#"><i class="fa fa-facebook fa-lg"></i></a>
                              <a class="btn btn-social-icon btn-linkedin" href="#"><i class="fa fa-linkedin fa-lg"></i></a>
                              <a class="btn btn-social-icon btn-twitter" href="#"><i class="fa fa-twitter fa-lg"></i></a>
                              <a class="btn btn-social-icon bg-light" href="mailto:icicc.editor@gmail.com"><i class="fa fa-envelope fa-lg"></i></a>
                          </div>
                      </div>
                 </div>
                 <div class="row justify-content-center">
                      <div class="col-auto">
                        <section class="sec Copyright">
                          <p class="footer_p_i_h2_a footer_p_i_a">Copyright &copy; Copyright 2020 Ristorante Con Fusion| All Rights Reserved |</p>
                  </section>
                      </div>
                 </div>
              </div>
        `);


        $('.navbar').append(`
        <button type="button"class="navbar-toggler" data-toggle="collapse" data-target="#Navbar">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                    <div class="collapse navbar-collapse" id="Navbar">
                                          <a class="navbar-brand mr-auto" href="index.html"><img src="gallery/logo.png" class="img-fluid" id="logo" alt="Logo"></a>
                      <ul class="nav navbar-nav">

                        <li class="nav-item">
                          <a class="nav-link text-white" href="index.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Menu</a>
                          </li>
                        <li class="nav-item dropdown dmenu">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                              About
                            </a>
                            <div class="dropdown-menu sm-menu text-white">
                              <a class="dropdown-item text-white" href="about_iccr_lab.html">About Restaurant</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item text-white" href="about_institute.html">About Chefs</a>
                            </div>
                          </li>
                          <li class="nav-item dropdown dmenu">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                              Items
                            </a>
                            <div class="dropdown-menu sm-menu">
                              <a class="dropdown-item text-white" href="call_for_papers.html">Veg Items</a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item text-white" href="paper_submission.html">Non-veg Items</a>
                            </div>
                          </li>

                          <li class="nav-item">
                            <a class="nav-link text-white" href="Registrations.html">Orderings</a>
                          </li>
                          <li class="nav-item">
                          <a class="nav-link text-white" href="important_dates.html">Dish of the Day</a>
                        </li>
                          <li class="nav-item">
                            <a class="nav-link text-white" href="publications.html">Contact</a>
                          </li>
                        <li class="nav-item dropdown dmenu">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbardrop" data-toggle="dropdown">
                          Committee
                        </a>
                        <div class="dropdown-menu sm-menu">
                          <a class="dropdown-item text-white" href="steering_committee.html">Committee</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item text-white" href="Advisory_and_technical_committee.html">Advisory committee</a>
                        </div>
                      </li>


                      <li class="nav-item">
                        <a class="nav-link text-white" href="downloads.html">Booking</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-white" href="#">Gallery</a>
                      </li>
                      </ul>
                    </div>
        `);
    });
  }
