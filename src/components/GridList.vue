<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=网格图片列表>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <div style="margin-top:20px;">
            <mu-grid-list class="gridlist-demo">
                <mu-sub-header>12月</mu-sub-header>
                <mu-grid-tile v-for="tile, index in list" :key="index">
                  <img :src="tile.image" >
                  <span slot="title">{{tile.title}}</span>
                  <span slot="subTitle">by <b>{{tile.author}}</b></span>
                  <mu-button slot="action" icon>
                      <mu-icon value="star_border"></mu-icon>
                  </mu-button>
                </mu-grid-tile>
            </mu-grid-list>
        </div>
        <div style="margin-top:20px;">
            <mu-grid-list class="gridlist-demo">
                <mu-sub-header>12月</mu-sub-header>
                <mu-grid-tile v-for="tile,index in list" :key="'tile' + index" title-position="top" action-position="left" :rows="tile.featured ? 2 : 1" :cols="tile.featured ? 2 : 1">
                <img :src="tile.image"/>
                <span slot="title">{{tile.title}}</span>
                <span slot="subTitle">by <b>{{tile.author}}</b></span>
                <mu-button slot="action" icon>
                    <mu-icon value="star_border"></mu-icon>
                </mu-button>
                </mu-grid-tile>
            </mu-grid-list>
        </div>
    </div>
</template>
<script>
import breakfast from '../assets/images/breakfast.jpg';
import burger from '../assets/images/burger.jpg';
import camera from '../assets/images/camera.jpg';
import hats from '../assets/images/hats.jpg';
import honey from '../assets/images/honey.jpg';
import morning from '../assets/images/morning.jpg';
import vegetables from '../assets/images/vegetables.jpg';
import waterPlant from '../assets/images/water-plant.jpg';
export default {
  data () {
    return {
      list: [{
        image: breakfast,
        title: 'Breakfast',
        author: 'Myron',
        featured: true
      }, {
        image: burger,
        title: 'Burger',
        author: 'Linyu'
      }, {
        image: camera,
        title: 'Camera',
        author: 'ruolin'
      }, {
        image: hats,
        title: 'Hats',
        author: 'kakali'
      }, {
        image: honey,
        title: 'Honey',
        author: 'yuyang'
      }, {
        image: morning,
        title: 'Morning',
        author: 'mokayi'
      }, {
        image: vegetables,
        title: 'Vegetables',
        author: 'NUyyyyyyy'
      }, {
        image: waterPlant,
        title: 'water',
        author: 'TDDyyyyyyy'
      }]
    }
  },
  methods:{
    goback () {
        this.$router.go(-1);
    }
  }
}
</script>
<style>
.gridlist-demo{
  width: 360px;
  height: 450px;
  overflow-y: auto;
}
</style>

