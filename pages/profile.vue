<template>
<div>
    <Account />
        <!--{/*primary info*/}-->
        <div class="uk-section uk-section-default uk-padding-remove ">       
            <!--{/*navigation tabs*/}-->
            <Navigation />
            <ul class="uk-switcher uk-margin-remove uk-padding-remove">
                <li class="uk-active">
                    <!--{/*life*/}-->
                    <Life />
                </li>
                <li>
                    <!--{/*meetings*/}-->
                    <Meetings />
                </li>
                <li>
                    <!--{/*my posts*/}  -->
                    <My />
                </li>
                <li>
                    <!--{/*messages*/}-->
                    <Messages />
                </li>
            </ul>
        </div>
</div>
</template>

<script>
import Logo from '~components/Logo.vue'
import Account from '~components/Account.vue'
import Navigation from '~components/Navigation.vue'
import Life from '~components/Life.vue'
import Meetings from '~components/Meetings.vue'
import My from '~components/My.vue'
import Messages from '~components/Messages.vue'

export default {
  components: {
    Logo,
    Account,
    Navigation,
    Life,
    Meetings,
    My,
    Messages
  }
}
</script>

<style>

.full{
width: 100%;
}


.radius{
    border-radius: 10rem;
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
