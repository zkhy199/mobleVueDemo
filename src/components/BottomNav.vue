<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=底部导航>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <mu-bottom-nav :value.sync="shift" shift>
            <mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>
            <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
            <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
        </mu-bottom-nav>
        <mu-bottom-nav :value.sync="shift" shift>
            <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"></mu-bottom-nav-item>
            <mu-bottom-nav-item value="music" title="Music" icon="music_note"></mu-bottom-nav-item>
            <mu-bottom-nav-item value="books" title="Books" icon="books"></mu-bottom-nav-item>
            <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"></mu-bottom-nav-item>
        </mu-bottom-nav>
    </div>
</template>
<script>
export default {
    data () {
        return{
            
        }
    },
    methods: {
        goback () {
            this.$router.go(-1);
        }
    }
}
</script>
<style>

</style>


