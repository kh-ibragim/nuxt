<template>
            <div  class="uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-small uk-grid-match uk-margin-top uk-margin-left" data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">
            <!--user create new gossip -->
            <NewGossip />
            <!--first user gossip-->
            <div>
              <div class="uk-card uk-card-default">
                <div class="uk-card-media-top">
                    <div class="uk-inline-clip uk-transition-toggle">
                        <img src="https://iheartpagelines.com/wp-content/uploads/2015/12/maps.jpg" alt="">
                            <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                <p class="uk-h4 uk-margin-remove">Gossip Description</p>
                            </div>
                    </div>
                </div>

                <div class="uk-card-footer uk-padding-remove-bottom">
                    Gossip Name
                    <a class="uk-button uk-button-text uk-align-right uk-padding-remove-bottom" href="#modal-full-gossip-first" uk-toggle>More</a>
                        <div id="modal-full-gossip-first" class="uk-modal-full" uk-modal>
                            <div class="uk-modal-dialog">
                                <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                                    <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                                        <div class="uk-background-cover" style="background-image: url('https://www.wired.com/wp-content/uploads/2016/11/GoogleMap-1.jpg');" uk-height-viewport></div>
                                            <div class="uk-padding-large">
                                                <h1>Gossip</h1>
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
import NewGossip from '~components/NewGossip.vue'

export default {
  components: {
    NewGossip
  }
}
</script>

<style>

</style>
