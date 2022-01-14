function Openmodal(mn){
    let modal = document.getElementById(mn)
    if (typeof modal == 'undefined' || modal == null)
        return;

        modal.style.display = 'Block';
}
function Closemodal(mn){
    let modal = document.getElementById(mn)
    if (typeof modal == 'undefined' || modal == null)
        return;
        modal.style.display = 'None';
}