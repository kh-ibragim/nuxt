<template>
<div>
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
</div>
</template>

<style>
.iplus{
    margin-left: 50%; 
    margin-top: 1%; 

}

</style>
