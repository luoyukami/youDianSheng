/**
 * Created by ���� on 2016/10/13.
 */
// �ж��û���¼�˺������Ƿ���ȷ
$(document).ready(function(){
    function check_login()
    {
        var tel=$("#phone_num").val();
        var pass=$("#l_password").val();
        if(tel=="xxxxxxxxxx" && pass=="xxxxxxxxxx")
        {
            alert("��¼�ɹ���");
        }
        else
        {
            $("#login_form").removeClass('shake_effect');
            setTimeout(function()
            {
                $("#login_form").addClass('shake_effect')
            },1);
        }
    }

    function check_register(){
        var name = $("#r_phone_num").val();
        var pass = $("#r_password").val();
        var email = $("#r_idcode").val();
        if(name!="" && pass!="" && email != "")
        {
            alert("ע��ɹ���");
        }
        else
        {
            $("#login_form").removeClass('shake_effect');
            setTimeout(function()
            {
                $("#login_form").addClass('shake_effect')
            },1);
        }
    }
    $(function(){
        $("#create").click(function(){
            check_register();
            return false;
        })
        $("#login").click(function(){
            check_login();
            return false;
        })
        $('.message a').click(function () {
            $('form').animate({
                height: 'toggle',
                opacity: 'toggle'
            }, 'slow');
        });
    })
})