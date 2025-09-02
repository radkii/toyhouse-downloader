importScripts("src/jszip.js");

chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
    // expects a download message annd gives a file to save as, from the message url
    if(msg.type === "download" && msg.urls) {
        let promises = [];
        for(let url of msg.urls){
            promises.push(new Promise(async (res, rej) => {
                const response = await fetch(url);
                res({
                    name: (new URL(url).pathname.split('/').pop()), 
                    blobPromise: response.blob()
                });
            }));
        }
        const blobs = await Promise.all(promises);

        let zip = new JSZip();
        for(let b of blobs){
            zip.file(b.name, b.blobPromise);
        }

        const zipBlob = await zip.generateAsync({type: 'blob'});
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64Data = reader.result; // data:...;base64,...
            chrome.downloads.download({
                url: base64Data,
                filename: "images.zip",
                saveAs: true
            });
        };
        reader.readAsDataURL(zipBlob);
    }
});
