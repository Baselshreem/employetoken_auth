
function getAccssessToken() {


    if (location.hash) {
        

        if (location.hash.split('access_token=')) {

            var accesstoken = location.hash.split('access_token=')[1].split('&')[0];
            if (accesstoken) {
                isUserRegisterd(accesstoken);

            }
        }
    }
}


function isUserRegisterd(accesstoken) {

    $.ajax({

        url: '/api/Account/UserInfo',


        method: 'GET',

        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + accesstoken

        },

        success: function (response) {
             
            if (response.HasRegistered) {

                localStorage.setItem('accessToken', accesstoken);
                localStorage.setItem('userName', response.Email)
                window.location.href = "Data.html";
            }
            else {

                signupExternaluser(accesstoken);
            }
        }


    });

}


function signupExternaluser(accesstoken) {

    $.ajax({

        url: '/api/Account/RegisterExternal',


        method: 'POST',

        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + accesstoken

        },

        success: function (response) {
            window.location.href = "/api/Account/ExternalLogin?provider=Google&response_type=token&client_id=self&redirect_uri=https%3A%2F%2Flocalhost%3A44374%2Flogin.html&state=c-svlzugpHpQHmYA6TP220yVucz4WiQinzy7rMECJFg1";

        }


    });

}