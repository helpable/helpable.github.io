
//------
// Teams
//------


function show_selected_team(event) {
    let member = event.target.parentNode.parentNode.parentNode
    console.log(member)


    setTimeout(() => {
        document.getElementById("infobox_team").style.display = "block"
        console.log("here")
    },1)

    let team_name = document.getElementById("team_name").innerHTML = member.querySelector('#name').innerHTML;
    let team_name_subtitle = document.getElementById("team_subtitle").innerHTML = member.querySelector('#role').innerHTML
    let team_para = document.getElementById("team_para").innerHTML = member.querySelector('#text').innerHTML
}


document.getElementById("hide_on_click").addEventListener("click", () => {
    document.getElementById("infobox_service").style.display = "none"
    document.getElementById("infobox_team").style.display = "none"
    document.getElementById("infobox_feature").style.display = "none"
    console.log("hi");
})
