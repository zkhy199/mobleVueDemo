<template>
	<div>
		<hy-upload
			:multiple="multiple"
			:action="action"
			:onSuccess="onSuccess"
			:beforeUpload="beforeUpload"
			:maxSize="maxSize"
			:onProgress="onProgress"
			:onError="onError"
			:onRemove="onRemove"></hy-upload>
		<p>点击上面的框框进行上传</p>
		<mu-paper :z-depth="1">
            <mu-data-table :columns="columns" :data="list">
            <template slot-scope="scope">
                <td>{{scope.row.name}}</td>
                <td class="is-left">{{scope.row.calories}}</td>
                <td class="is-left">{{scope.row.type}}</td>
            </template>
            </mu-data-table>
        </mu-paper>
	</div>
</template>

<script>
import Upload from './HY/Upload'
export default {
	components: {
		'hy-upload': Upload
	},
	data () {
		return {
			// 上传文件的地址
			action: '/upload',
			disabled: false,
			autoUpload: true,
			multiple: false,
			beforeUpload () {
				return true;
			},
			maxSize: 10000,
			onSuccess: function (res, file) {
				console.log(res);
				console.log(file);
			},
			onProgress (e, file) {
				console.log(e);
				console.log(file);
			},
			onError (err, file) {
				console.log(err);
				console.log(file);
			},
			onRemove (file) {
				console.log(file);
			},
			columns: [
                { title: '属性', width: 100, name: 'name' },
                { title: '说明', name: 'calories', width: 150, align: 'center'},
                { title: '类型', name: 'type', width: 200, align: 'center'}
            ],
            list: [
                {
                    name: 'action',
                    calories: '*必填，上传图片的api地址',
                    type: 'String'
                },
                {
                    name: 'disabled',
                    calories: '是否禁用',
                    type: 'Boolean(default:false)'
                },
                {
                    name: 'autoUpload',
                    calories: '是否自动上传',
                    type: 'Boolean(default:true)'
                },
                {
                    name: 'multiple',
                    calories: '是否支持一次多张图片',
                    type: 'Boolean(default:false)'
                },
                {
                    name: 'beforeUpload',
                    calories: '上传前钩子',
                    type: 'Fuction'
                },
                {
                    name: 'maxSize',
                    calories: '最大限制',
                    type: 'Number(default:Number.MAX_VALUE)'
                },
                {
                    name: 'onSuccess',
                    calories: '上传成功钩子',
                    type: 'Function(参数1:res，参数2：file)'
                },
                {
                    name: 'onProgress',
                    calories: '进度钩子',
                    type: 'Function(参数1:e，参数2：file)'
                },
                {
                    name: 'onError',
                    calories: '上传出错钩子',
                    type: 'Function(参数1:err，参数2：file)'
                },
                {
                    name: 'onRemove',
                    calories: '删除钩子',
                    type: 'Function(参数1:file)'
                }
            ]
		}
	}
}
</script>