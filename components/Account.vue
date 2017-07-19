<template>
    <!--section-->
    <div class="uk-section uk-section-muted uk-section uk-padding-remove-top uk-padding-remove-bottom ">
        <div class="uk-card uk-card-muted uk-card-small uk-grid-collapse  uk-margin  uk-width-1-1 sect uk-margin-remove" data-uk-grid>
            <div class="uk-card-media-right uk-overflow-hidden uk-width-1-1@s ">
                <div class="avatar">
                    <img  class="uk-border-circle" src="https://s-media-cache-ak0.pinimg.com/originals/6d/bd/ea/6dbdeacb3b7ad332be657c9ca64f4b54.jpg" alt=""/>
                </div>
            </div>
        </div>
        <!--edit profile   -->
        <div>
            <a class="uk-icon-button" uk-icon="icon: file-edit" title="Edit profile" uk-tooltip href="#modal-overflow" uk-toggle></a>

            <div id="modal-overflow" uk-modal>
                <div class="uk-modal-dialog">
                    <button class="uk-modal-close-default" type="button" uk-close></button>
                        <div class="uk-modal-header">
                            <h2 class="uk-modal-title">Edit profile</h2>
                        </div>
                        <div class="uk-modal-body" uk-overflow-auto>

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
                        </form>
                </div>

                        <div class="uk-modal-footer uk-text-right">
                            <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                            <button class="uk-button uk-button-primary" type="button">Save</button>
                        </div>
            </div>
        </div>
    </div>
</div>

</template>

<style>
full{
width: 100%;
}


.radius{
    border-radius: 10rem;
}

.avatar{
  width: 17%;
  overflow: hidden;
  position: relative;
  margin: auto;
 
}
.avatar:after{
  content: "";
  padding-bottom: 100%;
  display: block;
}

.avatar img{
position: absolute;
padding: 0rem;
min-height: 100%;
min-width: 100%;
object-fit: cover;
}
</style>
