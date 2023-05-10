@extends('layouts.front.index')

@push('styles')
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
@endpush

@section('content')
<style>
    body{
    /* display: flex; */
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #c4e538;
    position: relative;
    }
        .automodal{
        position: absolute;
        top: 150px;
        z-index: 2;
        right: 15%;
        width: 900px;
        margin: 0 auto;
        height: 350px;
        padding: 2rem;
        background-color: #fff;
        border-radius: 10px;
        display: none;
    }
    .automodal .quitter{
        margin-left: 48rem;
        display: flex;
        align-items: center;

    }
    .automodal .quitter span{
        font-size: 15px;
        text-transform: capitalize;
    }
    .automodal img{

        /* margin-left: 26rem; */
        cursor: pointer;
        height: 3.5vh;
    }
    .automodal h1{
        margin-bottom: 1rem;
        text-align: center;
    }
    .automodal p{
        font-size: 0.9rem;
        font-weight: 500;
        text-align: justify;
        color: #636e72;
    }
    .automodal button{
        display: block;
        margin: 0.5rem auto;
        padding: 0.5rem;
        width: 120px;
        background-color: #c4e538;
        border: 0px;
        outline: none;
    }

.text-clignote{
   animation-duration: .8s;
   animation-name: clignoter;
   animation-iteration-count: infinite;
   transition: none;
}
@keyframes clignoter {
  0%   { opacity:1; }
  40%   {opacity:0; }
  100% { opacity:1; }
}



</style>


<section class="slider-area">






    <div class="card automodal">
        <div class="quitter">
            <span style="margin-right:3px; font-weight:bold; font-size:15px; ">quitter</span>
            <img src="{{asset('front/assets/img/icon/exit.png')}}" class="close" />
        </div>
        {{-- <div class="card-header">Titre de la partir </div> --}}
        <div class="card-body mt-7">
            <p style="font-size: 29px ; text-align:center; padding-top:10px;">Le Ministère de l’Enseignement Supérieur et de la Recherche Scientifique  <strong>( MESRS )</strong>, en collaboration avec L'Université Virtuelle de Côte d'Ivoire <strong>( UVCI )</strong>, vous présente la Qinzaine Internationale de la Science et des Technologies <strong>( QIST ) 2023</strong>. </p>
            {{-- <p style="font-size: 35px; text-align:center;"> </p> --}}
    </div>




        {{-- <h1>heading</h1> --}}
        {{-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque quae illum inventore laborum quas,
            expedita quaerat officia voluptates distinctio blanditiis ad impedit voluptas ipsa quo esse tempore. Iste,
            officia?</p> --}}
            {{-- <button type="button">click me</button> --}}
    </div>




    <div class="slider-active mt-5">
        <div class="single-slider  slider-height hero-overly slider-bg1 d-flex align-items-center">
            <div class="container position-relative">
                <div class="row">
                    <div class="col-xxl-5col-xl-7 col-lg-6 col-md-8 col-sm-10">
                        <div class="hero-caption">
                            <h1 data-animation="pulse" class="animate__backInLeft text-clignote" data-delay=".2s"><span>AKWABA</span> QIST 2023</h1>
                            <span style="font-size:30px; color:white;">Quinzaine Internationale de la Science et des Technologies</span>
                            {{-- <img src="{{asset('front/assets/img/hero/akwaba.png')}}" width="900" alt=""> --}}

                            <div class="video-icon">
                                {{-- <a class="popup-video btn-icon"
                                    href="https://www.youtube.com/watch?v=up68UAfH0d0"><i
                                        class="fas fa-play"></i></a> --}}

                                        <a href="{{ route('participants') }}" class="text-clignote btn-icon"><i class="fas fa-play"></i></a>
                                        {{-- <a href="{{asset('VR_finale/index.htm')}}" class="text-clignote btn-icon"><i class="fas fa-play"></i></a> --}}
                                            <p style="font-weight:bold;">STANDS 3D DES UNIVERSITES ET INSTITUTS</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="hero-footer">
                    <h4 class="">11 MAI 2023</h4>
                    {{-- <p>3968 Carson Street, San Diego, CA 92101</p> --}}
                    <p>Cérémonie de lancement au Palm Club de 9h30 à 12h 30</p>
                    <a href="{{ route('universites') }}" class="btn_01">VISITE 3D DES UNIVERSITES ET INSTITUTS PARTENAIRES </a>
                    {{-- <a href="{{asset('uvci_meta/index.htm')}}" class="btn_01">VISITE 3D DES UNIVERSITES ET INSTITUTS PARTENAIRES </a> --}}
                    {{-- <a href="{{asset('uvci_meta/index.htm')}}" class="btn_01">VISITE VIRTUELLE UVCI</a> --}}
                </div>
            </div>
        </div>
    </div>
</section>






<script>
        document.querySelector(".close").addEventListener("click" , function(){
        document.querySelector(".automodal").style.display = "none";
    });

    window.addEventListener("load" , function(){D
        setTimeout(
            function open(event){
                document.querySelector(".automodal").style.display = "block";
            },
            2000
        )
    });
</script>

{{--
<section class="count-down-area top-padding">
    <div class="container">
        <div class="row justify-content-between ">
            <div class="col-xl-4 col-lg-4 col-md-6">

                <div class="section-tittle mb-40">
                    <h2>A propos <br> de la QIST</h2>
                    <a href="#" class="btn_1 mt-20">confirmez votre place<i class="ti-arrow-right"></i></a>
                </div>
            </div>
            <div class="col-xl-6 col-lg-7 col-md-12">

                <div class="section-tittle mb-40">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, vel omnis repellendus
                        mollitia, explicabo, maiores quisquam numquam quia reiciendis sit, accusantium atque ex
                        animi perspiciatis ab odit earum assumenda aliquid.</p>
                    <p>Dolor sit amet, consectetur adipisicing elit. Commodi, vel omnis repellendus mollitia,
                        explicabo, maiores quisquam numquam quia reiciendis sit, accusantium atque ex animi
                        perspiciatis ab odit earum assumenda aliquid.</p>
                </div>

                <div class="count-down-wrapper">
                    <div class="row justify-content-between">
                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4">

                            <div class="single mb-30">
                                <div class="single-counter">
                                    <p>0</p>
                                    <span class="counter ">3</span>
                                </div>
                                <div class="pera-count">
                                    <p>Day Event</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4">
                            <div class="single mb-30">

                                <div class="single-counter">
                                    <span class="counter ">10</span>
                                    <p class="">+</p>
                                </div>
                                <div class="pera-count">
                                    <p>Day Event</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4">
                            <div class="single mb-30">

                                <div class="single-counter">
                                    <span class="counter ">23</span>
                                    <p class="">+</p>
                                </div>
                                <div class="pera-count">
                                    <p>Sponsors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> --}}

{{--
@include('partials._participants')


@include('partials._about')


<section class="shedule-area section-padding" id="programme">
    <div class="container">
        <div class="row">
            <div class="col-xl-5 col-lg-6 col-md-6">

                <div class="section-tittle  mb-30">
                    <h2>Programme</h2>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-11">
                <div class="nav-button">

                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-link active" id="nav-one-tab" data-bs-toggle="tab" href="#nav-one"
                                role="tab" aria-controls="nav-one" aria-selected="true">17th Aug</a>
                            <a class="nav-link" id="nav-two-tab" data-bs-toggle="tab" href="#nav-two" role="tab"
                                aria-controls="nav-two" aria-selected="false">18th Aug</a>
                            <a class="nav-link" id="nav-three-tab" data-bs-toggle="tab" href="#nav-three"
                                role="tab" aria-controls="nav-three" aria-selected="false">19th Aug</a>
                        </div>
                    </nav>

                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-one" role="tabpanel" aria-labelledby="nav-one-tab">

                <div class="row justify-content-center">
                    <div class="col-lg-11">
                        <div class="shedule-wrapper">

                            <div class="single-items">
                                <div class="shedule-items">
                                    <div class="shedule-left">
                                        <div class="job-tittle">
                                            <a href="job_details.html">
                                                <h4>Registration And Breakfast</h4>
                                            </a>
                                            <p>- Mal Practice</p>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>8:30 am</span>
                                    </div>
                                </div>
                            </div>

                            <div class="single-items">
                                <div class="shedule-items">
                                    <div class="shedule-left">
                                        <div class="job-tittle">
                                            <a href="job_details.html">
                                                <h4>Opening Remarks And Keynote</h4>
                                            </a>
                                            <p>- Aaron Ottix</p>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>10:00 am</span>
                                    </div>
                                </div>
                            </div>

                            <div class="single-items">
                                <div class="shedule-items">
                                    <div class="shedule-left">
                                        <div class="job-tittle">
                                            <a href="job_details.html">
                                                <h4>Web Accessible Designs</h4>
                                            </a>
                                            <p>- Frank Senbeans</p>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>11:30 am</span>
                                    </div>
                                </div>
                            </div>

                            <div class="single-items">
                                <div class="shedule-items">
                                    <div class="shedule-left">
                                        <div class="job-tittle">
                                            <a href="job_details.html">
                                                <h4>Building Communities</h4>
                                            </a>
                                            <p>- Ken Tucky</p>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>12:30 am</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-two" role="tabpanel" aria-labelledby="nav-two-tab">

                <div class="row justify-content-center">
                    <div class="col-lg-11">
                        <div class="shedule-wrapper">

                            <div class="single-items">
                                <div class="shedule-items">
                                    <div class="shedule-left">
                                        <div class="job-tittle">
                                            <a href="job_details.html">
                                                <h4>Registration And Breakfast</h4>
                                            </a>
                                            <p>- Mal Practice</p>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>8:30 am</span>
                                    </div>
                                </div>
                            </div>

                            <div class="single-items">
                                <div class="shedule-items">
                                    <div class="shedule-left">
                                        <div class="job-tittle">
                                            <a href="job_details.html">
                                                <h4>Opening Remarks And Keynote</h4>
                                            </a>
                                            <p>- Aaron Ottix</p>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>10:00 am</span>
                                    </div>
                                </div>
                            </div>

                            <div class="single-items">
                                <div class="shedule-items">
                                    <div class="shedule-left">
                                        <div class="job-tittle">
                                            <a href="job_details.html">
                                                <h4>Web Accessible Designs</h4>
                                            </a>
                                            <p>- Frank Senbeans</p>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>11:30 am</span>
                                    </div>
                                </div>
                            </div>

                            <div class="single-items">
                                <div class="shedule-items">
                                    <div class="shedule-left">
                                        <div class="job-tittle">
                                            <a href="job_details.html">
                                                <h4>Building Communities</h4>
                                            </a>
                                            <p>- Ken Tucky</p>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>12:30 am</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-three" role="tabpanel" aria-labelledby="nav-three-tab">

                <div class="row justify-content-center">
                    <div class="col-lg-11">
                        <div class="shedule-wrapper">

                            <div class="single-items">
                                <div class="shedule-items">
                                    <div class="shedule-left">
                                        <div class="job-tittle">
                                            <a href="job_details.html">
                                                <h4>Registration And Breakfast</h4>
                                            </a>
                                            <p>- Mal Practice</p>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>8:30 am</span>
                                    </div>
                                </div>
                            </div>

                            <div class="single-items">
                                <div class="shedule-items">
                                    <div class="shedule-left">
                                        <div class="job-tittle">
                                            <a href="job_details.html">
                                                <h4>Opening Remarks And Keynote</h4>
                                            </a>
                                            <p>- Aaron Ottix</p>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>10:00 am</span>
                                    </div>
                                </div>
                            </div>

                            <div class="single-items">
                                <div class="shedule-items">
                                    <div class="shedule-left">
                                        <div class="job-tittle">
                                            <a href="job_details.html">
                                                <h4>Web Accessible Designs</h4>
                                            </a>
                                            <p>- Frank Senbeans</p>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>11:30 am</span>
                                    </div>
                                </div>
                            </div>

                            <div class="single-items">
                                <div class="shedule-items">
                                    <div class="shedule-left">
                                        <div class="job-tittle">
                                            <a href="job_details.html">
                                                <h4>Building Communities</h4>
                                            </a>
                                            <p>- Ken Tucky</p>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>12:30 am</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-four" role="tabpanel" aria-labelledby="nav-four-tab">

                <div class="row justify-content-center">
                    <div class="col-lg-11">
                        <div class="shedule-wrapper">

                            <div class="single-items">
                                <div class="shedule-items">
                                    <div class="shedule-left">
                                        <div class="job-tittle">
                                            <a href="job_details.html">
                                                <h4>Registration And Breakfast</h4>
                                            </a>
                                            <p>- Mal Practice</p>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>8:30 am</span>
                                    </div>
                                </div>
                            </div>

                            <div class="single-items">
                                <div class="shedule-items">
                                    <div class="shedule-left">
                                        <div class="job-tittle">
                                            <a href="job_details.html">
                                                <h4>Opening Remarks And Keynote</h4>
                                            </a>
                                            <p>- Aaron Ottix</p>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>10:00 am</span>
                                    </div>
                                </div>
                            </div>

                            <div class="single-items">
                                <div class="shedule-items">
                                    <div class="shedule-left">
                                        <div class="job-tittle">
                                            <a href="job_details.html">
                                                <h4>Web Accessible Designs</h4>
                                            </a>
                                            <p>- Frank Senbeans</p>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>11:30 am</span>
                                    </div>
                                </div>
                            </div>

                            <div class="single-items">
                                <div class="shedule-items">
                                    <div class="shedule-left">
                                        <div class="job-tittle">
                                            <a href="job_details.html">
                                                <h4>Building Communities</h4>
                                            </a>
                                            <p>- Ken Tucky</p>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>12:30 am</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<div class="map-area">
    <div id="contact-map" class="contact-map"></div>
</div>


@include('partials._partenaires') --}}

@endsection
