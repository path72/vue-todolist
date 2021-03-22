//# #################################################### #
//# DYNAMICS - Vue.js                                    #
//# #################################################### #

var app = new Vue(
	{
		el: '#root',
		data: {
			itemInput: '',
			itemList: ['elemento default'],
			delList: []
		},
		methods: {
			addItem: function() {
				if (this.itemInput && this.itemInput.trim()) {
					this.itemList.push(this.itemInput);
				}
				this.inputFocus();
				this.itemInput = '';
			},
			delItem: function(index) {
				this.delList.push({item: this.itemList[index], index});
				this.itemList.splice(index,1);
				this.inputFocus();
			},
			undoItem: function() {
				if (this.delList.length > 0) {
					let {item, index} = this.delList[this.delList.length-1];
					this.itemList.splice(index,0,item);
					this.delList.splice(this.delList.length-1,1);
					this.inputFocus();
				}
			},
			upItem: function(index) {
				let item = this.itemList[index];
				this.itemList.splice(index,1);
				this.itemList.splice(index-1,0,item);
			},
			downItem: function(index) {
				let item = this.itemList[index];
				this.itemList.splice(index,1);
				this.itemList.splice(index+1,0,item);
			},
			inputFocus: function() {
				this.$refs.itemInput.focus();
			}
		},
		created: function() {
			console.log(this);
			console.log('---- Vue() created ----');
			// this.inputFocus(); // qua non va bene, ci vuole mounted()
		},
		mounted: function() {
			this.inputFocus(); // qua va bene
		}
	}
);
