








    
        $( "#result" ).text(profil.name );
        $.get("./getprofil.php?name="+pseudo)
        ("#level").text(profil.summonerLevel);
        ("#pseudo").text(profil.name)
        .done(function(data){
        console.log(    $("#input_text").val() );
        console.log("le niveau de "+ profil.name+ " est de  "+ profil.summonerLevel)
        console.log(profil);
        console.log(profil.name);
        console.log(profil.summonerLevel);
        majProfil (pseudo);
        profil = jQuery.parseJSON(data);
        var pseudo = $("#input_text").val();
    majProfil("toto");
    });
    });
   $("#imput_button").click(function(){
$(document).ready(function(){
function majProfil(pseudo){
}
});