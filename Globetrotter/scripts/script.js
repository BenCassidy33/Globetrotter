$(function() {

    const slideShowImages = [
        "https://tampabayaircharter.com/wp-content/uploads/Bahamas.jpg",
        "https://cdn.britannica.com/14/94514-050-461B9A6D/Palm-trees-ocean-Bahamas-New-Providence-Island.jpg",
        "https://www.bahamas.com/assets/images/home-ttd-leisure-mobile.jpg",
        "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1444538489v2.jpg"
    ]

    let imageIdx = 0;
    let imageTransitionTime = 800;

    const videos = [
        "beach.mp4",
        "palmtrees.mp4",
        "sandWithTrees.mp4",
        "hut.mp4",
    ]

    let videoIdx = 0;
    let videoTransitionTime = 800;

    // Show initial image
    $("#imgSlideShowImg").attr('src', slideShowImages[imageIdx]);
    $("#verticalVideo").attr('src', `public/videos/${videos[videoIdx]}`) 

    function changeImage(newIdx) {
        let imgTag = $("#imgSlideShowImg")
        imgTag.fadeOut(imageTransitionTime);
        setTimeout(function() {
            imgTag.attr("src", slideShowImages[newIdx]);
            imgTag.fadeIn(imageTransitionTime)
        }, imageTransitionTime);
    }

    // Left arrow click event
    $(".left-arrow").click(function () {
        imageIdx = (imageIdx - 1 + slideShowImages.length) % slideShowImages.length; // Loop to the last image if index goes below 0
        changeImage(imageIdx);
    });

    // Right arrow click event
    $(".right-arrow").click(function () {
        imageIdx = (imageIdx + 1) % slideShowImages.length; // Loop back to the first image if index exceeds array length
        changeImage(imageIdx);
    });

    $("arrowButton").click(function () {
        console.log("test")
    })

    $(".uparrow").click(function () {
        videoIdx = (videoIdx - 1) % videos.length;
        changeVideo(videoIdx)
    })

    $(".downarrow").click(function () {
        videoIdx = (videoIdx + 1) % videos.length;
        changeVideo(videoIdx)
    })


    $(".muteUnmuteButtonButton").click(function () {
        let video = $("#verticalVideo")

        if (video.prop("muted") === false) {
            video.prop("muted", true);

        } else if (video.prop("muted") === true) {
            video.prop("muted", false)
        }

        if (video.prop("muted") === false) {
            $(".muteUnmuteButton").attr("src", "public/icons/volume-max-svgrepo-com.svg")

        } else if (video.prop("muted") === true) {
            $(".muteUnmuteButton").attr("src", "public/icons/volume-mute-svgrepo-com.svg")
        }
    })


    function changeVideo(newIdx) {
        console.log(newIdx)
        let videoTag = $("#verticalVideo");
        videoTag.fadeOut(videoTransitionTime);

        setTimeout(function () {
            videoTag.attr("src", `public/videos/${videos[newIdx]}`)
            videoTag.fadeIn(videoTransitionTime)

        }, videoTransitionTime)
    }
})