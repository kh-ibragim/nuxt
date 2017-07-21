<template>
 
            <!--user create new meeting -->
              <div>
              <div class="uk-card uk-card-default" style="background: #f5f5f5">
              <div class="uk-text-center">

                    <a class="uk-icon uk-icon-muted" uk-icon="icon: plus; ratio: 4" title="New event" uk-tooltip href="#modal-create-event" uk-toggle style="margin-top: 30%"></a>
                        <div id="modal-create-event" class="uk-modal-full" uk-modal>
                            <div class="uk-modal-dialog">
                                <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                                    <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                                        <div class="uk-background-cover" style="background-color: #f5f5f5;" uk-height-viewport>
                                            <div class="uk-text-center">
                                            <div class="test-upload" style="margin-top: 10%" uk-form-custom>
                                                <input type="file" multiple>
                                                <a class="uk-icon" uk-icon="icon: cloud-upload; ratio: 3" uk-tooltip></a>
                                            </div>
                                            </div>
                                        </div>
                                            <div class="uk-padding-large">
                                                <h2>Create new event</h2>


                                        <form class="uk-form-horizontal uk-margin-small">

                                            <div class="uk-margin">
                                                <label class="uk-form-label" for="form-horizontal-text">Name</label>
                                                <div class="uk-form-controls">
                                                    <input class="uk-input validate" id="name" type="text" required placeholder="Event Name">
                                                </div>
                                            </div>

                                            <div class="uk-margin">
                                                <label class="uk-form-label" for="form-horizontal-text">Date</label>
                                                <div class="uk-form-controls">
                                                    <input class="uk-input validate" id="name" type="text" required placeholder="Event Date">
                                                </div>
                                            </div>

                                            <div class="uk-margin">
                                                <label class="uk-form-label" for="form-horizontal-text">Description</label>
                                                <div class="uk-form-controls">
                                                    <textarea class="uk-textarea validate" rows="5" required placeholder="Meeting Description"></textarea>
                                                </div>
                                            </div>


                                            <div class="uk-margin">
                                                <div class="uk-form-label">Show your location</div>
                                                <div class="uk-form-controls uk-form-controls-text">
                                                    <label><input class="uk-radio" type="radio" checked name="radio1"> Yes</label><br>
                                                    <label><input class="uk-radio" type="radio" name="radio1"> No</label>
                                                </div>
                                            </div>

                                            <div class="uk-margin">
                                                <div class="uk-form-label">Anonymous event</div>
                                                <div class="uk-form-controls uk-form-controls-text">
                                                    <label><input class="uk-radio" type="radio" checked name="radio2"> No</label><br>
                                                    <label><input class="uk-radio" type="radio" name="radio2"> Yes</label>
                                                </div>
                                            </div>


                                            <div class="uk-margin">
                                                <div>
                                                    <button class="uk-button uk-button-muted uk-button-medium " type="submit"  value="Submit">Create event
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

