// named function with oprional Parameters 
function launch (URL : string , browser : string = "chrome"){
    console.log(URL);
    console.log(browser);
}

launch ("https://www.facebook.com/",
          "firefox")