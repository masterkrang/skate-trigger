$ ->
  forge.logging.info "Add JavaScript to js/main.js! Testing coffee-script..."
  $('#submit_button').click (e) ->
    showLoader()
    e.preventDefault()
    forge.logging.info "submit clicked"
    form = $(this).closest("form");
    url = form.attr("action")
    username = $("#username").val()
    password = $("#pwd").val()
    data = { username : username, password : password }
    forge.logging.info url
    $.ajax
      url: url
      data: data
      success: loginSuccess
      error: loginFail
      dataType: "json"
    
    false



loginFail = (response) ->
  console.log response

loginSuccess = (response) ->
  console.log reponse
  forge.logging.info "LOGIN SUCCESS"
  $("#loader").show()

showLoader = ->
  $("#loader").show()