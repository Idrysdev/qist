@extends('layouts.front.index')
@section('content')
<div class="slider-area">
    <div class="single-slider hero-overly slider-height2 slider-bg2 d-flex align-items-center">
        <div class="container">
            <div class="row justify-content-center ">
                <div class="col-xxl-12">

                    <div class="hero-caption hero-caption2">
                        <h2>Nous contacter</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<section class="contact-section">
    <div class="container">

        <div class="map-area mb-50">
            <div id="contact-map" class="contact-map"></div>
        </div>
        <div class="row">
            <div class="col-12">
                <h2 class="contact-title">Prenez contact avec nous</h2>
            </div>
            <div class="col-lg-8">
                <form class="form-contact contact_form"
                    action="https://preview.colorlib.com/theme/eventotemplate/contact_process.php" method="post"
                    id="contactForm" novalidate="novalidate">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <textarea class="form-control w-100" name="message" id="message" cols="30"
                                    rows="9" onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'Entrer  Message'"
                                    placeholder=" Entrer le Message"></textarea>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input class="form-control valid" name="name" id="name" type="text"
                                    onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'Entrer votre nom'" placeholder="Entrer votre nom">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input class="form-control valid" name="email" id="email" type="email"
                                    onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'Entrer votre email'" placeholder="Entrer votre email">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <input class="form-control" name="subject" id="subject" type="text"
                                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Entrer le sujet'"
                                    placeholder="Entrer le sujet">
                            </div>
                        </div>
                    </div>
                    <div class="form-group mt-3">
                        <button type="submit" class="button button-contactForm btn_1">Envoyer</button>
                    </div>
                </form>
            </div>
            <div class="col-lg-3 offset-lg-1">
                <div class="media contact-info">
                    <span class="contact-info__icon"><i class="ti-home"></i></span>
                    <div class="media-body">
                        <h3>Cocody, Abidjan.</h3>
                        <p>Deux plateau, Rue K4</p>
                    </div>
                </div>
                <div class="media contact-info">
                    <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                    <div class="media-body">
                        <h3>+225 07 09 51 88 75</h3>
                        <p>Lundi à Vendredi 9h à 17h</p>
                    </div>
                </div>
                <div class="media contact-info">
                    <span class="contact-info__icon"><i class="ti-email"></i></span>
                    <div class="media-body">
                        <h3>
                        </h3>
                        <p>Envoyez-nous votre demande à tout moment !</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


@endsection
