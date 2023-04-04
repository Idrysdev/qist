<!doctype html>
<html class="no-js" lang="zxx">



<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>QIST | 2023</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/icon/favicon.png">
    <link rel="stylesheet" href="{{asset("front/assets/css/bootstrap.min.css")}} ">
    <link rel="stylesheet" href="{{asset("front/assets/css/owl.carousel.min.css")}} ">
    <link rel="stylesheet" href="{{asset("front/assets/css/slicknav.css")}} ">
    <link rel="stylesheet" href="{{asset("front/assets/css/animate.min.css")}} ">
    <link rel="stylesheet" href="{{asset("front/assets/css/magnific-popup.css")}} ">
    <link rel="stylesheet" href="{{asset("front/assets/css/fontawesome-all.min.css")}} ">
    <link rel="stylesheet" href="{{asset("front/assets/css/themify-icons.css")}}">
    <link rel="stylesheet" href="{{asset("front/assets/css/slick.css")}} ">
    <link rel="stylesheet" href="{{asset("front/assets/css/nice-select.css")}} ">
    <link rel="stylesheet" href="{{asset("front/assets/css/style.css")}} ">
    @stack('styles')

</head>

<body class="body-bg">
  @include('partials._header')
    <main>
        @yield('content')
    </main>
    @include('partials._footer')

    <div id="back-top">
        <a class="wrapper" title="Go to Top" href="#">
            <div class="arrows-container">
                <div class="arrow arrow-one">
                </div>
                <div class="arrow arrow-two">
                </div>
            </div>
        </a>
    </div>


    <script src="{{asset('front/assets/js/vendor/modernizr-3.5.0.min.js')}} "></script>
    <script src="{{asset('front/assets/js/vendor/jquery-1.12.4.min.js')}} "></script>
    <script src="{{asset('front/assets/js/popper.min.js')}} "></script>
    <script src="{{asset('front/assets/js/bootstrap.min.js')}} "></script>

    <script src="{{asset('front/assets/js/owl.carousel.min.js')}} "></script>
    <script src="{{asset('front/assets/js/slick.min.js')}} "></script>
    <script src="{{asset('front/assets/js/jquery.slicknav.min.js')}} "></script>

    <script src="{{asset('front/assets/js/wow.min.js')}} "></script>
    <script src="{{asset('front/assets/js/jquery.magnific-popup.js')}} "></script>
    <script src="{{asset('front/assets/js/jquery.nice-select.min.js')}} "></script>
    <script src="{{asset('front/assets/js/jquery.counterup.min.js')}} "></script>
    <script src="{{asset('front/assets/js/waypoints.min.js')}} "></script>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB13ZAvCezMx5TETYIiGlzVIq65Mc2FG5g"></script>

    <script src="{{asset('front/assets/js/contact.js')}} "></script>
    <script src="{{asset('front/assets/js/jquery.form.js')}} "></script>
    <script src="{{asset('front/assets/js/jquery.validate.min.js')}} "></script>
    <script src="{{asset('front/assets/js/mail-script.js')}} "></script>
    <script src="{{asset('front/assets/js/jquery.ajaxchimp.min.js')}}"></script>

    <script src="{{asset('front/assets/js/plugins.js')}} "></script>
    <script src="{{asset('front/assets/js/main.js')}} "></script>
    @stack('scripts')



</body>


</html>
