//  配置插件
iziToast.settings({
    timeout: 1000,
    resetOnHover: true,
    icon: 'material-icons',
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: 'center'
});

function msgalert(type, msg, that) {

    if (type == 'error') {
        iziToast.error({
            title: 'Error',
            message: msg,
        })
        that.addClass("error")

    } else if (type == 'success') {
        iziToast.success({
            title: 'Success',
            message: msg,
        })
    } else if (type == 'warning') {
        iziToast.warning({
            title: 'warning',
            message: msg,
        })
    }
}