function findVideos() {
  const videos = document.querySelectorAll('[data-video]');
  videos.forEach((video) => {
    setupVideo(video);
  });
}

function setupVideo(video) {
  const link = video.querySelector('.hero__video-link');
  const button = video.querySelector('.hero__video-play');
  const id = video.dataset.src;

  video.addEventListener('click', () => {
    const iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('is-active');
}

function createIframe(id) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', id);
  iframe.classList.add('hero__video-iframe');
  iframe.setAttribute('allow', 'autoplay');

  return iframe;
}

export {findVideos};
