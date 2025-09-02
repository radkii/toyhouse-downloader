// Add checkboxes to all the images on the gallery
for(let el of document.querySelectorAll(".thumb-image")){
    const span = document.createElement('span');
    span.style = "position: absolute;top: 0;left: 0;padding: 0.5rem;";
    
    const imgSelect = document.createElement('input');
    imgSelect.type = 'checkbox';
    imgSelect.src = el.querySelector('a').href;
    
    span.appendChild(imgSelect);
    el.appendChild(span);
}



const header = document.querySelector(".image-gallery-header");
header.children[0].style = "display: inline-block; margin-right: 0.5rem;";

// Add a select untabbed images button
const selectAll = document.createElement('button');
selectAll.style = "width: 4rem;font-size: 0.5rem;font-weight: bold;text-align: center;line-height: 0.5rem;margin-right: 0.5rem";
selectAll.textContent = "SELECT UNTABBED";
selectAll.onclick = () => {
    header.nextElementSibling.querySelectorAll('input[type="checkbox"]').forEach(chk => { 
        chk.checked = true;
    });
}
header.insertBefore(selectAll, header.children[1]);

// ... and add a download button
const downloadButton = document.createElement('button');
const downloadIcon = document.createElement('i');
downloadIcon.setAttribute('class', "fa fa-download");
downloadButton.appendChild(downloadIcon);
downloadButton.onclick = () => {
    let urls = [];
    for(let chk of document.querySelectorAll('input[type="checkbox"]')) {
        if(!chk.checked) continue;
        urls.push(chk.src);
    }

    if(urls.length == 0) {
        alert("No images were selected for downloading.");
        return;
    }

    chrome.runtime.sendMessage({ type: "download", urls });
};

header.insertBefore(downloadButton, header.children[2]);



// Add select all checkboxes to subgalleries
for(let el of document.querySelectorAll(".image-subgallery-header")) {
    el.children[0].style = "display: inline-block; margin-right: 0.5rem;";
    
    const selectAll = document.createElement('button');
    selectAll.style = "width: 3rem;font-size: 0.5rem;font-weight: bold;text-align: center;line-height: 0.5rem;";
    selectAll.textContent = "SELECT ALL";
    selectAll.onclick = () => {
        for(let chk of el.nextElementSibling.querySelectorAll('input[type="checkbox"]')){ 
            chk.checked = true;
        }
    }

    el.insertBefore(selectAll, el.children[1]);
}