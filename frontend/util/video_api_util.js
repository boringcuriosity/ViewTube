export const fetchVideos = data => (
    $.ajax({
        method: 'GET',
        url: 'api/videos',
        data
    })
);

export const fetchVideo = videoId => (
    $.ajax({
        method: 'GET',
        url: `api/videos/${videoId}`
    })
);

export const createVideo = formData => (
    $.ajax({
        method: 'POST',
        url: 'api/videos',
        data: formData,
        contentType: false,
        processData: false
    })
);

export const updateVideo = video => (
    $.ajax({
        method: 'PATCH',
        url: `api/videos/${video.id}`,
        data: { video }
    })
);

export const deleteVideo = videoId => (
    $.ajax({
        method: 'DELETE',
        url: `api/videos/${videoId}`,
    })
);