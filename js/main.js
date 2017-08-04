$('.tabular.menu .item').tab();

$('.context1 .menu .button')
  .tab({
    // Context - Class context1
    context: $('.context1')
  })
;

$('#context2 .menu .button')
  .tab({
    // special keyword works same as above, context as parent element 
    context: 'parent'
});
