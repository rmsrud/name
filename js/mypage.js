$(function() {
  $('.MPtab ul li').on('click', function() {
    let i = $(this).index()
    console.log(i)

    $('.MPtab ul li').removeClass('MPtab_1')
    $('.MPtab ul li').eq(i).addClass('MPtab_1')

    $('.MPmain section').removeClass('MP_page_on')
    $('.MPmain section').eq(i).addClass('MP_page_on')
  })
})