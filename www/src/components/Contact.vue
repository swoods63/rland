<template>
  <div class="contact">
    <section id="contact" style="">
      <div class="container">
        <div class="row">
          <div class="about_our_company" style="margin-bottom: 20px;">
            <h1 style="color:#fff;">Recreationland Contact</h1>
            <div class="titleline-icon"></div>
            <p style="color:#fff;">We're looking forward to hearing from you.<br> Please add your contact information and a brief description of how we can help.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <form name="sentMessage" id="contactForm" novalidate="">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Your Name *" id="name" required="" data-validation-required-message="Please enter your name.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Your Email *" id="email" required="" data-validation-required-message="Please enter your email address.">
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input type="tel" class="form-control" placeholder="Your Phone *" id="phone" required="" data-validation-required-message="Please enter your phone number.">
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <textarea class="form-control" placeholder="Your Message *" id="message" required="" data-validation-required-message="Please enter a message."></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-right">
                  <div id="success"></div>
                  <button type="submit" class="btn btn-xl get">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-4">
            <p style="color:#fff;">
              <strong><i class="fa fa-map-marker"></i> Address</strong><br> 391 Oliver Rd., Thunder Bay, Ontario)
            </p>
            <p style="color:#fff;"><strong><i class="fa fa-phone"></i> Phone Number</strong><br> Office: (807) 683-9871
            </p>
            <p style="color:#fff;">
              <strong><i class="fa fa-envelope"></i>  Email Address</strong><br> elio@recreationland.net<br>
              <strong><i class="fa fa-envelope"></i>  Email Address</strong><br> steve_james@shaw.ca
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
  export default {
    name: "contact",
    data() {

    },
    computed: {},
    methods: {},
    components: {}
  }

</script>


<style scoped>
  section#contact {
    background-color: #222222;
    background-image:;
    background-position: center;
    background-repeat: no-repeat;
  }

  section {
    padding: 30px 0PX;
  }

  section#contact .section-heading {
    color: white;
  }

  section#contact .form-group {
    margin-bottom: 25px;
  }

  section#contact .form-group input,
  section#contact .form-group textarea {
    padding: 20px;
  }

  section#contact .form-group input.form-control {
    height: auto;
  }

  section#contact .form-group textarea.form-control {
    height: 500px;
  }

  section#contact .form-control:focus {
    border-color: #fed136;
    box-shadow: none;
  }

  section#contact ::-webkit-input-placeholder {
    font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    color: #c1bdbd;
  }

  .gellary_bg_none img {
    width: 100%;
    height: 250px;
  }

  section#contact :-moz-placeholder {
    /* Firefox 18- */
    font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    color: #eeeeee;
  }

  section#contact ::-moz-placeholder {
    /* Firefox 19+ */
    font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    color: #eeeeee;
  }

  section#contact :-ms-input-placeholder {
    font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    color: #eeeeee;
  }

  section#contact .text-danger {
    color: #e74c3c;
  }

  .about_our_company {
    text-align: center;
  }

  .about_our_company h1 {
    font-size: 60px;
  }

  .titleline-icon {
    position: relative;
    max-width: 100px;
    border-top: 4px double #F99700;
    margin: 20px auto 20px;
  }

  p{
    font-size: 30px;
  }

  .titleline-icon:after {
    position: absolute;
    top: -11px;
    left: 0;
    right: 0;
    margin: auto;
    font-family: 'FontAwesome';
    content: "\f141";
    font-size: 20px;
    line-height: 1;
    color: #F99700;
    text-align: center;
    vertical-align: middle;
    width: 40px;
    height: 20px;
    background: #ffffff;
  }
</style>


