const youtubeKey = 'youtube key buraya';
const youtubeUser = 'user id buraya';
const subCount = document.querySelector('.sub');
const vidCount = document.querySelector('.vid');
const coCount = document.querySelector('.co');
const delay = 10000;

let getSubscribers = () => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
            return response.json()
    })
    .then(data => {
            subCount.innerHTML = data["items"][0].statistics.subscriberCount;
            vidCount.innerHTML = data["items"][0].statistics.videoCount;
            coCount.innerHTML = data["items"][0].statistics.viewCount;
    })
}

setInterval(() => {
    getSubscribers();
}, delay);