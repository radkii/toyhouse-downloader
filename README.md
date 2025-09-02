<h1 align="center">
    toyhouse-downloader
</h1>

The aptly named ***toyhouse-downloader*** is a browser extension which tries to make it easier to download multiple images from character galleries on toyhouse. It is meant for organizing one's own art, however it will work for others' galleries, with watermarked images as expected. 

On each gallery, the extension adds checkboxes and some basic buttons for selecting specific images. After clicking the download button, all selected images are bundled in a `.zip` file for downloading.

<img width="524" height="400" alt="toyhouse-ui" src="https://github.com/user-attachments/assets/56a46245-4e7f-4d0f-9edc-70f7324d37b0" />
<p></p>


> ***Disclaimer:***
> This project was build with the purpose of organizing and sorting images for toyhouse characters. While the project is open source and licensed as so, I do not condone its use in AI training or other data hungry applications.   


# Usage
The extension will work on any browser that supports chrome extensions (I think, I didn't check, except for Edge).
Since I don't feel like paying to have this project hosted on an extension webstore, it has to be loaded from a local folder: 
- Clone the repository.
- Access the extensions page, enable *Developer mode*, click *"Load unpacked"* and select the repository root directory.


# Development
As per the manifest, the extension only requires the `downloads` permission to open a modal window for the destination of the `.zip` file download.

Since Manifest Version 3 is stricter and prohibits fetching code (rightfully so), the [JSZip](https://stuk.github.io/jszip/) dependency is present as a monolithic script.

Some integration and smoke tests are done during development. They're called *"I download images and they look fine"*. I do that every now and then.


# Contributing
There are a lot of kinks to be ironed out, admittedly so, however I'm often busy with other things. 
As such, all pull request with improvements or issues reported are greatly appreciated!
