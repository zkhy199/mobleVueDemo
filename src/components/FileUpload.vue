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
                <td class="is-left">{{scope.row.explain}}</td>
                <td class="is-left">{{scope.row.type}}</td>
            </template>
            </mu-data-table>
        </mu-paper>
        <mu-paper :z-depth="1">
            <mu-data-table :columns="columns1" :data="list1">
            <template slot-scope="scope">
                <td>{{scope.row.name}}</td>
                <td class="is-left">{{scope.row.explain}}</td>
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
                { title: '说明', name: 'explain', width: 150, align: 'center'},
                { title: '类型', name: 'type', width: 200, align: 'center'}
            ],
            list: [
                {
                    name: 'action',
                    explain: '*必填，上传图片的api地址',
                    type: 'String'
                },
                {
                    name: 'disabled',
                    explain: '是否禁用',
                    type: 'Boolean(default:false)'
                },
                {
                    name: 'autoUpload',
                    explain: '是否自动上传',
                    type: 'Boolean(default:true)'
                },
                {
                    name: 'multiple',
                    explain: '是否支持一次多张图片',
                    type: 'Boolean(default:false)'
                },
                {
                    name: 'beforeUpload',
                    explain: '上传前钩子',
                    type: 'Fuction'
                },
                {
                    name: 'maxSize',
                    explain: '最大限制',
                    type: 'Number(default:Number.MAX_VALUE)'
                },
                {
                    name: 'onSuccess',
                    explain: '上传成功钩子',
                    type: 'Function(参数1:res，参数2：file)'
                },
                {
                    name: 'onProgress',
                    explain: '进度钩子',
                    type: 'Function(参数1:e，参数2：file)'
                },
                {
                    name: 'onError',
                    explain: '上传出错钩子',
                    type: 'Function(参数1:err，参数2：file)'
                },
                {
                    name: 'onRemove',
                    explain: '删除钩子',
                    type: 'Function(参数1:file)'
                }
            ],
			columns1: [
                { title: '方法', width: 150, name: 'name' },
                { title: '说明', name: 'explain', width: 200, align: 'center'}
            ],
            list1: [
                {
                    name: 'doSubmit',
                    explain: '非自动上传时调用此方法进行图片上传'
                }
            ]
		}
	}
}
</script>