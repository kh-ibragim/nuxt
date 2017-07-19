<template>
<div>

<Account />
<!--
{/*primary info*/}-->
        <div class="uk-section uk-section-default uk-padding-remove ">       
        <!--{/*navigation tabs*/}-->
        <Navigation />

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

        <div class="uk-section uk-section-muted uk-padding-remove"> 
            <a class="uk-icon-button uk-button-muted iplus" uk-icon="icon: plus; ratio: 1.5" title="Create Post" uk-tooltip href="#modal-overflow" uk-toggle></a>
        </div>

            <div  class="uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-small uk-grid-match uk-margin-top uk-margin-left" data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">




            <div>
              <div class="uk-card uk-card-default">
                <div class="uk-card-media-top">
                    <img src="http://young.scot/media/5781/istock_000041478802_xxxlarge.jpg" alt="">
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">Media Top</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div class="uk-card-footer">
                    <a class="uk-button uk-button-text" href="#modal-full" uk-toggle>More</a>
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

</template>

<script>
import Logo from '~components/Logo.vue'
import Account from '~components/Account.vue'
import Navigation from '~components/Navigation.vue'

export default {
  components: {
    Logo,
    Account,
    Navigation
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
.iplus{
    margin-left: 50%; 
    margin-top: 1%; 

}

</style>
