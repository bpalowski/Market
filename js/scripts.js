$(document).ready(function() {
  $("form#form_01").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#name_info").val();
    var emailInput = $("input#email_info").val();
    var listInput = $("select#list_info").val();
    var how_manyInput = $("select#how_many").val();
    var list_2Input = $("select#list_info_2").val();
    var how_many_2Input = $("select#how_many_2").val();

    $(".name_info").text(nameInput);
    $(".email_info").text(emailInput);
    $(".list_info").text(listInput);
    $(".how_many").text(how_manyInput);
    $(".list_info_2").text(list_2Input);
    $(".how_many_2").text(how_many_2Input);


    $("#copy").show();
  });
});
