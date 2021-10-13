
//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

status="Quốc Định"
var a=new Array(),n=""
a[1]='M';
a[2]='ẹ';
a[3]=' ';
a[4]='t';
a[5]='ớ';
a[6]=' ';
a[7]='d';
a[8]='ặ';
a[9]='n';
a[10]=' ';
a[11]='k';
a[12]='h';
a[13]='ô';
a[14]='n';
a[15]='g';
a[16]=' ';
a[17]='đ';
a[18]='ư';
a[19]='ợ';
a[20]='c';
a[21]=' ';
a[22]='t';
a[23]='ừ';
a[24]=' ';
a[25]='c';
a[26]='h';
a[27]='ố';
a[28]='i';
a[29]=' ';
a[30]='n';
a[31]='g';
a[32]='ư';
a[33]='ờ';
a[34]='i';
a[35]=' ';
a[36]='đ';
a[37]='ẹ';
a[38]='p';
a[39]=' ';
a[40]=':';
a[41]='>';
function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==42)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					//PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
					$("#divResult").html("</br><h2>Í chòi sao mà đúng quá z :D<img src='http://vozforums.com/images/smilies/Off/adore.gif'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>♥ Ừa vậy là chốt rồi nha.♥ .<img src='http://vozforums.com/images/smilies/Off/angry.gif'/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>Skincare cẩn thận chuẩn bị đi prom nhóoo ♥ <img src='http://vozforums.com/images/smilies/Off/sure.gif'/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				