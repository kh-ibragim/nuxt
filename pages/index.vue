<template>
  <section class="container">

        <div class="uk-section  uk-section-large checkin-container">
            <div class="uk-container">
                    <form>

                    <div class="uk-margin">
                        <div class="uk-inline full uk-form-password">
                            <span class="uk-form-icon" uk-icon="icon: user"></span>
                            <input id="icon_prefix" type="text" required class="validate uk-input uk-form-width-large full radius" placeholder="Email" >
                        </div>
                    </div>

                    <div class="uk-margin">
                        <div class="uk-inline full">
                            <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                            <input id="password" type="password" required class="validate uk-input uk-form-width-large full radius" placeholder="Password" >
                        </div>
                    </div>
            
                    <div class="uk-margin">
                        <div class="full">
                          <button class="uk-button uk-button-primary uk-button-medium full wave radius" type="submit"  value="Submit">Login
  		                    </button>
                        </div>
                    </div>

                  </form>

                  
                    <div class="uk-margin">
                      <div class="full">
                        <nuxt-link to="/registration"><button class="uk-button uk-button-muted uk-button-medium full wave radius"  type="button">Registration</button></nuxt-link>
                      </div>
                    </div>
              
         </div>
        </div>  


  </section>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.full{
width: 100%;
}

.wave {
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  z-index: 1;
  transition: .3s ease-out;
}

.radius{
    border-radius: 10rem;
}

</style>
