<template>
            <div  class="uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-small uk-grid-match uk-margin-top uk-margin-left" data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">
            <!--user create new events -->
            <NewEvents />
            <!--first user events-->
            <div>
              <div class="uk-card uk-card-default ">
                <div class="uk-card-media-top">
                    <div class="uk-inline-clip uk-transition-toggle">
                        <img src="https://www.meetic.fr/pages/france/wp-content/uploads/sites/26/2016/04/Rencontre-Dordogne-GettyImages.jpg" alt="">
                            <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                <p class="uk-h4 uk-margin-remove">Event Description</p>
                            </div>
                    </div>
                </div>

                <div class="uk-card-footer uk-padding-remove-bottom">
                    Event Name
                    <a class="uk-button uk-button-text uk-align-right " href="#modal-full-event-first" uk-toggle>More</a>
                        <div id="modal-full-event-first" class="uk-modal-full" uk-modal>
                            <div class="uk-modal-dialog">
                                <a class="uk-position-center-left uk-position-small uk-hidden-hover uk-slidenav-large" href="#modal-full-event-first" uk-slidenav-previous></a>
                                <a class="uk-position-center-right uk-position-small uk-hidden-hover uk-slidenav-large" href="#modal-full-event-second" uk-slidenav-next></a>
                                <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                                    <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                                        <div class="uk-background-cover" style="background-image: url('https://www.meetic.fr/pages/france/wp-content/uploads/sites/26/2016/04/Rencontre-Dordogne-GettyImages.jpg');" uk-height-viewport></div>
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

            <!--second user events-->
            <div>
              <div class="uk-card uk-card-default ">
                <div class="uk-card-media-top">
                    <div class="uk-inline-clip uk-transition-toggle">
                        <img src="https://www.meetic.fr/pages/france/wp-content/uploads/sites/26/2016/04/Rencontre-Dordogne-GettyImages.jpg" alt="">
                            <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                <p class="uk-h4 uk-margin-remove">Event Description</p>
                            </div>
                    </div>
                </div>

                <div class="uk-card-footer uk-padding-remove-bottom">
                    Event Name
                    <a class="uk-button uk-button-text uk-align-right " href="#modal-full-event-fourth" uk-toggle>More</a>
                        <div id="modal-full-event-fourth" class="uk-modal-full" uk-modal>
                            <div class="uk-modal-dialog">
                                <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                                    <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                                        <div class="uk-background-cover" style="background-image: url('https://www.meetic.fr/pages/france/wp-content/uploads/sites/26/2016/04/Rencontre-Dordogne-GettyImages.jpg');" uk-height-viewport></div>
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


            <!--third user events-->
            <div>
              <div class="uk-card uk-card-default ">
                <div class="uk-card-media-top">
                    <div class="uk-inline-clip uk-transition-toggle">
                        <img src="https://www.meetic.fr/pages/france/wp-content/uploads/sites/26/2016/04/Rencontre-Dordogne-GettyImages.jpg" alt="">
                            <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                <p class="uk-h4 uk-margin-remove">Event Description</p>
                            </div>
                    </div>
                </div>

                <div class="uk-card-footer uk-padding-remove-bottom">
                    Event Name
                    <a class="uk-button uk-button-text uk-align-right " href="#modal-full-event-fourth" uk-toggle>More</a>
                        <div id="modal-full-event-fourth" class="uk-modal-full" uk-modal>
                            <div class="uk-modal-dialog">
                                <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                                    <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                                        <div class="uk-background-cover" style="background-image: url('https://www.meetic.fr/pages/france/wp-content/uploads/sites/26/2016/04/Rencontre-Dordogne-GettyImages.jpg');" uk-height-viewport></div>
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


            <!--4 user events-->
            <div>
              <div class="uk-card uk-card-default ">
                <div class="uk-card-media-top">
                    <div class="uk-inline-clip uk-transition-toggle">
                        <img src="https://www.meetic.fr/pages/france/wp-content/uploads/sites/26/2016/04/Rencontre-Dordogne-GettyImages.jpg" alt="">
                            <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                <p class="uk-h4 uk-margin-remove">Event Description</p>
                            </div>
                    </div>
                </div>

                <div class="uk-card-footer uk-padding-remove-bottom">
                    Event Name
                    <a class="uk-button uk-button-text uk-align-right " href="#modal-full-event-fourth" uk-toggle>More</a>
                        <div id="modal-full-event-fourth" class="uk-modal-full" uk-modal>
                            <div class="uk-modal-dialog">
                                <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                                    <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                                        <div class="uk-background-cover" style="background-image: url('https://www.meetic.fr/pages/france/wp-content/uploads/sites/26/2016/04/Rencontre-Dordogne-GettyImages.jpg');" uk-height-viewport></div>
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
</template>

<script>
import NewEvents from '~components/NewEvents.vue'

export default {
  components: {
    NewEvents
  }
}
</script>

<style>

</style>
