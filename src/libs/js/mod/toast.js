
function toast(msg,time){
    this.msg = msg;
    this.dismissTime = time || 1000;
    this.createToast();
    this.showToast();
}

toast.prototype = {
    createToast:function(){
        var html = '<div class="toast">'+this.msg+'</div>';
        this.$toast = $(html)
        $('body').append(this.$toast)
    },
    showToast:function(){
        var _this = this;
        this.$toast.fadeIn(300,function(){
            setTimeout(function(){
                _this.$toast.fadeOut(300,function(){
                    _this.$toast.remove();
                })
            },_this.dismissTime);
        })
    }
}

function Toast(msg,time){
    return new toast(msg,time);
}

module.exports.Toast = Toast;









