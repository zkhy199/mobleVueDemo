import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BottomNav from '@/components/BottomNav'
import Indicator from '@/components/Indicator'
import Buttons from '@/components/Buttons'
import Card from '@/components/Card'
import Chip from '@/components/Chip'
import DataTable from '@/components/DataTable'
import Dialog from '@/components/Dialog'
import Divider from '@/components/Divider'
import Drawer from '@/components/Drawer'
import GridList from '@/components/GridList'
import Form from '@/components/Form'
import DateInput from '@/components/DateInput'
import Select from '@/components/Select'
import Controls from '@/components/Controls'
import Textfield from '@/components/Textfield'
import List from '@/components/List'
import Pagination from '@/components/Pagination'
import Progress from '@/components/Progress'
import Toast from '@/components/Toast'
import Stepper from '@/components/Stepper'
import Tabs from '@/components/Tabs'
import Pull from '@/components/Pull'
import FileUpload from '@/components/FileUpload'
import axiosM from '@/components/axiosM'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bottomNav',
      name: 'BottomNav',
      component: BottomNav
    },
    {
      path: '/indicator',
      name: 'Indicator',
      component: Indicator
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/chip',
      name: 'Chip',
      component: Chip
    },
    {
      path: '/dataTable',
      name: 'DataTable',
      component: DataTable
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/divider',
      name: 'Divider',
      component: Divider
    },
    {
      path: '/drawer',
      name: 'Drawer',
      component: Drawer
    },
    {
      path: '/gridList',
      name: 'GridList',
      component: GridList
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/dateInput',
      name: 'DateInput',
      component: DateInput
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/controls',
      name: 'Controls',
      component: Controls
    },
    {
      path: '/textfield',
      name: 'Textfield',
      component: Textfield
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/pagination',
      name: 'Pagination',
      component: Pagination
    },
    {
      path: '/progress',
      name: 'Progress',
      component: Progress
    },
    {
      path: '/toast',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/stepper',
      name: 'Stepper',
      component: Stepper
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs
    },
    {
      path: '/pull',
      name: 'Pull',
      component: Pull
    },
    {
      path: '/fileUpload',
      name: 'FileUpload',
      component: FileUpload
    },
    {
      path: '/axiosM',
      name: 'axiosM',
      component: axiosM
    }
  
  ]
})
