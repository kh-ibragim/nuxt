<template>
 
            <!--user create new meeting -->
              <div>
              <div class="uk-card uk-card-default" style="background: #f5f5f5">
              <div class="uk-text-center">

                    <a class="uk-icon uk-icon-muted" uk-icon="icon: plus; ratio: 4" title="New gossip" uk-tooltip href="#modal-create-gossip" uk-toggle style="margin-top: 30%"></a>
                        <div id="modal-create-gossip" class="uk-modal-full" uk-modal>
                            <div class="uk-modal-dialog">
                                <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                                    <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                                        <div class="uk-background-cover" style="background-color: #f5f5f5;" uk-height-viewport>
                                            <div class="uk-text-center">
                                                Map
                                            </div>
                                        </div>
                                            <div class="uk-padding-large">
                                                <h2>Create new gossip</h2>


                                        <form class="uk-form-horizontal uk-margin-small">


                                            <div class="uk-margin">
                                                <label class="uk-form-label" for="form-horizontal-text">Description</label>
                                                <div class="uk-form-controls">
                                                    <textarea class="uk-textarea validate" rows="5" required placeholder="Gossip Description"></textarea>
                                                </div>
                                            </div>



                                            <div class="uk-margin">
                                                <div>
                                                    <button class="uk-button uk-button-muted uk-button-medium " type="submit"  value="Submit">Create gossip
                                                    </button>
                                                </div>
                                            </div>
                                        </form>


                                                </div>
                                        </div>
                            </div>
                        </div>
             
                </div>
                </div>
            </div>          



</template>

