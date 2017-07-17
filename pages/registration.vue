<template>
  <section class="container">

<div class="uk-section checkin-container">
    <div class="uk-container">

        <form >

        <div class="uk-margin">
          <div class="uk-inline full">
              <span class="uk-form-icon" uk-icon="icon: user"></span>
              <input id="icon_prefix" type="text" class="validate uk-input uk-form-width-large full radius" placeholder="Name" pattern="[a-zA-Z0-9]+" required >
              <label for="icon_prefix" data-error="Name должно содержать только символы из латинского алфавита и цифры"></label>
          </div>
        </div>

        <div class="uk-margin">
          <div class="uk-inline full">
              <span class="uk-form-icon" uk-icon="icon: lock"></span>
              <input id="password" type="password" pattern="(?=.*\d)\w+.{6,30}" class="validate uk-input uk-form-width-large full radius" placeholder="Password" required>
              <label for="password" data-error="Пароль должен состоять минимально из 6 латинских символов и включать, по крайней мере одну букву и одну цифру"></label>
          </div>
        </div>

        <div class="uk-margin">
          <div class="uk-inline full">
              <span class="uk-form-icon" uk-icon="icon: mail"></span>
              <input id="email" type="email" class="validate uk-input uk-form-width-large full radius" placeholder="Email" required >
              <label for="email" data-error="Введите корректно свой email"></label>
          </div>
        </div>

        <div class="uk-margin">
          <div class="uk-inline full">
              <span class="uk-form-icon" uk-icon="icon: pencil"></span>
          <input id="age" type="number" min="16" max="120" class="validate uk-input uk-form-width-large full radius" placeholder="Age" required>
          </div>
        </div>

        
        <div class="uk-margin white radius">
          <div class="uk-form-controls full">
      		<label><input class="uk-radio" type="radio" name="sex" value="true" checked> Man </label>
      		<label><input class="uk-radio" type="radio" name="sex" value="false" >  Female</label>
          </div>
        </div>

      <div class="uk-margin">
        <div class="uk-inline full">
          <button class="uk-button uk-button-primary uk-button-medium full radius" type="submit"  value="Submit">Registration
          </button>
        </div>
      </div>

      </form>

      <div class="uk-margin">
        <div class="uk-inline full">
            <nuxt-link to="/">
                <button class="uk-button uk-button-muted  uk-button-medium full radius" type="button" >Login</button>
            </nuxt-link>
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
