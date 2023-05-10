@extends('layouts.front.index')
@section('content')



<section class="team-area section-padding">
    <div class="container">
        <h1  class="title" style="text-align:center;margin-bottom:50px; color:orange;">LES STANDS EN 3D DES UNIVERSITES ET INSTITUTS</h1>
        <div class="row">
            <div class="col-lg-3">
                <div class="single-team mb-40">
                    <div class="team-img">
                        <a href="{{route('participants.uvci.stands')}}">
                            {{-- <img src='https://placehold.it/340x335' alt=''/> --}}
                            <img src="{{asset('front/assets/img/partenaires/13.jpg')}}"  alt=''/>
                        </a>
                        {{-- <div class="team-social">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div> --}}
                    </div>
                    <div class="team-caption">
                        <h3><a href="#">UVCI</a></h3>
                        {{-- <p>Localisation</p> --}}
                    </div>
                </div>

            </div>
            <div class="col-lg-3">
                <div class="single-team mb-40">
                    <div class="team-img">
                        <a href="{{asset('uvci_meta/index.htm')}}">
                            {{-- <img src='https://placehold.it/340x335' alt=''/> --}}
                            <img src="{{asset('front/assets/img/partenaires/1.jpg')}}"  alt=''/>
                        </a>
                        {{-- <div class="team-social">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div> --}}
                    </div>
                    <div class="team-caption">
                        <h3><a href="#">CNRA</a></h3>
                        {{-- <p>Localisation</p> --}}
                    </div>
                </div>

            </div>

            <div class="col-lg-3">
                <div class="single-team mb-40">
                    <div class="team-img">
                        <a href="{{asset('uvci_meta/index.htm')}}">
                            {{-- <img src='https://placehold.it/340x335' alt=''/> --}}
                            <img src="{{asset('front/assets/img/partenaires/2.jpg')}}"  alt=''/>
                        </a>
                        {{-- <div class="team-social">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div> --}}
                    </div>
                    <div class="team-caption">
                        <h3><a href="#">CRO</a></h3>
                        {{-- <p>Localisation</p> --}}
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="single-team mb-40">
                    <div class="team-img">
                        <a href="{{asset('uvci_meta/index.htm')}}">
                            {{-- <img src='https://placehold.it/340x335' alt=''/> --}}
                            <img src="{{asset('front/assets/img/partenaires/3.jpg')}}"  alt=''/>
                        </a>
                        {{-- <div class="team-social">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div> --}}
                    </div>
                    <div class="team-caption">
                        <h3><a href="#">CSRS</a></h3>
                        {{-- <p>Localisation</p> --}}
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="single-team mb-40">
                    <div class="team-img">
                        <a href="{{asset('uvci_meta/index.htm')}}">
                            {{-- <img src='https://placehold.it/340x335' alt=''/> --}}
                            <img src="{{asset('front/assets/img/partenaires/4.jpg')}}"  alt=''/>
                        </a>
                        {{-- <div class="team-social">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div> --}}
                    </div>
                    <div class="team-caption">
                        <h3><a href="#">ENSEA</a></h3>
                        {{-- <p>Localisation</p> --}}
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="single-team mb-40">
                    <div class="team-img">
                        <a href="{{asset('uvci_meta/index.htm')}}">
                            {{-- <img src='https://placehold.it/340x335' alt=''/> --}}
                            <img src="{{asset('front/assets/img/partenaires/5.jpg')}}"  alt=''/>
                        </a>
                        {{-- <div class="team-social">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div> --}}
                    </div>
                    <div class="team-caption">
                        <h3><a href="#">INPHB</a></h3>
                        {{-- <p>Localisation</p> --}}
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="single-team mb-40">
                    <div class="team-img">
                        <a href="{{asset('uvci_meta/index.htm')}}">
                            {{-- <img src='https://placehold.it/340x335' alt=''/> --}}
                            <img src="{{asset('front/assets/img/partenaires/6.jpg')}}"  alt=''/>
                        </a>
                        {{-- <div class="team-social">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div> --}}
                    </div>
                    <div class="team-caption">
                        <h3><a href="#">INSTITUT PASTEUR</a></h3>
                        {{-- <p>Localisation</p> --}}
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="single-team mb-40">
                    <div class="team-img">
                        <a href="{{asset('uvci_meta/index.htm')}}">
                            {{-- <img src='https://placehold.it/340x335' alt=''/> --}}
                            <img src="{{asset('front/assets/img/partenaires/7.jpg')}}"  alt=''/>
                        </a>
                        {{-- <div class="team-social">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div> --}}
                    </div>
                    <div class="team-caption">
                        <h3><a href="#">UAO</a></h3>
                        {{-- <p>Localisation</p> --}}
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="single-team mb-40">
                    <div class="team-img">
                        <a href="{{asset('uvci_meta/index.htm')}}">
                            {{-- <img src='https://placehold.it/340x335' alt=''/> --}}
                            <img src="{{asset('front/assets/img/partenaires/8.jpg')}}"  alt=''/>
                        </a>
                        {{-- <div class="team-social">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div> --}}
                    </div>
                    <div class="team-caption">
                        <h3><a href="#">UFHB</a></h3>
                        {{-- <p>Localisation</p> --}}
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="single-team mb-40">
                    <div class="team-img">
                        <a href="{{asset('uvci_meta/index.htm')}}">
                            {{-- <img src='https://placehold.it/340x335' alt=''/> --}}
                            <img src="{{asset('front/assets/img/partenaires/9.jpg')}}"  alt=''/>
                        </a>
                        {{-- <div class="team-social">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div> --}}
                    </div>
                    <div class="team-caption">
                        <h3><a href="#">UJLOG</a></h3>
                        {{-- <p>Localisation</p> --}}
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="single-team mb-40">
                    <div class="team-img">
                        <a href="{{asset('uvci_meta/index.htm')}}">
                            {{-- <img src='https://placehold.it/340x335' alt=''/> --}}
                            <img src="{{asset('front/assets/img/partenaires/10.jpg')}}"  alt=''/>
                        </a>
                        {{-- <div class="team-social">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div> --}}
                    </div>
                    <div class="team-caption">
                        <h3><a href="#">U-MAN</a></h3>
                        {{-- <p>Localisation</p> --}}
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="single-team mb-40">
                    <div class="team-img">
                        <a href="{{asset('uvci_meta/index.htm')}}">
                            {{-- <img src='https://placehold.it/340x335' alt=''/> --}}
                            <img src="{{asset('front/assets/img/partenaires/11.jpg')}}"  alt=''/>
                        </a>
                        {{-- <div class="team-social">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div> --}}
                    </div>
                    <div class="team-caption">
                        <h3><a href="#">UPGC</a></h3>
                        {{-- <p>Localisation</p> --}}
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="single-team mb-40">
                    <div class="team-img">
                        <a href="{{asset('uvci_meta/index.htm')}}">
                            {{-- <img src='https://placehold.it/340x335' alt=''/> --}}
                            <img src="{{asset('front/assets/img/partenaires/12.jpg')}}"  alt=''/>
                        </a>
                        {{-- <div class="team-social">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fas fa-globe"></i></a></li>
                            </ul>
                        </div> --}}
                    </div>
                    <div class="team-caption">
                        <h3><a href="#">USP</a></h3>
                        {{-- <p>Localisation</p> --}}
                    </div>
                </div>
            </div>


        </div>
    </div>
</section>

@endsection
