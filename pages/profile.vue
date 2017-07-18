<template>
<div>

    <!--section-->
    <div class="uk-section uk-section-muted uk-section uk-padding-remove-top uk-padding-remove-bottom ">
        <div class="uk-card uk-card-muted uk-card-small uk-grid-collapse  uk-margin  uk-width-1-1 sect uk-margin-remove" data-uk-grid>
            <div class="uk-card-media-right uk-overflow-hidden uk-width-1-5@s ">
                <div class="avatar">
                    <img  class="uk-border-circle" src="https://s-media-cache-ak0.pinimg.com/originals/6d/bd/ea/6dbdeacb3b7ad332be657c9ca64f4b54.jpg" alt=""/>
                </div>
            </div>
        </div>
     <!--edit profile   -->
    <div>
        <a class="uk-icon-button" uk-icon="icon: file-edit" title="Edit profile" uk-tooltip uk-toggle="target: #toggle-usage"></a>


<form class="uk-form-horizontal " id="toggle-usage" hidden>


    <div class="uk-margin">
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input id="icon_prefix" type="text" class="validate uk-input uk-form-width-medium radius" placeholder="Name" pattern="[a-zA-Z0-9]+" required >
        </div>
    </div>

    <div class="uk-margin">
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input id="age" type="number" min="16" max="120" class="validate uk-input uk-form-width-medium radius" placeholder="Age" required>
        </div>
    </div>

    <div class="uk-margin">
        <div class="uk-inline">
          <button class="uk-button uk-button-muted uk-button-medium radius" type="submit"  value="Submit">Save
          </button>
        </div>
    </div>

</form>

    </div>
<!--
{/*primary info*/}-->
        <div class="uk-section uk-section-default uk-padding-remove ">       
        <!--{/*navigation tabs*/}-->
        <ul class="uk-flex-center uk-margin-remove uk-background-muted" data-uk-tab> 
            <li class="uk-active"><a href="" title="Life" uk-tooltip class="uk-icon-link" uk-icon="icon: location; ratio: 1.5"></a></li>
            <li><a href="" title="Meetings" uk-tooltip class="uk-icon-link" uk-icon="icon: world; ratio: 1.5"></a></li>
            <li><a href="" title="My posts" uk-tooltip class="uk-icon-link" uk-icon="icon: home; ratio: 1.5"></a></li>
            <li><a href="" title="Messages" uk-tooltip class="uk-icon-link" uk-icon="icon: mail; ratio: 1.5"></a></li>
        </ul>

        <ul class="uk-switcher uk-margin-remove uk-padding-remove">
            <li class="uk-active">
            <!--{/*life*/}-->
            <div  class="uk-margin-remove" >
                <div class="uk-width-1-1@s uk-margin-remove">
                    <div><Maps /></div>
                </div>
            </div>
            </li>

            <li>
            <!--{/*meetings*/}-->
            <div  class=" uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-1@s uk-grid-medium  uk-margin-top uk-margin-remove-right" data-uk-grid >


            <div class="uk-card uk-card-default uk-box-shadow-hover-xlarge">
                <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle" data-uk-grid>
                        <div class="uk-width-auto ">
                            <img class="smallimg uk-border-circle" src="http://young.scot/media/5781/istock_000041478802_xxxlarge.jpg" alt="User"/>
                        </div>
                        <div class="uk-width-expand">
                            <h3 class="uk-card-title uk-margin-remove-bottom">Party</h3>
                            <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                        </div>
                    </div>
                </div>
                <div class="uk-card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div class="uk-card-footer">
                    <div><a href="" class="uk-button uk-button-text">Respond</a>
                    </div>
                </div>
            </div>


            </div>
            </li>

        <li>
        <!--{/*my posts*/}  -->
            <div  class="uk-child-width-1-3@s uk-grid-small uk-grid-match uk-margin-remove" data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">
            
            <a class="uk-button uk-button-default" href="#modal-full" uk-toggle>Open</a>

<div id="modal-full" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
            <div class="uk-background-cover" style="background-image: url('http://young.scot/media/5781/istock_000041478802_xxxlarge.jpg');" uk-height-viewport></div>
            <div class="uk-padding-large">
                <h1>Headline</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
</div>


            </div>
        </li>

        <li>
        <!--{/*messages*/}-->
            <div class="uk-margin-remove" data-uk-grid>
                <div class="uk-width-3-5@l">
                    <div >Message
                    </div>
                </div>
                <div class="uk-width-1-5@l">
                    <div>My Messages</div>
                </div>
            </div>  
        </li>
        </ul>

    </div>
</div>


</div>
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

.avatar{
  width: 40%;
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

mapst{
  height: 78vh;

}

.smallimg{

height: 4.7em;
width: 5em;


}

.userimg{
  width: 9em;
  height: 7em;
  
}

.radsuserimg{
    border-radius: 10rem;
}

.sect{
  padding-top: 1rem;
}

</style>
