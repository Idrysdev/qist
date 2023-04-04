<header>
    <div class="header-area header-transparent">
        <div class="main-header header-sticky">
            <div class="container">
                <div class="row align-items-center">

                    <div class="col-xl-2 col-lg-2">
                        <div class="logo">
                            <a href="index.html"><img src="assets/img/logo/logo.png" width="200"  alt=""></a>

                            <a href="index.html"><img src="{{asset('front/assets/img/logo/logosalon.png')}}" width="200"  alt=""></a>
                        </div>
                    </div>
                    <div class="col-xl-10 col-lg-10">

                        <div class="main-menu f-right d-none d-lg-block">
                            <nav>
                                <ul id="navigation">
                                    <li><a href="{{asset('/')}}">Accueil</a></li>
                                    <li><a href="index.html#programme">Programme</a></li>
                                    <li><a href="{{route('universites')}}">Universités</a></li>
                                    <!-- <li><a href="blog.html">Blog</a>
                                        <ul class="submenu">
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog_details.html">Blog Details</a></li>
                                            <li><a href="elements.html">Elements</a></li>
                                        </ul>
                                    </li> -->
                                    <li><a href="{{route('about')}}">Contact</a></li>
                                    <li>
                                        <div class="header-right-btn f-right  ml-15 d-none d-xl-inline-block">
                                            <a href="#" class="header-btn">confirmez votre place<i
                                                    class="ti-arrow-right"></i> </a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>