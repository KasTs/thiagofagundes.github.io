$(function() {
    const token = "IGQVJYNjJxazlDTUMtSkdKcEdaNUNvQk5fWktqc3g5d2NNUnN6YzRhbFJlNXh3SXRMd0Q5V3NPbHFtQmdrZAjcwV2czTW02UURuQjhibkZAlZAUJwb0J6QldFR2dCeDd0LU1fUndNbFFKQ1ZACdmxNV2VUeAZDZD";
    const url = "https://graph.instagram.com/me/media?access_token="+token+"&fields=media_url,media_type,caption,permalink";

    $.get(url).then(function(response){
        console.log('retorno: ', response.data)
        let dadosJson = response.data
        let conteudo ='<div class="row" style="padding-left:5px">';
        let p = 0;
        for (p;  p < dadosJson.length; p++){
            let feed    = dadosJson[p];
            let titulo  = feed.caption !== null ? feed.caption : '';
            let tipo    = feed.media_type;

            if(tipo === 'VIDEO') { 
                conteudo += '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-x1-4 col-xxl-4"><video style="width:100%; heigth:90%; cursor:pointer" controls><source src="'+feed.media_url+'"type="video/mp4" </video> </div>';
            }
            else if(tipo === 'CAROUSEL_ALBUM'){
                conteudo += '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-x1-4 col-xxl-4"><img style="width:100%; heigth:90%; cursor:pointer" title="'+titulo+'" alt="'+titulo+'" src= "'+feed.media_url+'" onclick="window.open(\'' + feed.permalink + '\');"> </div>';
            }
            else if(tipo === 'IMAGE'){
                conteudo += '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-x1-4 col-xxl-4"><img style="width:100%; heigth:90%; cursor:pointer" title="'+titulo+'" alt="'+titulo+'" src= "'+feed.media_url+'" onclick="window.open(\'' + feed.permalink + '\');"> </div>';
            }
        }
        conteudo += '</div>'; 
        $('#insta').html(conteudo);
    })
});
